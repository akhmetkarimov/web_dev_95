// -------------  Сравнительные операторы:
// >, <, >=, <=, ==,  ===, !==, !=,

// -------------  Условные операторы:
// if - если 
// action - действие 
// else - иначе
// else if - иначе если

// if (condition) {
//      action
// }

// if (20 > 20) {
//     document.write('<p>Первый if 20 > 1 </p>')
// } else {
//     document.write('<p>Первый else </p>')
// }


// let num = +(prompt('enter number'))

// if (num % 2 == 0) {
//     document.write('<p>Четное</p>')
// } else {
//     document.write('<p>Нечетное</p>')
// }

let num = 14

if (num % 2 !== 0) {
    document.write('<p>Нечетное</p>')
} else {
    document.write('<p>Четное</p>')
}


if (10 == '10') {
    document.write("<p>10 == '10'</p>")
}

// 10 == '10' true

if (10 === '10') {
    document.write("<p>10 == '10'</p>")
}

// 10 === '10' false


// -------------  Логические операторы:

// && ||

// && - AND (и) 
// || - OR (или) 

//         true       true
// && - condition && condition = true


let aim = true
let motivation = false
let perseverance = true

// if (aim && motivation) {
//     document.write("<h2>You Success!</h2>")
// } else {
//     document.write("<h2>You Fail!!!</h2>")
// }

if (aim && (motivation || perseverance)) {
    document.write("<h2>You Success!</h2>")
} else {
    document.write("<h2>You Fail!!!</h2>")
}


let ans = 'b'

if (ans === 'a') {
    document.write('<p>Incorrect!</p>')
} else if (ans === 'b') {
    document.write('<p>Incorrect!</p>')
} else if (ans === 'c') {
    document.write('<p>Incorrect!</p>')
} else if (ans === 'd') {
    document.write('<p>Correct!!!</p>')
} else if (ans === 'e') {
    document.write('<p>Incorrect!</p>')
} else {
    document.write('<p>ERROR!</p>')
}


let num1 = 123
let num2 = 1513
let num3 = 52

if (num1 > num2 && num1 > num3) {
    document.write("num1 больше")
} else if (num2 > num1 && num2 > num3) {
    document.write("num2 больше")
} else if (num3 > num1 && num3 > num2) {
    document.write("num3 больше")
} else {
    document.write("error")
}

let max = 0

if (num1 > max) {
    max = num1
}

// 10 > 0 true max = 10
// 123 > 0 true max = 123

if (num2 > max) {
    max = num2
}

// 15 > 10 true max = 15
// 15 > 123 false max = 123

if (num3 > max) {
    max = num3
}

// 52 > 15 true max = 52
// 52 > 123 false max = 123

// if (num1 > max) {
//     max = num1
// } else if (num2 > max) {
//     max = num2
// } else if (num3 > max) {
//     max = num3
// }

document.write(`<p>Max: ${max}</p>`)


let inputLogin = prompt("Введите логин")
let inputPassword = prompt("Введите пароль")

let login = 'decode'
let password = 'decode'

if (inputLogin == login && inputPassword == password) {
    document.write("<p>welcome decode</p>")
} else if (inputPassword !== password && inputLogin !== login) {
    document.write("<p>invalid password and login</p>")
} else if (inputLogin !== login && inputPassword === password) {
    document.write("<p>invalid login</p>")
} else if (inputPassword !== password && inputLogin === login) {
    document.write("<p>invalid password</p>")
}