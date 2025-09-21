// const isAdmin = false;
// const name = isAdmin ? 'Admin' : 'User'; // Тернарный оператор.
// console.log(name)

// const arr = [1,2,3,4,5]
// arr[2] // <-- Элемент массива.
//
// arr[2] += 2
// console.log(arr[2])
//
// arr[2] = 'bob'
// console.log(arr[2])

// const arr = [1,2,3,4,5,6,7,8,9,10]
//
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
//
// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] * 2
// }
// console.log(arr)

// const arr = ['bob', 'mike', 'johan', 'grek', 'dimon']
//
// const deleter = (name) => {
//     const idx = arr.indexOf(name)
//     if(idx === -1){
//         return console.log('Нет такого имени')
//     }
//     arr.splice(idx, 1)
// }
// deleter(true)
// console.log(arr)
//
// Функция принимает массив чисел и возврашает новый массив из чисел которые %3===0

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const foo = (numbers) => {
//     const arrResult = []
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 3 === 0){
//             arrResult.push(numbers[i])
//         }
//     }
//     return arrResult
// }
//
// console.log(foo(arr))

// const one = (two) => {
//     const three = 'hello'
//     two(three)
// }
//
// const foo = (a) => {
//     console.log(a)
// }
//
// // const bar = (a) => {
// //     alert(a)
// // }
//
// one(foo)
// // parent(bar)

const arr = [1,2,3,4,5,6,7]

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// 70 и 76 строка выполянют одно и то же.

arr.forEach((item) => {
    console.log(item)
})