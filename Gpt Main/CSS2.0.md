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
# 🟦 Урок 6: Отступы и границы — margin, padding, border
## 🔹 1. margin — внешний отступ
Создаёт **пространство вокруг элемента, снаружи его рамки.**
```css
p {
  margin: 20px;
}
```
🔸 Отодвигает элемент от других элементов.

## 🔹 2. padding — внутренний отступ
Создаёт **пространство внутри элемента, между его содержимым и рамкой**.
```css
p {
  padding: 10px;
}
```
🔸 Отодвигает текст (или контент) от краёв самого блока.

## 🔹 3. border — рамка
Добавляет рамку вокруг элемента.
```css
p {
  border: 2px solid black;
}
```
Синтаксис:
```css
border: [толщина] [тип линии] [цвет];
```
Примеры:
```css
border: 1px solid red;
border: 5px dashed blue;
border: 3px dotted green;
```

## 🔹 Как задавать отступы по сторонам
Все свойства `margin` и `padding` можно задавать по отдельности:
```css
margin-top: 10px;
margin-right: 20px;
margin-bottom: 15px;
margin-left: 5px;
```
Или кратко (сверху → справа → снизу → слева):
```css
margin: 10px 20px 15px 5px;
```
Упрощения:
| Запись                         | Распределение                                |
| ------------------------------ | -------------------------------------------- |
| `margin: 10px;`                | все стороны по 10px                          |
| `margin: 10px 20px;`           | сверху и снизу — 10px, слева и справа — 20px |
| `margin: 10px 20px 30px;`      | сверху — 10px, по бокам — 20px, снизу — 30px |
| `margin: 10px 20px 30px 40px;` | top → right → bottom → left                  |

То же самое работает и для `padding`.

## ✅ Пример
```html
<style>
  .box {
    background: #eee;
    border: 2px solid #333;
    padding: 20px;
    margin: 30px;
    font-size: 18px;
  }
</style>

<div class="box">
  Это коробка с внешним и внутренним отступом, и с рамкой.
</div>
```
# 🟦 Урок 7: Скругления углов — `border-radius`
## 🔹 Что делает `border-radius`?
Это свойство задаёт **радиус скругления углов** у любого элемента с рамкой или без неё.
```css
div {
  border-radius: 10px;
}
```
Визуально углы станут "плавно закруглёнными".
## 🔹 Формат записи
### ✅ Одинаковое скругление всех углов:
```css
border-radius: 15px;
```
### ✅ Разные значения по углам (по часовой стрелке):
```css
border-radius: 10px 20px 30px 40px;
/* top-left, top-right, bottom-right, bottom-left */
```
### ✅ Скругление отдельных углов:
```css
border-top-left-radius: 20px;
border-bottom-right-radius: 10px;
```
### 🔹 Круги и овалы
```css
border-radius: 50%;
```
— получится идеальный круг.
  С прямоугольником — получится **овал.**

## 🔹 Пример
```html
<style>
  .rounded {
    background: lightblue;
    padding: 20px;
    border: 2px solid #000;
    border-radius: 15px;
    width: 300px;
    font-size: 18px;
  }

  .circle {
    width: 100px;
    height: 100px;
    background: orange;
    border-radius: 50%;
  }
</style>

<div class="rounded">
  У этого блока скруглённые углы!
</div>

<div class="circle"></div>
```
# 🟦 Урок 8: Размеры блоков — `width`, `height`, `max-width`, `box-sizing`
## 🔹 1. `width` и `height` — ширина и высота
Самые базовые свойства:
```css
div {
  width: 300px;
  height: 200px;
}
```
📏 Можешь задавать в:
• `px` — пиксели
• `%` — процент от родителя
• `vw`, `vh` — от окна браузера (viewport)
## 🔹 2. `max-width` и `min-width`
Иногда нужно **ограничить размер**: элемент может расширяться, но не больше определённого значения.
```css
div {
  width: 100%;
  max-width: 800px;
}
```
📌 Используется, когда нужно сделать адаптивную ширину.
## 🔹 3. `box-sizing` — как считаются размеры
По умолчанию браузер считает размеры элемента без учёта padding и border. Это может сбивать с толку.
```css
div {
  width: 300px;
  padding: 20px;
  border: 10px solid black;
}
```
👆 На самом деле итоговая ширина будет **300 + 20 + 20 + 10 + 10 = 360px**

Чтобы сделать размер **включающим всё (рамки и отступы)**, используют:
```css
box-sizing: border-box;
```
📦 Тогда `width` будет означать всю видимую ширину, включая рамку и `padding`.

## ✅ Пример
```html
<style>
  .box {
    width: 300px;
    height: 150px;
    padding: 20px;
    border: 5px solid black;
    background: lightgreen;
    box-sizing: border-box;
  }
</style>

<div class="box">
  Элемент со строгими размерами
</div>
```

# 🟦 Урок 9: Единицы измерения в CSS (Часть 2)
## 🔹 Абсолютные и относительные
| Тип           | Примеры                      | Описание                                    |
| ------------- | ---------------------------- | ------------------------------------------- |
| Абсолютные    | `px`, `cm`, `mm`, `in`       | Всегда одинаковы — не зависят от контекста  |
| Относительные | `%`, `em`, `rem`, `vw`, `vh` | Зависимы от чего-то (родителя, окна и т.д.) |
## 🔹 Абсолютные единицы
### `px` — пиксели
• Самая часто используемая единица.
• 1 пиксель = 1 экранная точка.
```css
font-size: 16px;
```
## 🔹 Относительные единицы
### `%` — процент
• Зависит от родительского элемента.
```css
width: 50%; /* половина ширины родителя */
```
### `em` — относительная к текущему размеру шрифта
```css
font-size: 2em; /* в 2 раза больше текущего */
```
• Наследуется, накапливается.
### `rem` — относительная к корневому (html) шрифту
```css
font-size: 2rem; /* в 2 раза больше, чем у <html> */
```
📌 Лучше, чем `em` в большинстве случаев — не накапливается.
### `vw` и `vh`
• `1vw` = 1% ширины окна браузера
• `1vh` = 1% высоты окна браузера
```css
width: 100vw; /* вся ширина окна */
height: 50vh; /* половина высоты окна */
```
## 🔸 Сравнение: em vs rem
```html
<style>
  html {
    font-size: 16px;
  }

  .parent {
    font-size: 2em; /* 32px */
  }

  .child {
    font-size: 1em;  /* 32px из-за родителя */
  }

  .rem {
    font-size: 1rem; /* 16px — всегда от html */
  }
</style>
```
# 🟦 Урок 10: `overflow` — контроль вылезающего содержимого
Иногда содержимое не вмещается в элемент. Свойство `overflow` позволяет указать, **что делать в таких случаях.**
## 🔹 Значения `overflow`
| Значение  | Что делает                                           |
| --------- | ---------------------------------------------------- |
| `visible` | (по умолчанию) — контент выходит за пределы элемента |
| `hidden`  | обрезает всё, что не влезает                         |
| `scroll`  | всегда показывает полосы прокрутки                   |
| `auto`    | показывает прокрутку **только если нужно**           |

## ✅ Пример
``` css
.box {
  width: 300px;
  height: 150px;
  overflow: auto;
  border: 2px solid black;
  padding: 10px;
}
```
```html
<div class="box">
  Очень длинный текст, который не помещается в коробку и требует прокрутки...
</div>

```
## 💡 overflow-x и overflow-y
Можно управлять по осям отдельно:
```css
overflow-x: hidden;
overflow-y: scroll;
```
# 🟦 Урок 11: `display: none`, `visibility: hidden`, `opacity: 0`
Это три **способа скрыть элемент**, но работают они по-разному.
## 📌 Сравнение
| Свойство             | Видно? | Занимает место? | Можно кликнуть? |
| -------------------- | ------ | --------------- | --------------- |
| `display: none`      | ❌ нет  | ❌ нет           | ❌ нет           |
| `visibility: hidden` | ❌ нет  | ✅ да            | ❌ нет           |
| `opacity: 0`         | ❌ нет  | ✅ да            | ✅ да!           |

## 🔹 Примеры
```css
.box1 {
  display: none;
}
.box2 {
  visibility: hidden;
}
.box3 {
  opacity: 0;
}
```
```html
<div class="box1">display: none</div>
<div class="box2">visibility: hidden</div>
<div class="box3">opacity: 0</div>
```
## 💡 Запомни:
• `display: none` — **элемент полностью исчезает**
• `visibility: hidden` — **прячется, но место остаётся**
• `opacity: 0` — **прозрачный, но всё ещё "присутствует"**

# Урок 12: `position: static, relative,  absolute,  fixed.` (часть 1)
Этот урок мы разобьём на **две части**, чтобы спокойно и точно понять поведение каждого значения.
## 📌 Свойство `position`
Свойство `position` определяет **тип позиционирования элемента** в документе.
Вот базовые значения:
| Значение   | Что делает                                                               |
| ---------- | ------------------------------------------------------------------------ |
| `static`   | Положение по умолчанию (в потоке, нельзя двигать)                        |
| `relative` | Смещает элемент относительно его обычного положения                      |
| `absolute` | Убирает из потока, позиционируется относительно ближайшего родителя      |
| `fixed`    | Убирает из потока, позиционируется относительно окна браузера (viewport) |

Сегодня мы рассмотрим только `static` и `relative`.

## 🔹 `position: static`
**Значение по умолчанию.** Элемент находится там, где должен быть по потоку документа.
👉 Смещать его нельзя — `top`, `left` и т.д. **не работают.**

```css
.box1 {
  position: static;
}
```
🔹 `position: relative`
Оставляет элемент **на месте**, но позволяет **сдвинуть его** с помощью `top`, `left`, `right`, `bottom`.
Он **остаётся в потоке**, а место под ним **не исчезает**.
```css
.box2 {
  position: relative;
  top: 20px;
  left: 30px;
}
```
# Урок 13: `position: absolute` и `fixed` (часть 2)
## 📍 `position: absolute`
• **Элемент убирается из потока**, другие элементы его **не замечают**.
• Позиционируется **относительно ближайшего родителя,** у которого `position` не `static`.
• Если таких нет — позиционируется от `body`.
Пример:
```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 20px;
  left: 20px;
}
```
## 📌 `position: fixed`
• Тоже **убирается из потока.**
• **Позиционируется относительно окна браузера (viewport).**
• **Не двигается при прокрутке.**
Пример:
```css
.fixed-box {
  position: fixed;
  top: 0;
  right: 0;
}
```
# Урок 14: `z-index` — управление слоями в CSS.
## 🧱 Что такое `z-index`
Свойство `z-index` управляет **порядком наложения элементов по оси Z** (вперёд/назад).
Работает **только у позиционированных элементов** (`position: relative`, `absolute`, `fixed`, `sticky`).
## 📐 Синтаксис
```css
.element {
  position: absolute; /* или другое */
  z-index: 10;
}
```
Чем **выше значение**, тем **выше слой**.
Элементы без `z-index` ведут себя как будто у них `z-index: auto.`
## 🧠 Пример значений
| Значение     | Эффект                      |
| ------------ | --------------------------- |
| `auto`       | По умолчанию (как в потоке) |
| `0`          | Базовый уровень             |
| `1`, `2`,... | Поднимаем выше              |
| `-1`         | Отправляем назад            |

## 📝 Подсказка по CSS
```css
.parent {
  position: relative;
  width: 500px;
  height: 300px;
  background: #ccc;
}

.box-a, .box-b, .box-c {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50px;
  left: 50px;
  border: 2px solid black;
  color: white;
  text-align: center;
  font-size: 2rem;
  line-height: 200px;
}

.box-a {
  background: red;
  z-index: 1;
}

.box-b {
  background: green;
  z-index: 3;
}

.box-c {
  background: blue;
  z-index: 2;
}
```
# 🔸 Урок 15: Основы Flexbox
**Flexbox** (Flexible Box Layout) — это специальный режим отображения, предназначенный для удобного распределения пространства внутри контейнера и выравнивания его элементов.

Чтобы включить Flexbox, у **родительского** элемента нужно прописать:
```css
display: flex;
```
## 🔹 Основные понятия
### Flexbox работает по **направлению осей:**
• **Главная ось** **(main axis)** — по умолчанию горизонтальная.
• **Поперечная ось** **(cross axis)** — по умолчанию вертикальная.
### Все **элементы внутри Flex-контейнера** становятся **flex-элементами** и подчиняются его логике.
## 🔹 Свойство display: flex
### ✅ Значения:
| Значение      | Описание                                                              |
| ------------- | --------------------------------------------------------------------- |
| `flex`        | Включает флекс-контейнер (основной режим Flexbox)                     |
| `inline-flex` | То же, что и `flex`, но сам контейнер ведёт себя как `inline`-элемент |

### 🧪 Пример
```html
<style>
  .container {
    display: flex;
    border: 2px solid black;
  }

  .item {
    padding: 20px;
    background: lightcoral;
    border: 1px solid black;
    margin: 10px;
  }
</style>

<div class="container">
  <div class="item">Элемент 1</div>
  <div class="item">Элемент 2</div>
  <div class="item">Элемент 3</div>
</div>
```
В этом примере:
• `.container` — это flex-контейнер.
• `.item` — флекс-элементы, выстроенные **в строку.**

# 🔸 Урок 16: `justify-content`
Свойство `justify-content` управляет выравниванием **флекс-элементов по главной оси** (по умолчанию — **горизонтально**).
## 🔹 Синтаксис
```css
.container {
  display: flex;
  justify-content: ...;
}
```
## 🔹 Возможные значения:
| Значение        | Что делает                                                                                    |
| --------------- | --------------------------------------------------------------------------------------------- |
| `flex-start`    | Прижимает все элементы к **началу** главной оси                                               |
| `flex-end`      | Прижимает к **концу** главной оси                                                             |
| `center`        | Центрирует элементы                                                                           |
| `space-between` | Первый элемент прижат к началу, последний — к концу, между остальными — **равные промежутки** |
| `space-around`  | **Равные отступы по бокам** каждого элемента                                                  |
| `space-evenly`  | Равные промежутки **и между элементами, и с краёв контейнера**                                |

## 🧪 Пример
```html
<style>
  .container {
    display: flex;
    justify-content: space-between;
    border: 2px solid black;
    padding: 10px;
  }

  .item {
    background: lightblue;
    padding: 20px;
    border: 1px solid black;
  }
</style>

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
## 🔥 Подсказка
Измени `justify-content` на разные значения (например, `center`, `flex-end`, `space-around`) и смотри, как меняется расположение.

# 🔸 Урок 17: `align-items`
Свойство `align-items` управляет выравниванием **флекс-элементов по поперечной оси** (перпендикулярной главной).
⚠️ По умолчанию главная ось — **горизонталь**, значит `align-items` работает по вертикали.
## 🔹 Синтаксис
```css
.container {
  display: flex;
  align-items: ...;
}
```
## 🔹 Возможные значения
| Значение                 | Что делает                                    |
| ------------------------ | --------------------------------------------- |
| `stretch` (по умолчанию) | Растягивает элементы на всю высоту контейнера |
| `flex-start`             | Прижимает к **началу поперечной оси** (вверх) |
| `flex-end`               | Прижимает к **концу поперечной оси** (вниз)   |
| `center`                 | Центрирует элементы по поперечной оси         |
| `baseline`               | Выравнивает **по базовой линии** текста       |

## 🧪 Пример
```html
<style>
  .container {
    display: flex;
    align-items: center;
    height: 200px;
    border: 2px solid black;
  }

  .item {
    width: 60px;
    height: 80px;
    background: lightcoral;
    margin: 5px;
  }
</style>

<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```
Попробуй заменить `align-items` на `flex-start`, `flex-end`, `stretch`, `baseline` — и посмотри на поведение.

# 🔸 Урок 18: `align-content`
Свойство `align-content` регулирует выравнивание **всей группы строк** флекс-элементов по **поперечной оси**.
⚠️ Работает только, если у контейнера **несколько строк** (то есть `flex-wrap: wrap` и элементов больше, чем помещается в одну строку).
## 🔹 Синтаксис
```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: ...;
}
```
## 🔹 Возможные значения
| Значение                 | Что делает                                                |
| ------------------------ | --------------------------------------------------------- |
| `stretch` (по умолчанию) | Растягивает строки по всей высоте контейнера              |
| `flex-start`             | Все строки прижаты к верху контейнера                     |
| `flex-end`               | Все строки прижаты к низу                                 |
| `center`                 | Все строки сгруппированы по центру                        |
| `space-between`          | Равномерно распределяет строки, **без отступов по краям** |
| `space-around`           | Равномерно с **отступами по краям**                       |
| `space-evenly`           | Равномерно, **одинаковые отступы между и по краям**       |

## Ключевые отличия `align-content` от `align-items`
• align-items: Управляет выравниванием отдельных элементов внутри каждой строки/столбца по поперечной оси.
• align-content: Управляет выравниванием всех строк/столбцов как единого блока внутри контейнера.

## 🧪 Пример
``` html
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    height: 400px;
    border: 2px solid black;
  }

  .item {
    width: 100px;
    height: 80px;
    background: lightseagreen;
    margin: 10px;
  }
</style>

<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```
Измени значение `align-content` и понаблюдай за тем, как меняется распределение строк.

# 🔸 Урок 19: `flex-direction`
Свойство `flex-direction` управляет **направлением главной оси** внутри флекс-контейнера. От этого зависят **расположение элементов** и то, как работают другие свойства, такие как `justify-content`.
## 🔹 Синтаксис
```css
.container {
  display: flex;
  flex-direction: ...;
}
```
## 🔹 Возможные значения
| Значение               | Описание                                       |
| ---------------------- | ---------------------------------------------- |
| `row` *(по умолчанию)* | Элементы идут слева направо, как строки текста |
| `row-reverse`          | Элементы идут справа налево                    |
| `column`               | Элементы идут сверху вниз                      |
| `column-reverse`       | Элементы идут снизу вверх                      |

## 🧪 Пример
```html
<style>
  .container {
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    height: 300px;
  }

  .item {
    width: 80px;
    height: 80px;
    background: tomato;
    margin: 10px;
  }
</style>

<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

# 🔸 Урок 20: `flex-wrap`
По умолчанию **элементы во флекс-контейнере** стараются **вписаться в одну строку**. Свойство `flex-wrap` говорит контейнеру: **разрешено ли переносить элементы на новую строку**, если они не помещаются.
## 🔹 Синтаксис
```css
.container {
  display: flex;
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
## 🔹 Значения
| Значение                  | Что делает                                                        |
| ------------------------- | ----------------------------------------------------------------- |
| `nowrap` *(по умолчанию)* | Все элементы в одну строку (не переносятся)                       |
| `wrap`                    | Перенос на новую строку сверху вниз                               |
| `wrap-reverse`            | Перенос снизу вверх (визуально строки появляются над предыдущими) |

## 📊 Иллюстрация
При `wrap:`
```css
[ item ][ item ][ item ]
[ item ][ item ]
```
При `wrap-reverse:`
```css
[ item ][ item ]
[ item ][ item ][ item ]
```
## 🧪 Пример
```html
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    border: 2px solid black;
    width: 250px;
  }

  .item {
    width: 100px;
    height: 100px;
    background: orange;
    margin: 5px;
  }
</style>

<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```
# 🔸 Урок 21: `gap` (расстояние между флекс-элементами)
Свойство `gap` задаёт **отступы между дочерними элементами** внутри контейнера с `display: flex` или `display: grid`.
## 🔹 Синтаксис
```css
.container {
  display: flex;
  gap: 20px;
}
```
💡 Это как `margin` между элементами, **но более удобный** — не требует прописывать отступ каждому элементу вручную.
## 🔹 Разновидности
```css
gap: 20px;            /* горизонталь и вертикаль одинаковы */
gap: 10px 20px;       /* вертикальный отступ 10px, горизонтальный 20px */
row-gap: 10px;        /* только по строкам */
column-gap: 20px;     /* только по колонкам */
```
## 🧪 Пример
```html
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 20px;
    border: 2px solid black;
    width: 300px;
  }

  .item {
    width: 100px;
    height: 100px;
    background: lightcoral;
  }
</style>

<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```
## 📌 Почему `gap` лучше, чем `margin`
• Не влияет на **внешние отступы** контейнера.
• Не нужно обнулять отступы у последнего/первого элемента.
• Работает одинаково во `flex` и `grid`.

# 🔸 Урок 22: `flex`, `order`, `align-self`
Эти свойства применяются **не к контейнеру**, а к **его дочерним элементам.**

## 🔹 `flex`
Универсальное свойство для распределения **размеров** между элементами.
```css
.item {
  flex: 1;
}
```
Сокращённая запись для трёх свойств:
```css
flex: [grow] [shrink] [basis];
```
Примеры:
```css
flex: 1;         /* аналог flex: 1 1 0% */
flex: 0 0 100px; /* элемент фиксированной ширины */
```
🧠 Запомни:
• **grow** — может ли элемент растягиваться;

• **shrink** — может ли сжиматься;

• **basis** — базовый размер (до расчётов).

## 🔹 `order`
Позволяет **переопределить порядок элементов** в потоке (без изменения HTML):
```css
.item {
  order: 2;
}
```
• По умолчанию у всех `order: 0`.
• Элемент с меньшим `order` — отображается раньше.

## 🔹 `align-self`
Переопределяет `align-items` **только для одного элемента**:
```css
.item {
  align-self: flex-end;
}
```
Значения как у `align-items`:
• `flex-start`
• `flex-end`
• `center`
• `stretch` (по умолчанию)
• `baseline`

## 🧪 Пример
```html
<style>
  .container {
    display: flex;
    height: 200px;
    border: 2px solid black;
    align-items: center;
  }

  .item {
    width: 100px;
    background: lightblue;
    border: 1px solid black;
  }

  .one {
    flex: 1;
  }

  .two {
    flex: 2;
    align-self: flex-start;
  }

  .three {
    order: -1;
  }
</style>

<div class="container">
  <div class="item one">1</div>
  <div class="item two">2</div>
  <div class="item three">3</div>
</div>
```
# 🔸 Урок 23: CSS Grid — Основы
**CSS Grid** — это система для создания двумерных макетов (работает по строкам и столбцам одновременно). Если Flexbox хорош для одномерных раскладок (либо строка, либо столбец), то Grid — это твой выбор, когда нужно управлять и рядами, и колонками. Это как таблица, но на стероидах: гибкая, мощная и современная.
Когда ты задаёшь `display: grid`, элемент становится **Grid-контейнером**, а его дети — **элементами сетки** (grid items). Они автоматически начинают жить по правилам сетки.
## 🔹 Ключевые свойства контейнера
### 1.`display: grid`
Включает Grid-режим. Все прямые потомки контейнера становятся элементами сетки.
```css
.container {
  display: grid;
}
```
### 2.`grid-template-columns`
Определяет, сколько будет **колонок** и их размеры. Можно задавать в:
• `px` (фиксированная ширина, например, 200px).
• `%` (процент от ширины контейнера).
• `fr` (fraction — доля свободного пространства, как веса).
• `auto` (подстраивается под контент).
Пример:
```css
grid-template-columns: 200px 1fr 2fr;
```
• Первая колонка — 200px.
• Вторая — 1 часть оставшегося места.
• Третья — 2 части (вдвое больше второй).
### 3.`grid-template-rows`
Задаёт **строки** и их высоту. Работает так же, как grid-template-columns, но для вертикали.
```css
grid-template-rows: 100px 200px;
```
• Первая строка — 100px.
• Вторая — 200px.
### 4.`gap` (или `row-gap` / `column-gap`)
Задаёт расстояние между ячейками (как отступы между клетками в тетрадке).
```css
gap: 10px; /* Отступы по 10px между строками и колонками */
```
Или раздельно:
```css
row-gap: 15px; /* Между строками */
column-gap: 10px; /* Между колонками */
```
## 🧪 Простой пример
```css
<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 2fr; /* Две колонки: 1 часть и 2 части */
    grid-template-rows: 100px 100px; /* Две строки по 100px */
    gap: 10px; /* Отступы между ячейками */
    background: #ddd; /* Серый фон для контейнера */
  }

  .item {
    background: steelblue; /* Синий фон для ячеек */
    color: white;
    font-size: 24px;
    display: flex; /* Чтобы текст был по центру */
    align-items: center;
    justify-content: center;
  }
</style>

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```
### Что тут происходит:
• Контейнер делит пространство на **2 колонки**: первая — 1 часть, вторая — 2 части (вдвое шире).
• Две строки по **100px** высотой.
• Между ячейками отступы **10px** (`gap`).
• Элементы (`1`, `2`, `3`, `4`) автоматически занимают ячейки по порядку:

• `1` — первая строка, первая колонка.
• `2` — первая строка, вторая колонка.
• `3` — вторая строка, первая колонка.
• `4` — вторая строка, вторая колонка.

🧠 Полезные советы

• fr — это как делёжка пирога: 1fr 2fr значит, что вторая колонка получает вдвое больше свободного места.
• Если ячеек больше, чем задано в grid-template, Grid автоматически создаст новые строки (но лучше задавать явно).
• Хочешь проверить, как выглядит сетка? Используй DevTools в браузере (F12 → выбери контейнер → вкладка Layout → включи Grid overlay).

# 📦 Урок 24: CSS Grid — Выравнивание элементов
Когда сетка уже создана, можно управлять **расположением** элементов внутри ячеек и самой сетки.
## 🔹 Свойства для контейнера
### 1. `justify-items`
Выравнивание **по горизонтали** внутри ячеек:
```css
justify-items: start;   /* слева */
justify-items: end;     /* справа */
justify-items: center;  /* по центру */
justify-items: stretch; /* растягивает (по умолчанию) */
```
### 2. **align-items**
Выравнивание **по вертикали** внутри ячеек:
```css
align-items: start;     /* сверху */
align-items: end;       /* снизу */
align-items: center;    /* по центру */
align-items: stretch;   /* растягивает (по умолчанию) */
```
## 🔹 Свойства для всей сетки
### 3. justify-content
Двигает всю сетку **по горизонтали**:
```css
justify-content: start;      /* влево */
justify-content: end;        /* вправо */
justify-content: center;     /* по центру */
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```
### 4. align-content
 Двигает всю сетку **по вертикали** (работает, если высота контейнера больше сетки):
 ```css
align-content: start; 
align-content: end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
```
## 🔹 Пример
```html
<style>
  .container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px;
    gap: 10px;

    justify-content: center; /* сетка по центру по горизонтали */
    align-content: center;   /* сетка по центру по вертикали */

    justify-items: center;   /* содержимое ячеек по центру по горизонтали */
    align-items: center;     /* содержимое ячеек по центру по вертикали */

    height: 400px;
    background: lightgray;
  }

  .item {
    background: tomato;
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
# 📦 Урок 25: CSS Grid — Позиционирование элементов (`grid-column` и `grid-row`)
## Что за CSS Grid и что мы тут делаем?
CSS Grid — это как разметка для твоей веб-странички, где ты можешь расставить элементы по клеточкам, как в таблице, но круче. Сегодня мы говорим про то, как заставить один элемент занимать **несколько клеток** (колонок или строк) в этой сетке. Для этого есть два главных свойства: `grid-column` и `grid-row`.
## 🔹 `grid-column` — растягиваем элемент по колонкам
Представь, что у тебя сетка, как шахматная доска, с колонками. Если хочешь, чтобы один элемент занял, например, сразу две колонки, используешь `grid-column`. Пишешь так:
```css
.item {
  grid-column: 1 / 3;
}
```
**Что это значит?**
`1` — это линия, с которой элемент начинается (первая колонка).
`3` — это линия, где он заканчивается (но третья колонка не включается).
Итог: элемент растянулся на **две колонки** (с 1-й по 2-ю).
## 🔹 grid-row — растягиваем по строкам
То же самое, но для строк (горизонтальных линий). Например:
```css
.item {
  grid-row: 1 / 3;
}
```
**Что тут?**
`1` — стартовая строка.
`3` — конечная строка (не включая её).
Элемент займёт **две строки** по высоте.
## 🔹 Короткая запись с `span`
Если тебе лень писать конечную линию, можешь сказать: "Бери N клеток от старта". Это делается через `span`. Например:
```css
.item {
  grid-column: 1 / span 2; /* Начинай с 1-й колонки и возьми 2 колонки */
  grid-row: 2 / span 3;    /* Начинай со 2-й строки и возьми 3 строки */
}
```
`span 2` — это как "растяни на 2 клетки". Удобно, когда не хочешь считать линии.
## 🔹 Как это выглядит на практике?
Давай разберём пример кода. У нас есть сетка 4×4 (4 колонки и 4 строки, каждая ячейка 100×100 пикселей). Один элемент мы хотим сделать "жирным" — чтобы он занимал 2 колонки и 2 строки.
```html
<style>
  .container {
    display: grid; /* Включаем сетку */
    grid-template-columns: repeat(4, 100px); /* 4 колонки по 100px */
    grid-template-rows: repeat(4, 100px);    /* 4 строки по 100px */
    gap: 5px; /* Промежутки между ячейками */
  }
  .item {
    background: tomato; /* Цвет фона — помидорный */
    color: white;
    display: flex;
    align-items: center;
    justify-content: center; /* Центрируем текст внутри */
    font-weight: bold;
  }
  .big {
    background: teal; /* Другой цвет для большого элемента */
    grid-column: 1 / 3; /* Занимает 2 колонки */
    grid-row: 1 / 3;    /* Занимает 2 строки */
  }
</style>

<div class="container">
  <div class="item big">BIG</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <!-- Остальные элементы до 16 -->
</div>
```
### Урок 26: CSS `grid-area`.
## Что такое `grid-area`?
`grid-area` — это как GPS для элемента в CSS Grid. Ты говоришь элементу: "Бери и сиди вот тут, с этой точки до этой". Оно заменяет сразу четыре свойства, чтобы не писать кучу строк:

• **grid-row-start:** с какой линии по вертикали (строке) начать.
• **grid-column-start:** с какой линии по горизонтали (колонке) начать.
• **grid-row-end:** до какой линии по вертикали тянуть.
• **grid-column-end:** до какой линии по горизонтали тянуть.

Вместо того чтобы писать всё это по отдельности, ты просто пишешь:
```css
grid-area: row-start / column-start / row-end / column-end;
```
И всё, элемент знает, где ему быть!

## Как это работает? Примерчик!
Представь, у тебя есть сетка 4x4 (4 строки и 4 колонки, каждая ячейка 80x80 пикселей). И три блока: красный, жёлтый и зелёный. Мы хотим их разместить по-умному.
```html
<div class="container">
  <div class="item red">1</div>
  <div class="item yellow">2</div>
  <div class="item green">3</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 80px); /* 4 колонки по 80px */
  grid-template-rows: repeat(4, 80px); /* 4 строки по 80px */
  gap: 5px; /* расстояние между ячейками */
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  font-weight: bold;
}

.red {
  background: red;
  grid-area: 1 / 1 / 2 / 3; /* старт с 1-й строки, 1-й колонки, конец на 2-й строке, 3-й колонке */
}

.yellow {
  background: yellow;
  grid-area: 2 / 1 / 4 / 2; /* старт со 2-й строки, 1-й колонки, конец на 4-й строке, 2-й колонке */
}

.green {
  background: green;
  grid-area: 2 / 2 / 4 / 4; /* старт со 2-й строки, 2-й колонки, конец на 4-й строке, 4-й колонке */
}
```















































