// ------------- Вывод данных:

// alert('External Message!')
// console.log('Message to console!')
document.write('Hello to Document from js')
// document - .html файл к которому Вы подключены


// ------------- Типы данных:

// Строка - string (Пример: 'Сообщение', "Слова" ...)
// Число - integer[int (Пример: 1, 2, 3, 512)], double, float (Пример: 1.2, 5.8 ...)
// Логические - boolean (Пример: true, false, 1, 0)

// Binary(Бинарный) - 0, 1
// Decimal(Десятеричный) - [0-9]
// Hex-Decimal(Шестнадцатеричный) - [0-9][A-F]

// ------------- Переменные:

// var/let/const name

// Var - можно использовать до и после создание переменной
myVar = 'До создание переменной'
document.write(`<p>${myVar}</p>`)

var myVar = 20

// ES6
document.write(`<p>После создания переменной ${myVar}</p>`)
myVar = 'Поменял значение'
document.write(`<p>После создания переменной ${myVar}</p>`)
 

// Let - используется только после создание переменной

let myLet = 200

document.write(`<p>(Let) После создания переменной ${myLet}</p>`)
myLet = 'Поменял значение'
document.write(`<p>(Let) После создания переменной ${myLet}</p>`)


// Const - используется только после создание и постоянное значение

const myConst = 3.14

document.write(`<p>(Const) После создания переменной ${myConst}</p>`)



// ------------- Ввод данных: 

// prompt()

// let name = prompt('Введите свое имя:')
let name = 'Decode'

document.write(`<h3>Welcome ${name}!</h3>`)


// ------------- Операторы:
// +, -, *, /, %

// parseInt() string -> int
// let n1 = parseInt(prompt('Введите первое число:'))
// let n2 = parseInt(prompt('Введите второе число:'))

// Number string -> double, float, int
// let n1 = Number(prompt('Введите первое число:'))
// let n2 = Number(prompt('Введите второе число:'))

// + string -> double, float, int
let n1 = +(prompt('Введите первое число:'))
let n2 = +(prompt('Введите второе число:'))

document.write(`<h3>N1: ${n1}, N2: ${n2}</h3>`)

document.write(`<p>${n1} + ${n2} = ${n1 + n2}</p>`)
document.write(`<p>${n1} - ${n2} = ${n1 - n2}</p>`)
document.write(`<p>${n1} * ${n2} = ${n1 * n2}</p>`)
document.write(`<p>${n1} / ${n2} = ${n1 / n2}</p>`)
document.write(`<p>${n1} % ${n2} = ${n1 % n2}</p>`)