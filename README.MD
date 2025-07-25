# 📓 Тетрадь по HTML и CSS

Эта тетрадь содержит заметки по основам HTML и CSS, собранные в виде уроков с примерами кода и пояснениями. Здесь описаны ключевые теги HTML и свойства CSS, которые пригодятся для веб-разработки.

## HTML Теги

### `<section>`
- **Назначение**: Группирует тематически связанные блоки контента на веб-странице.
- **Использование**: Используется для структурирования контента в логические разделы, улучшая читаемость и организацию.

### `<article>`
- **Назначение**: Представляет самостоятельный законченный контент, например, пост в блоге, новость, заметку или запись на форуме.
- **Использование**: Подходит для контента, который имеет свою тему и может существовать независимо от остальной страницы.

### `<aside>`
- **Назначение**: Содержит дополнительную информацию, например, боковую колонку или врезку.
- **Использование**: Используется для второстепенного контента, который дополняет основной.

## Основы CSS

### Основные свойства селектора
- **color**: Задаёт цвет текста.
  ```css
  color: red;
  ```
- **background-color**: Задаёт цвет фона.
  ```css
  background-color: black;
  ```
- **font-size**: Определяет размер шрифта.
  ```css
  font-size: 20px;
  ```
- **text-align**: Выравнивает текст внутри элемента (например, `left`, `right`, `center`, `justify`).
  ```css
  text-align: center;
  ```
- **border**: Определяет рамку вокруг элемента (толщина, стиль, цвет).
  ```css
  border: 2px solid green;
  ```

### Стилизация страницы
- **Фон страницы**:
  ```css
  body {
    background-color: #f5f5f5; /* Светло-серый фон */
  }
  ```
- **Шрифт для всей страницы**:
  ```css
  body {
    font-family: Arial, sans-serif;
  }
  ```
- **Внутренний отступ (padding)**:
  ```css
  .id {
    padding: 10px;
  }
  ```
- **Внешний отступ (margin)**:
  ```css
  margin: 10px 20px 30px 40px; /* Сверху, справа, снизу, слева */
  ```

### Центрирование элементов
Для горизонтального центрирования блочного элемента:
```css
.centered-box {
  width: 300px;
  margin: 0 auto;
}
```

## Свойства фона (background)
| Свойство              | Описание                                  |
|-----------------------|-------------------------------------------|
| `background-color`    | Задаёт цвет фона                         |
| `background-image`    | Устанавливает фоновое изображение         |
| `background-repeat`   | Управляет повторением изображения         |
| `background-position` | Определяет позицию фона                  |
| `background-size`     | Задаёт размер фонового изображения        |
| `background`          | Сокращённая запись всех свойств фона     |

**Пример**:
```css
body {
  background: #f0f0f0 url('coffee.jpg') no-repeat center/cover;
}
```

| Свойство                | Пример значения                              | Описание                                                     |
|-------------------------|----------------------------------------------|--------------------------------------------------------------|
| `background-image`      | `url('image.jpg')`                           | Устанавливает фоновое изображение                            |
| `background-color`      | `red`, `#ff0000`, `rgba(255,0,0,0.5)`        | Цвет фона (виден, если нет изображения или оно прозрачное)   |
| `background-repeat`     | `repeat`, `no-repeat`, `repeat-x`, `repeat-y`| Как повторяется фон                                          |
| `background-position`   | `center`, `top`, `right bottom`, `50% 50%`   | Позиция фона                                                 |
| `background-size`       | `cover`, `contain`, `100px 200px`            | Масштабирование фона                                         |
| `background-attachment` | `scroll`, `fixed`, `local`                   | Прокручивается ли фон вместе со страницей                    |

**Заметки**:
- `cover` растягивает изображение на весь экран.
- `no-repeat` отключает повторение изображения.
- `center` центрирует фон.

# Уроки CSS

## Урок 1: Цвет текста
- **Свойство**: `color` задаёт цвет текста.
  ```css
  #selector {
    color: red;
  }
  ```

## Урок 2: Цвет фона
- **Свойство**: `background-color` задаёт цвет фона для элемента.
```markdown
  ```css
  #selector {
    background-color: black;
  }
  ```

| Тип значения      | Пример                      | Пояснение                      |
|-------------------|-----------------------------|--------------------------------|
| Название цвета    | `red`, `green`, `blue`      | Простой способ задания цвета   |
| HEX-код           | `#ff00ff`, `#333`           | 16-ричный код цвета            |
| RGB               | `rgb(255, 0, 255)`          | Красный/Зелёный/Синий (0–255) |
| RGBA              | `rgba(255, 0, 255, 0.5)`    | RGB + прозрачность (0–1)       |
| HSL               | `hsl(120, 100%, 50%)`       | Оттенок, насыщенность, яркость |
| HSLA              | `hsla(120, 100%, 50%, 0.5)` | HSL + прозрачность            |

## Урок 3: Свойства шрифта
1. **font-size** — размер шрифта:
   - `px` (пиксели): `font-size: 16px;`
   - `em` (относительно родительского шрифта): `font-size: 1em;`
   - `%` (процент от родительского шрифта): `font-size: 100%;`
   - `rem` (относительно корневого шрифта): `font-size: 1rem;`
   - **Чаще всего используют**: `px` или `rem`.

2. **font-weight** — толщина шрифта:
   - `normal` (по умолчанию)
   - `bold` (жирный)
   - `lighter` (тоньше родителя)
   - `bolder` (толще родителя)
   - Числовые значения: `100`–`900` (например, `font-weight: 700;` — жирный).

3. **font-style** — стиль шрифта:
   - `normal` (обычный)
   - `italic` (курсив)
   - `oblique` (наклонный, редко используется).

## Урок 4: Текст и выравнивание
1. **color** — задаёт цвет текста:
   ```css
   color: red; /* или #ff0000, rgb(255, 0, 0), rgba(255, 0, 0, 0.5), hsl(0, 100%, 50%) */
   ```

2. **text-align** — выравнивание текста:
   ```css
   text-align: left; /* По левому краю (по умолчанию) */
   text-align: right; /* По правому краю */
   text-align: center; /* По центру */
   text-align: justify; /* По ширине */
   ```

## Урок 5: Оформление текста
1. **text-decoration** — добавляет/удаляет украшения текста:
   ```css
   text-decoration: none; /* Убирает украшения */
   text-decoration: underline; /* Подчёркивание */
   text-decoration: overline; /* Линия над текстом */
   text-decoration: line-through; /* Перечёркивание */
   ```

2. **text-transform** — меняет регистр текста:
   ```css
   text-transform: none; /* Без изменений */
   text-transform: uppercase; /* Все буквы заглавные */
   text-transform: lowercase; /* Все буквы строчные */
   text-transform: capitalize; /* Первая буква каждого слова заглавная */
   ```

## Урок 6: Расстояние между буквами и словами
1. **letter-spacing** — регулирует расстояние между буквами:
   ```css
   letter-spacing: 2px; /* Увеличивает расстояние */
   letter-spacing: -1px; /* Уменьшает расстояние */
   ```

2. **word-spacing** — регулирует расстояние между словами:
   ```css
   word-spacing: 10px; /* Увеличивает расстояние */
   word-spacing: -5px; /* Уменьшает расстояние */
   ```
- **Примечание**: Оба свойства наследуются и часто используются для стилизации заголовков или логотипов.

## Урок 7: Отступы и высота строки
1. **text-indent** — задаёт отступ первой строки абзаца:
   ```css
   text-indent: 30px; /* Отступ в пикселях */
   text-indent: 10%; /* Отступ в процентах от ширины родителя */
   text-indent: 2em; /* Отступ в размере шрифта */
   text-indent: -20px; /* Отрицательный отступ (редко) */
   ```

2. **line-height** — задаёт высоту строки:
   ```css
   line-height: 1.5; /* Относительно размера шрифта */
   line-height: 20px; /* В пикселях */
   ```
- **Примечание**: `line-height` наследуется, `text-indent` влияет только на первую строку.

## Урок 8: Управление пробелами и переносами
- **Свойство**: `white-space` управляет пробелами и переносами строк:
  ```css
  white-space: normal; /* Пробелы схлопываются, переносы автоматические */
  white-space: nowrap; /* Без переносов, текст в одну строку */
  white-space: pre; /* Сохраняет пробелы и переносы, как в <pre> */
  white-space: pre-wrap; /* Сохраняет пробелы и переносы, но добавляет переносы по ширине */
  white-space: pre-line; /* Сохраняет переносы, но убирает лишние пробелы */
  ```

**Пример кода**:
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Урок 8</title>
  <style>
    .indent {
      text-indent: 40px;
      background: #f0f0f0;
      border: 1px solid gray;
      padding: 10px;
    }
    .nowrap {
      white-space: nowrap;
      background: lightyellow;
    }
    .pre {
      white-space: pre;
      background: lightblue;
    }
    .pre-wrap {
      white-space: pre-wrap;
      background: lightgreen;
    }
    .pre-line {
      white-space: pre-line;
      background: pink;
    }
  </style>
</head>
<body>
  <p class="indent">Первая строка этого абзаца начинается с отступа — это и есть text-indent.</p>
  <p class="nowrap">Этот текст не переносится на новую строку, даже если он очень длинный и не влезает в блок.</p>
  <p class="pre">
    Тут       сохраняются    все     пробелы
    и переносы строк тоже.
  </p>
  <p class="pre-wrap">
    А тут  сохраняются     пробелы и
    переносы строк, но текст всё равно переносится, если не влезает.
  </p>
  <p class="pre-line">
    Здесь
    сохраняются только переносы строк,
    но лишние пробелы сжимаются.
  </p>
</body>
</html>
```

## Урок 9: Рамки (border)
- **Свойство**: `border` задаёт рамку вокруг элемента:
  ```css
  border: 2px solid black; /* Толщина, стиль, цвет */
  ```
- **Стили рамок**: `solid`, `dotted`, `dashed`, `double`.
- **Рамки по сторонам**:
  ```css
  border-top: 3px solid red;
  border-right: 6px double green;
  border-bottom: 2px dotted blue;
  border-left: 4px dashed black;
  ```

**Пример кода**:
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Урок 9 - border</title>
  <style>
    p {
      padding: 10px;
      margin: 10px;
    }
    .solid {
      border: 2px solid black;
    }
    .dotted {
      border: 3px dotted red;
    }
    .dashed {
      border: 4px dashed green;
    }
    .double {
      border: 5px double blue;
    }
    .mixed {
      border-top: 3px solid red;
      border-right: 6px double green;
      border-bottom: 2px dotted blue;
      border-left: 4px dashed black;
    }
  </style>
</head>
<body>
  <p class="solid">Сплошная рамка (solid)</p>
  <p class="dotted">Точечная рамка (dotted)</p>
  <p class="dashed">Пунктирная рамка (dashed)</p>
  <p class="double">Двойная рамка (double)</p>
  <p class="mixed">Разные стили по сторонам</p>
</body>
</html>
```

## Урок 10: Скругление углов (border-radius)
- **Свойство**: `border-radius` задаёт радиус скругления углов:
  ```css
  border-radius: 10px; /* Все углы */
  border-radius: 10px 20px 30px 40px; /* ВЛ, ВП, НП, НЛ */
  border-radius: 50%; /* Круглый элемент (для квадрата) */
  ```

**Пример кода**:
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Урок 10 - border-radius</title>
  <style>
    p {
      background: #adadad;
      border: 3px solid black;
      padding: 20px;
      margin: 15px;
      text-align: center;
    }
    .r1 {
      border-radius: 10px;
    }
    .r2 {
      border-radius: 30px;
    }
    .r3 {
      border-radius: 50%;
    }
    .r4 {
      border-radius: 10px 0px 20px 0px;
    }
  </style>
</head>
<body>
  <p class="r1">Скругление: 10px</p>
  <p class="r2">Скругление: 30px</p>
  <p class="r3">Скругление: 50% (если блок — квадрат, он станет круглым)</p>
  <p class="r4">Скругление: 10px 0px 20px 0px (по углам)</p>
</body>
</html>
```

## Урок 11: Тень блока (box-shadow)
- **Свойство**: `box-shadow` добавляет тень к элементу:
  ```css
  box-shadow: 5px 5px 5px gray; /* СмещениеX, СмещениеY, Размытие, Цвет */
  box-shadow: inset 0 0 10px red; /* Внутренняя тень */
  ```

**Пример кода**:
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Урок 11 - box-shadow</title>
  <style>
    p {
      background: #adadad;
      border: 2px solid black;
      padding: 20px;
      margin: 20px;
      text-align: center;
    }
    .s1 {
      box-shadow: 5px 5px 5px gray;
    }
    .s2 {
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.7);
    }
    .s3 {
      box-shadow: -5px -5px 10px red;
    }
  </style>
</head>
<body>
  <p class="s1">Тень 5px 5px 5px gray</p>
  <p class="s2">Тень 10px 10px 20px rgba(0,0,0,0.7)</p>
  <p class="s3">Тень -5px -5px 10px red</p>
</body>
</html>
```

## Урок 12: Тень текста (text-shadow)
- **Свойство**: `text-shadow` добавляет тень к тексту:
  ```css
  text-shadow: 2px 2px 4px gray; /* СмещениеX, СмещениеY, Размытие, Цвет */
  text-shadow: 1px 1px 0 black, 2px 2px 5px red; /* Множественные тени */
  ```

**Пример кода**:
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Урок 12 - text-shadow</title>
  <style>
    p {
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      padding: 30px;
      color: white;
    }
    .s1 {
      background: black;
      text-shadow: 2px 2px 4px gray;
    }
    .s2 {
      background: darkblue;
      text-shadow: 0 0 10px cyan;
    }
    .s3 {
      background: #6a00ff;
      text-shadow: -4px -4px 0 red;
    }
  </style>
</head>
<body>
  <p class="s1">Серая тень</p>
  <p class="s2">Неоновая тень</p>
  <p class="s3">Тень со смещением вверх-влево</p>
</body>
</html>
```

## Урок 13: Повторение (box-shadow)
- Повторение урока 11. См. выше.

## Урок 14: Обводка (outline)
- **Свойство**: `outline` задаёт внешнюю обводку вокруг элемента:
  ```css
  outline: 4px solid red; /* Толщина, стиль, цвет */
  outline-offset: 5px; /* Отступ обводки */
  ```
- **Использование**: Часто применяется для стилизации фокуса (`:focus`) или визуального акцента.

**Пример кода**:
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Урок 14 - outline</title>
  <style>
    p {
      background-color: #ccc;
      margin: 20px;
      padding: 20px;
      text-align: center;
      font-size: 24px;
    }
    .o1 {
      outline: 4px solid red;
    }
    .o2 {
      outline: 4px dashed green;
      outline-offset: 5px;
    }
    .o3 {
      border: 3px solid black;
      outline: 3px dotted blue;
      outline-offset: 10px;
    }
  </style>
</head>
<body>
  <p class="o1">Просто outline</p>
  <p class="o2">Outline с отступом</p>
  <p class="o3">Сравнение border и outline</p>
</body>
</html>
```

- Конспект из телеграмм: с 10.07.2025 по 22.07.2025.

## Урок 15: overflow
- Свойство `overflow` управляет тем, как **содержимое** блока ведёт себя, если оно **вылезает за его границы.**

**Значения:**
| Значение  | Что делает                                                       |
| --------- | ---------------------------------------------------------------- |
| `visible` | По умолчанию. Всё, что не влезло — **торчит наружу**.            |
| `hidden`  | Всё, что не влезло — **обрезается (скрывается)**.                |
| `scroll`  | Появляются **скролл-бары всегда**, даже если прокрутка не нужна. |
| `auto`    | **Появляются скроллы, только если нужно**.                       |

- Чаще всего применяется `overflow: auto;`

**Пример кода**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Urok 15 - Overflow</title>
  <style>
    .box {
      height: 100px;
      border: 3px solid black;
      padding: 10px;
      background-color: #e0e0e0;
      margin-bottom: 20px;
    }

    .visible {
      overflow: visible;
    }

    .hidden {
      overflow: hidden;
    }

    .scroll {
      overflow: scroll;
    }

    .auto {
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="box visible">
    <strong>visible:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, molestias similique rerum laboriosam dolore ut ducimus culpa tempore repellendus pariatur maiores, expedita aperiam, animi est commodi odit eveniet iste natus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid vero fugiat, inventore est facilis, aut sed veniam vel odit ex temporibus quia sit, minima esse eius nisi molestias. Ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur molestiae sunt explicabo beatae fuga, consequatur numquam, deleniti libero totam modi! Odit error doloribus excepturi, deserunt corrupti adipisci distinctio minima.
  </div>
  <div class="box hidden">
    <strong>hidden:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, molestias similique rerum laboriosam dolore ut ducimus culpa tempore repellendus pariatur maiores, expedita aperiam, animi est commodi odit eveniet iste natus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid vero fugiat, inventore est facilis, aut sed veniam vel odit ex temporibus quia sit, minima esse eius nisi molestias. Ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur molestiae sunt explicabo beatae fuga, consequatur numquam, deleniti libero totam modi! Odit error doloribus excepturi, deserunt corrupti adipisci distinctio minima.
  </div>
  <div class="box scroll">
    <strong>scroll:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, molestias similique rerum laboriosam dolore ut ducimus culpa tempore repellendus pariatur maiores, expedita aperiam, animi est commodi odit eveniet iste natus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid vero fugiat, inventore est facilis, aut sed veniam vel odit ex temporibus quia sit, minima esse eius nisi molestias. Ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur molestiae sunt explicabo beatae fuga, consequatur numquam, deleniti libero totam modi! Odit error doloribus excepturi, deserunt corrupti adipisci distinctio minima.
  </div>
  <div class="box auto">
    <strong>auto:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, molestias similique rerum laboriosam dolore ut ducimus culpa tempore repellendus pariatur maiores, expedita aperiam, animi est commodi odit eveniet iste natus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid vero fugiat, inventore est facilis, aut sed veniam vel odit ex temporibus quia sit, minima esse eius nisi molestias. Ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur molestiae sunt explicabo beatae fuga, consequatur numquam, deleniti libero totam modi! Odit error doloribus excepturi, deserunt corrupti adipisci distinctio minima.
  </div>
</body>
</html>
```

 ## Урок 16: visibility

 - Свойство `visibility` управляет **видимостью** элемента на странице, но в отличие от `display: none`, элемент **остаётся** на месте и **занимает место** в потоке.

 Разница между `display: none` и `visibility: hidden`
| Свойство             | Видимость | Занимает место |
| -------------------- | --------- | -------------- |
| `display: none`      | ❌ Нет    | ❌ Нет        |
| `visibility: hidden` | ❌ Нет    | ✅ Да         |


Значения:
| Значение   | Что делает                                                                |
| ---------- | ------------------------------------------------------------------------- |
| `visible`  | Элемент **видим** (значение по умолчанию).                                |
| `hidden`   | Элемент **невидим**, но место под него сохраняется.                       |
| `collapse` | Применяется в основном к элементам таблицы — скрывает строку или столбец. |

## Урок 17: display

- Свойство `display` определяет, как элемент ведёт себя в потоке документа — блочный он, строчный или вообще скрытый.

### 🔹 display: block
- Элемент занимает всю ширину родителя
- Начинается с новой строки
- Пример: `<div>`, `<p>`, `<h1>` — блочные по умолчанию.

🧱 Визуально как кирпич — занимает строку целиком.

### 🔹 display: inline
- Элемент идёт в строку с другими
- Нельзя задать ширину, высоту, отступы по вертикали
- Пример: `<span>`, `<a>`, `<strong>` — строчные по умолчанию.

📏 Уважает только padding-left/right, margin-left/right

### 🔹 display: inline-block
- Ведёт себя в строке, как inline, но:
- Поддерживает ширину, высоту, паддинги, марджины (в отличие от inline)

⚡ Это как блочный элемент, но без переноса строки.

### 🔹 display: none
- Полностью убирает элемент со страницы
- Не занимает места в потоке
- Часто используется для скрытия элементов

📋 Сводная таблица:
| Свойство       | Перенос строки (начинается с новой?) | Занимает всю ширину родителя | Можно задать `width`/`height` | Поддерживает `padding`/`margin` | Видим на странице |
| -------------- | :----------------------------------: | :--------------------------: | :---------------------------: | :-----------------------------: | :---------------: |
| `block`        |               ✅ **Да**               |           ✅ **Да**           |            ✅ **Да**           |      ✅ **Да (все стороны)**     |      ✅ **Да**     |
| `inline`       |               ❌ **Нет**              |           ❌ **Нет**          |           ❌ **Нет**           |   ⚠️ **Только по горизонтали**  |      ✅ **Да**     |
| `inline-block` |               ❌ **Нет**              |           ❌ **Нет**          |            ✅ **Да**           |      ✅ **Да (все стороны)**     |      ✅ **Да**     |
| `none`         |                   —                  |               —              |               —               |                —                |     ❌ **Нет**     |
---------------------------------------------------------------------------------------------------------------------------------------------------

## Урок 18 повторение: font-size, font-weight, font-style

- `font-size` — размер шрифта
```css
селектор {
  font-size: значение;
}
```
**Возможные значения:**
| Значение                | Что означает                                              |
| ----------------------- | --------------------------------------------------------- |
| `px`                    | Пиксели (абсолютная единица)                              |
| `%`                     | Проценты от размера шрифта родителя                       |
| `em`                    | Относительная единица (1em = 100% от родителя)            |
| `rem`                   | Относительно `<html>` (пока не используется в этом уроке) |
| `xx-small` → `xx-large` | Ключевые слова (реже используются)                        |

**Примеры:**
```css
font-size: 20px;     /* 20 пикселей */
font-size: 150%;     /* 150% от родителя */
font-size: 1.5em;    /* 150% от родителя */
```

- `font-weight` — толщина шрифта
```css
селектор {
  font-weight: значение;
}
```

**Возможные значения:**
| Значение    | Что делает                                  |
| ----------- | ------------------------------------------- |
| `normal`    | Стандартная толщина (`400`)                 |
| `bold`      | Жирный (`700`)                              |
| `bolder`    | Жирнее родителя                             |
| `lighter`   | Тоньше родителя                             |
| `100`–`900` | Точная толщина (не все шрифты поддерживают) |

**Примеры:**
```css
font-weight: bold;
font-weight: 100;
font-weight: bolder;
```

- `font-style` — начертание текста
```css
селектор {
  font-style: значение;
}
```

**Возможные значения:**
| Значение  | Что делает                                        |
| --------- | ------------------------------------------------- |
| `normal`  | Обычное начертание                                |
| `italic`  | Курсив (если он предусмотрен в шрифте)            |
| `oblique` | Просто наклон (создаётся автоматически браузером) |
**Примеры:**
```css
font-style: normal;
font-style: italic;
font-style: oblique;
```

**Пример код:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Urok 3 CSS</title>
  <style>
    div {
      font-size: 30px;
      font-weight: 500;
      font-style: normal;
    }

    p {
      padding: 20px;
      margin: 20px;
      border: 2px solid black;
      background-color: #adadad;
    }

    .t1 {
      font-size: 66.67%;       /* 66.67% от 30px = 20px */
      font-weight: 100;
      font-style: italic;
    }

    .t2 {
      font-size: 25px;
      font-weight: bold;        /* bold = 700 */
      font-style: oblique;
    }

    .t3 {
      font-size: 2em;           /* 2 * 30px = 60px */
      font-weight: bolder;
      font-style: normal;
    }
  </style>
</head>
<body>
  <div>
    <h1>Fonts</h1>
    <p class="t1">Text 1 — маленький, тонкий и курсив</p>
    <p class="t2">Text 2 — средний, жирный и наклонённый</p>
    <p class="t3">Text 3 — большой, ещё жирнее и обычный</p>
  </div>
</body>
</html>
```





























<!-- # Переход от ChatGPT к Grok
• На основе всего конспекта, Грок сделал свою программу, по которой я буду следовать дальше.

## Урок 1: Селекторы и их типы.

 **Основные типы селекторов:**
1. **По тегу:** Применяется ко всем элементам тега.
```css
p { color: blue; } /* Все <p> будут синими */
  ```
2. **По классу:** Применяется к элементам с классом (начинается с точки).
```css
.highlight { background: yellow; } /* Элементы с class="highlight" */
  ```
3. **По ID:** Уникальный идентификатор (начинается с #).
```css
#header { font-size: 24px; } /* Элемент с id="header" */
  ```
4. **Универсальный селектор:** Применяется ко всем элементам.
```css
* { margin: 0; } /* Все элементы без отступов */
  ```
5. **По атрибуту:** Выбирает элементы по значению атрибута
```css
[type="text"] { border: 1px solid gray; } /* Все input с type="text" */
  ```
6. **Комбинированные селекторы:**

• Потомок: `div p` (все `<p>` внутри `<div>`).

• Дочерний: `div > p` (только `<p>`, которые являются прямыми детьми `<div>`).

• Соседний: `h1 + p` (первый `<p>` после `<h1>`).

• Общий сосед: `h1 ~ p` (все `<p>` после `<h1>` на том же уровне).

7. **Псевдоклассы:** Стили для определённых состояний.
```css
a:hover { color: red; } /* Цвет ссылки при наведении */
  ```
8. **Псевдоэлементы:** Стили для части элемента.
```css
p::first-letter { font-size: 2em; } /* Первая буква абзаца */
  ```
**Пример кода:**
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Селекторы</title>
  <style>
    /* По тегу */
    h1 {
      color: navy;
      text-align: center;
    }

    /* По классу */
    .intro {
      background: #f0f0f0;
      padding: 10px;
    }

    /* По ID */
    #main-title {
      font-size: 28px;
    }

    /* По атрибуту */
    input[type="text"] {
      border: 2px solid blue;
      padding departmental

    /* Универсальный селектор */
    * {
      box-sizing: border-box;
    }

    /* Комбинированный селектор (потомок) */
    .container p {
      margin: 10px;
    }

    /* Псевдокласс */
    a:hover {
      color: green;
    }

    /* Псевдоэлемент */
    p::first-line {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 id="main-title">Пример селекторов</h1>
    <p class="intro">Это абзац с классом intro, он внутри container.</p>
    <p>Обычный абзац внутри container.</p>
    <input type="text" placeholder="Текстовое поле">
    <p>Другой абзац.</p>
    <a href="#">Наведи на меня!</a>
  </div>
</body>
</html>
``` -->