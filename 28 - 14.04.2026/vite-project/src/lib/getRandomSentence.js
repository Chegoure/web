const words = [
  "яблоко", "солнце", "ветер", "книга", "горизонт",
  "море", "тишина", "облако", "город", "звезда",
  "песок", "лес", "ключ", "мост", "фонарь",
  "экран", "кофе", "дождь", "планета", "музыка",
  "путь", "камень", "огонь", "трава", "время",
  "дверь", "птица", "волна", "телефон", "свет"
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomSentence = (wordCount) => {
  let sentence = ''
  for(let i = 0; i < wordCount; i++) {
    sentence += ' ' + words[getRandomInt(0, words.length-1)]
  }
  return sentence + '.'
}

let stopper = 0

const intervalId = setInterval(() => {
  stopper++
  if (stopper > 100) {
    clearInterval(intervalId)
  }

  const hack = document.querySelector('.thread')
  hack.click()
  setTimeout(() => {
    const hackPost = document.querySelectorAll('.log-in__btn')[1]
    hackPost.click()
    setTimeout(() => {

      const hackContent = document.querySelector('textarea')
      hackContent.value = getRandomSentence(20)
      hackContent.dispatchEvent(new Event('input', { bubbles: true}))

      setTimeout(() => {
        const hackCreateBtn = document.querySelectorAll('.threads-create__form-btn')[1]
        hackCreateBtn.click()
      }, 200)
    },200)
  },200)
}, 800)


