<!--Конспект по  уроку. 
📘 Программа обучения CSS с нуля
🔹 Вводный блок: базовые понятия

    Что такое CSS? Как он работает с HTML?

        Способы подключения (inline, <style>, link)

        Приоритеты и каскадность

        Комментарии в CSS

    Селекторы

        Простые: тег, класс, id

        Группировка и комбинирование

        Универсальный селектор *

    Основные единицы измерения

        Абсолютные: px

        Относительные: %, em, rem, vh, vw

🔹 Блок 1: Базовая стилизация

    Цвета и фон

        color, background-color

        background-image, background-repeat, background-size, background-position, background-attachment

    Шрифты и текст

        font-family, font-size, font-weight, line-height

        text-align, text-decoration, text-transform, letter-spacing, word-spacing

    Границы и отступы
	
        border, border-radius

        margin, padding

    Размеры и блоки

        width, height, max-width, min-height

        box-sizing

🔹 Блок 2: Работа с блоками

    Типы отображения

        block, inline, inline-block, none

        display и visibility

    Позиционирование

        position: static, relative, absolute, fixed, sticky

        z-index, top, left, right, bottom

    Flexbox

    display: flex

    justify-content, align-items, align-content

    flex-direction, flex-wrap, gap

    Свойства для детей: flex, order, align-self

    Grid (базово)

    display: grid

    grid-template-columns, grid-template-rows

    gap, grid-column, grid-row

🔹 Блок 3: Продвинутая стилизация

    Псевдоклассы и псевдоэлементы

    :hover, :active, :focus, :nth-child

    ::before, ::after

    Переходы и анимации

    transition, transform, animation

    Работа с тенями

    box-shadow, text-shadow

    Медиа-запросы и адаптивность

    @media

    Адаптация шрифтов, блоков, изображений

🔹 Блок 4: Практика

    Мини-проекты:

    Карточка товара

    Простая форма

    Галерея изображений

    Макет блога

    Полная вёрстка макета (адаптивная):

    По макету из Figma (с пояснениями) -->

## 🟦 Урок 1: Что такое CSS и как он работает с HTML
## Что такое CSS?
**CSS (Cascading Style Sheets)** — каскадные таблицы стилей
## Способы подключения CSS
### 1. Встроенный стиль (inline)
```css
<h1 style="color: red;">Привет!</h1>
```
Плохо: неудобно, не масштабируется
### 2. Внутренние стили (в `<style>`)
Внутри тега `<head>`:
```css
<style>
  p {
    font-size: 20px;
  }
</style>
```
Норм для экспериментов.
### 3. Внешний файл .css (лучший способ)
Создаётся отдельный файл `style.css:`
```css
h1 {
  color: blue;
}
```
Подключается в HTML:
```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```
**Лучший способ** для настоящих сайтов: чисто, гибко, масштабируемо.

## Что такое каскадность?
Если на один элемент навешано несколько стилей — решается, какой из них победит. Это и есть каскад (cascade).
```html
<p style="color: red;">Привет!</p>

<style>
  p {
    color: blue;
  }
</style>
```
Победит **inline-стиль** (`color: red`;), потому что он самый приоритетный.

## Приоритеты (упрощённо)
| Что важнее?                  | Приоритет  |
| ---------------------------- | ---------- |
| Inline (`style=""`)          | 🔥 Высокий |
| Внутренние стили (`<style>`) | 🧱 Средний |
| Внешний файл (`style.css`)   | 🌀 Ниже    |

Но на всё влияет ещё специфичность селекторов — об этом позже.

## Комментарии в CSS 
```css
/* Это комментарий */
h1 {
  color: green; /* И тут можно */
}
```
------------------------------------------------------------------------------------------------------------------------------------------------------
# 🟦 Урок Урок 2: Селекторы в CSS
## 🔹 Что такое селектор?

**Селектор** — это способ указать, к каким HTML-элементам применять стили.

Примеры:
```css
h1 {
  color: red;
}
```
Здесь `h1` — селектор, он говорит: “Покрась все `<h1>` в красный”.
## 🔹 Виды селекторов
### ✅ 1. Селектор по тегу
Стилизует все теги определённого типа.
```css
p {
  font-size: 18px;
}
```
Стили применятся ко всем <p> на странице.
### ✅ 2. Селектор по классу
Для кастомной группировки элементов. Работает через `class=""`.

HTML:
```html
<p class="note">Текст</p>
```
CSS:
```css
.note {
  color: green;
}
```
🧠 Один класс можно использовать сколько угодно раз.
### ✅ 3. Селектор по id

Для уникального элемента. Работает через `id=""`.

HTML:
```html
<p id="main">Привет</p>
```
CSS:
```css
#main {
  color: blue;
}
```
🧠 На странице должен быть только один элемент с таким id.
### ✅ 4. Группировка селекторов
Стили для нескольких селекторов сразу:
```css
h1, h2, h3 {
  font-family: sans-serif;
}
```
### ✅ 5. Все элементы сразу

Селектор `*` — универсальный. Применяется ко всему.
```css
* {
  margin: 0;
  padding: 0;
}
```
Часто используется для сброса стилей по умолчанию.
### 🧠 Классы vs id: в чём разница?
|                    | `class`      | `id`                        |
| ------------------ | ------------ | --------------------------- |
| Используется       | Много раз    | Только один раз             |
| Записывается       | `.className` | `#idName`                   |
| Приоритет          | Ниже         | Выше                        |
| Когда использовать | Почти всегда | Только если точно 1 элемент |

### ✅ Пример
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: orange;
    }

    .important {
      font-weight: bold;
    }

    #unique {
      color: cyan;
    }

    * {
      font-family: Arial;
    }
  </style>
</head>
<body>
  <h1 id="unique">Заголовок</h1>
  <p class="important">Это важно</p>
  <p>Обычный текст</p>
</body>
</html>
```
------------------------------------------------------------------------------------------------------------------------------------------------------

# 🟦 Урок Единицы измерения в CSS
В CSS почти всё измеряется: в пикселях, процентах, em, rem, vh, vw и других единицах. Каждая подходит для разных ситуаций — от фиксированной вёрстки до адаптивной.
## 1. Абсолютные единицы
Эти значения **жёсткие** — они не зависят от других элементов или экрана.
### ✅ `px` — пиксели
Основная и самая понятная единица. Пример:
```css
p {
  font-size: 16px;
  margin: 10px;
}
```
**16px** — это примерно стандартный размер шрифта в браузере.
## 2. Относительные единицы
Они **зависят от чего-то** — от родителя, корня, окна и т. д. Используются в адаптивной вёрстке.
### ✅ `%` — процент
Процент от **родительского элемента:**
```css
div {
  width: 50%;
}
```
Если родитель 600px — блок будет 300px.
### ✅ `em` — от размера шрифта родителя
`1em` = размер шрифта родителя.
```css
body {
  font-size: 20px;
}
p {
  font-size: 1.5em; /* будет 30px */
}
```
⚠️ Наследуется и **может накапливаться:** если родитель 2em, а потомок ещё 1.5em — получится 2 × 1.5 = 3em.
### ✅ `rem` — от размера шрифта `<html>`
`1rem` = размер шрифта корня `(html)`, обычно `16px` по умолчанию.
```css
html {
  font-size: 16px;
}
p {
  font-size: 2rem; /* 32px */
}
```
💡 Надёжнее em, потому что **не накапливается** — всегда отталкивается от корня.

### ✅ `vw` и `vh` — проценты от окна
• `vw` = 1% ширины окна браузера
• `vh` = 1% высоты окна
```css
div {
  width: 100vw; /* растянется на весь экран по ширине */
  height: 50vh; /* займёт пол-экрана по высоте */
}
```
Отлично подходят для **адаптивных блоков.**

## 🔹 Когда использовать что?
| Единица | Когда использовать                                   |
| ------- | ---------------------------------------------------- |
| `px`    | Фиксированные размеры, мелкие детали                 |
| `%`     | Гибкая ширина, отступы, адаптивность                 |
| `em`    | Когда хочешь зависеть от родителя                    |
| `rem`   | Для шрифтов, чтобы всё было стабильно и предсказуемо |
| `vw/vh` | Для полноэкранных блоков, фонов, видео               |

## ✅ Пример
```html
<style>
  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 20px;
  }

  .box {
    width: 50%;
    height: 100px;
    background-color: teal;
    margin-bottom: 20px;
  }

  .text {
    font-size: 2rem;
    color: white;
  }

  .full {
    width: 100vw;
    height: 50vh;
    background: orange;
  }
</style>
```
# 🟦 Урок 4: Цвета и фоны в CSS
## 🔹 1. Цвета в CSS
Цвета задаются для текста, фона, границ и многого другого.
### ✅ Способы задания цвета:
**🔸 Ключевые слова**
Простые названия:
```css
color: red;
background: black;
```
**🔸 HEX-коды (шестнадцатеричные)**
```css
color: #ff0000; /* красный */
color: #333;    /* тёмно-серый (сокращённая запись #333333) */
```
**🔸 RGB (Red, Green, Blue)**
```css
color: rgb(255, 0, 0);     /* красный */
color: rgb(0, 0, 0);       /* чёрный */
color: rgb(200, 100, 50);  /* тёплый цвет */
```
**🔸 RGBA — с прозрачностью**
```css
background-color: rgba(0, 0, 0, 0.5); /* чёрный с прозрачностью 50% */
```
**🔸 HSL (оттенок, насыщенность, светлота)**
```css
color: hsl(0, 100%, 50%); /* красный */
```
🧠 Удобно для динамической генерации оттенков и градиентов.

## 🔹 2. Свойства фона
### ✅ `background-color`
```css
body {
  background-color: #222;
}
```
### ✅ `background-image`
```css
div {
  background-image: url("img.jpg");
}
```
Фоновое изображение вставляется внутрь блока.
### ✅ `background-repeat`
По умолчанию **фон повторяется**. Чтобы отключить:
```css
background-repeat: no-repeat;
```
### ✅ background-position
Управляет размещением фона:
```css
background-position: center center;
background-position: top left;
background-position: 50% 50%;
```
### ✅ background-size
Управляет размером фонового изображения:
```css
background-size: cover;   /* растянуть до заполнения */
background-size: contain; /* вписать без обрезки */
background-size: 100px 100px; /* явно указанные размеры */
```
### ✅ background-attachment
Фиксирует фон при прокрутке:
```css
background-attachment: fixed; /* фон остаётся на месте */
```
## 🔹 3. Сокращённая запись background
Всё в одной строке:
```css
background: url("img.jpg") no-repeat center center / cover;
```
## ✅ Пример
```html
<style>
  body {
    background-color: #222;
    color: #eee;
    font-family: sans-serif;
  }

  .card {
    width: 300px;
    height: 200px;
    background-color: #444;
    background-image: url("https://picsum.photos/id/1015/400/300");
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    padding: 20px;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
  }
</style>

<div class="card">
  <div class="overlay">
    <h2>Заголовок</h2>
    <p>Текст на фоне</p>
  </div>
</div>
```
# 🟦 Урок 5: Шрифты и текст в CSS
В этом уроке ты научишься управлять внешним видом текста: семейство шрифтов, размер, жирность, межстрочные и межбуквенные интервалы, выравнивание, преобразование регистра и украшения.
## 🔹 1. font-family — семейство шрифтов
Указывает, каким шрифтом выводить текст. Лучше задавать несколько шрифтов через запятую — браузер выберет первый доступный.
```css
p {
  font-family: Arial, sans-serif;
}
```
### Часто используемые:

• `Arial`, `Verdana`, `Tahoma`, `Helvetica`
• `Georgia`, `Times New Roman` — с засечками
• `monospace` — как в коде
• `sans-serif` — без засечек

**🧠 Если имя шрифта из двух слов — оборачивай в кавычки:**
font-family: "Times New Roman", serif;

## 🔹 2. font-size — размер шрифта
Можно задать в `px`, `em`, `rem`, `%`:
```css
p {
  font-size: 18px;
}
```
## 🔹 3. font-weight — жирность
```css
p {
  font-weight: bold;   /* или 700 */
}
```
| Значение  | Результат       |
| --------- | --------------- |
| `normal`  | Обычный (400)   |
| `bold`    | Жирный (700)    |
| `100–900` | Тонкий → жирный |

## 🔹 4. line-height — межстрочный интервал
```css
p {
  line-height: 1.5; /* 1.5 × font-size */
}
```
## 🔹 5. letter-spacing — расстояние между буквами 
```css
p {
  letter-spacing: 2px;
}
```
## 🔹 6. word-spacing — расстояние между словами
```css
🔹 6. word-spacing — расстояние между словами
```
## 🔹 7. text-align — выравнивание текста
```css
p {
  text-align: center;
}
```
**Варианты**: `left`, `right`, `center`, `justify`

## 🔹 8. text-decoration — оформление текста
```css
a {
  text-decoration: none;
}
```
**Варианты**: `none`, `underline`, `overline`, `line-through`

## 🔹 9. text-transform — преобразование регистра
```css
p {
  text-transform: uppercase;
}
```
| Значение     | Результат       |
| ------------ | --------------- |
| `none`       | как есть        |
| `uppercase`  | ВЕРХНИЙ РЕГИСТР |
| `lowercase`  | нижний регистр  |
| `capitalize` | Каждое Слово    |

**✅ Пример**
```html
<style>
  body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
    padding: 20px;
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 1px;
    word-spacing: 5px;
    text-align: justify;
  }
</style>

<h1>Заголовок</h1>
<p>Это пример параграфа с разными свойствами шрифта. Мы учимся красиво оформлять текст.</p>
```

