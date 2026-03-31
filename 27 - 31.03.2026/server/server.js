/**
 * Учебный Express сервер форума на SQLite (async версия)
 * Библиотека: sqlite3 (не требует компиляции на Windows)
 */

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Инициализация БД ---
const db = new sqlite3.Database('forum.db', (err) => {
  if (err) console.error('Ошибка подключения к БД:', err);
  else console.log('Подключено к forum.db');
});

// Создаём таблицы
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS threads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    thread_id INTEGER NOT NULL,
    author_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (thread_id) REFERENCES threads(id) ON DELETE CASCADE,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
  )`);
});

// --- Хелпер для промисификации запросов ---
const query = (sql, params = []) => new Promise((resolve, reject) => {
  db.get(sql, params, (err, row) => err ? reject(err) : resolve(row));
});
const all = (sql, params = []) => new Promise((resolve, reject) => {
  db.all(sql, params, (err, rows) => err ? reject(err) : resolve(rows));
});
const run = (sql, params = []) => new Promise((resolve, reject) => {
  db.run(sql, params, function(err) {
    if (err) reject(err);
    else resolve({ lastID: this.lastID, changes: this.changes });
  });
});

// --- API Routes ---

// Регистрация
app.post('/api/register', async (req, res) => {
  console.log(req.body)
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Нужно указать имя и пароль' });

  try {
    const { lastID } = await run(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    );
    res.status(201).json({ id: lastID, username });
  } catch (err) {
    if (err.message.includes('UNIQUE constraint failed')) {
      return res.status(400).json({ error: 'Пользователь уже существует' });
    }
    res.status(500).json({ error: 'Ошибка БД: ' + err.message });
  }
});

// Вход
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await query(
    'SELECT id, username FROM users WHERE username = ? AND password = ?',
    [username, password]
  );
  if (user) {
    res.json({ message: 'Вход успешен', user });
  } else {
    res.status(401).json({ error: 'Неверный логин или пароль' });
  }
});

// Список тем
app.get('/api/threads', async (req, res) => {
  const threads = await all(`
    SELECT threads.*, users.username as author_name 
    FROM threads 
    JOIN users ON threads.author_id = users.id 
    ORDER BY threads.created_at DESC
  `);
  res.json(threads);
});

// Одна тема + посты
app.get('/api/threads/:id', async (req, res) => {
  const thread = await query(`
    SELECT threads.*, users.username as author_name 
    FROM threads 
    JOIN users ON threads.author_id = users.id 
    WHERE threads.id = ?
  `, [req.params.id]);

  if (!thread) return res.status(404).json({ error: 'Тема не найдена' });

  const posts = await all(`
    SELECT posts.*, users.username as author_name 
    FROM posts 
    JOIN users ON posts.author_id = users.id 
    WHERE posts.thread_id = ?
    ORDER BY posts.created_at ASC
  `, [req.params.id]);

  res.json({ ...thread, posts });
});


// Создать тему
app.post('/api/threads', async (req, res) => {
  const { title, content, author_id } = req.body;
  if (!title || !content || !author_id) {
    return res.status(400).json({ error: 'Нужны заголовок, контент и ID автора' });
  }
  const { lastID } = await run(
    'INSERT INTO threads (title, content, author_id) VALUES (?, ?, ?)',
    [title, content, author_id]
  );
  res.status(201).json({ id: lastID, title, content });
});

// Удалить тему
app.delete('/api/threads/:id', async (req, res) => {
  const { changes } = await run('DELETE FROM threads WHERE id = ?', [req.params.id]);
  if (changes === 0) return res.status(404).json({ error: 'Тема не найдена' });
  res.json({ message: 'Тема удалена' });
});

// Добавить пост
app.post('/api/threads/:id/posts', async (req, res) => {
  const { content, author_id } = req.body;
  if (!content || !author_id) {
    return res.status(400).json({ error: 'Нужен контент и ID автора' });
  }
  const thread = await query('SELECT id FROM threads WHERE id = ?', [req.params.id]);
  if (!thread) return res.status(404).json({ error: 'Тема не найдена' });

  const { lastID } = await run(
    'INSERT INTO posts (thread_id, content, author_id) VALUES (?, ?, ?)',
    [req.params.id, content, author_id]
  );
  res.status(201).json({ id: lastID, content });
});

// Удалить пост
app.delete('/api/posts/:id', async (req, res) => {
  const { changes } = await run('DELETE FROM posts WHERE id = ?', [req.params.id]);
  if (changes === 0) return res.status(404).json({ error: 'Пост не найден' });
  res.json({ message: 'Пост удален' });
});

// Запуск
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
});

// Корректное закрытие БД при остановке
process.on('SIGINT', () => {
  db.close(() => {
    console.log('БД закрыта');
    process.exit(0);
  });
});
