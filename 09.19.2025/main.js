// const dataTypes = { //Объект может содержать как свойства любые типы данных.
//     booleanDataType: true,
//     numbersDataType: 10,
//     stringDataType: 'test',
//     undefinedDataType: undefined,
//     //Функции в объекте называются методами.
//     arrowFunctionDataType: () => { //Стрелочная функция
//         console.log('hello world')
//     },
//     expressionFunctionDataType: function(){ //Функциональное выражение
//         console.log('hello world')
//     },
//     methodDataType(){ //Метод объекта
//         console.log('hello world')
//     },
//     nestedObj: {
//         hello: 'test',
//         foo(){
//             console.log('hello world')
//         }
//     }
// }
//
// console.log(dataTypes.numbersDataType)
// dataTypes.numbersDataType = 20
// console.log(dataTypes.numbersDataType)
// dataTypes.methodDataType()
// console.log(dataTypes.methodDataType)
// console.log(dataTypes.nestedObj.hello)
// dataTypes.nestedObj.hello = 'hello'
// console.log(dataTypes.nestedObj.hello)
// dataTypes.nestedObj.foo()

// const user = {
//     name: 'Johan',
//     age: 25,
//     say(){
//         console.log(`Hello! My name is ${this.name}. Im ${this.age} years old.`)
//     }
// }
// user.say()
//
// const user1 = {
//     name: 'Max',
//     age: 21,
//     say(){
//         console.log(`Hello! My name is ${this.name}. Im ${this.age} years old.`)
//     }
// }
// user1.say()


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// ---------------------------------------------------------------------------//
const weaponOne = {
    minDamage: 5,
    maxDamage: 10,
    hitChance: 10,
    getDamage(){
        return rand(this.minDamage, this.maxDamage)
    },
    hit(){
        if(rand(0, 20) >= this.hitChance){
            return this.getDamage()
        }else{
            return false
        }
    },
}
const weaponTwo = {
    minDamage: 50,
    maxDamage: 100,
    hitChance: 19,
    getDamage(){
        if(rand(0, 1)){
            return this.maxDamage
        }else {
            return this.minDamage
        }
    },
    hit(){
        if(rand(0, 20) >= this.hitChance){
            return this.getDamage()
        }else{
            return false
        }
    },
}

const getPlayer = (name, health, weapon) => {
    return {
        name: name,
        health: health,
        weapon: weapon,
        attack(target){
            const damage = this.weapon.hit()
            if(damage){
                target.health -= damage
                console.log(`${this.name} Нанёс ${damage} игроку ${target.name}`)
            }else{
                console.log(`${this.name} Промахнулся`)
            }
        }
    }
}

const playerOne = getPlayer('биба', 100, weaponOne)
const playerTwo = getPlayer('боба', 100, weaponOne)

playerOne.attack(playerTwo)

























