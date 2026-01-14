const Vasya = {
    name: 'Васян',
    favFood: ['Борщ', 'Чахартма', 'Плов'],
    greetings(){
        let favFoodString = ''
        this.favFood.forEach((foodItem, index) => {
            favFoodString += index === this.favFood.length-1 ? foodItem + '.' : foodItem + ', '
        })
        console.log(`Здарова, я ${this.name} ! Я обожаю похавать ${favFoodString} `)
    }
}
Vasya.greetings()

const parentElemnt = document.getElementById('app')

const addBox = () => {
    const newEl = document.createElement('div')
    newEl.innerHTML = 'hello world'
    newEl.classList.add('box')
    parentElemnt.append(newEl)
}
addBox()
