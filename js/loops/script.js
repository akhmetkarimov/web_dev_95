// while (условие) {
//     тело
// }

let count = 10
    // 99 < 100 true
    // 100 < 100 false
let sumE = 0
let sumO = 0

while (count < 40) {
    if (count % 2 == 0) {
        document.write(`<p>Count: ${count}</p>`)
        sumE = sumE + count
            // sumE += count
    } else {
        sumO += count
    }
    count++
    // count += 1
    // count = count + 1
}

document.write(`<h2>Even: ${sumE}, Odd: ${sumO}</h2>`)

// let inpLogin = prompt('Логин')
// let inpPass = prompt('Пароль')

// let attempts = 0  

// while (inpLogin != 'decode' || inpPass != 'decode') {
//     inpLogin = prompt('Логин не верный, введите снова')
//     inpPass = prompt('Пароль не верный, введите снова')
//     attempts++

//     if (attempts >= 3) {
//         break
//     }

// }

// if (attempts == 3) {
//     alert('У вас закончились попытки, поробуйте позже!')
// } else {
//     alert('Добро пожаловать!!!')
// }

let imgCount = 1

while (imgCount <= 20) {
    document.write(`<img src='decode.png'>`)
    imgCount += 1
}



// for(начло;условие;действие[шаги]) {
//      тело 
// }

for (let i = 12; i <= 32; i += 1) {
    document.write(`<p>For, ${i}</p>`)
}

// 1) i = 12
// 2) 12 <= 32 true
// 3) document.write()
// 4) i+=1 13

// 1) i = 13
// 2) 13 <= 32 true
// 3) document.write()
// 4) i+=1 14

// 1) i = 14
// 2) 14 <= 32 true
// 3) document.write()
// 4) i+=1 15


// .....


// 1) i = 32
// 2) 32 <= 32 true
// 3) document.write()
// 4) i+=1 33


// 1) i = 33
// 2) 33 <= 32 false
// 3) -
// 4) -


// do {
//      тело
// } while (условие)


do {
    document.write('<p>DO WHILE</p>')
} while (10 > 100)

while (10 > 100) {
    document.write('<p>WHILE</p>')
}



let countF = 7

let first = 1
let second = 2

document.write(` ${first} ${second} `)

for (let i = 0; i < countF; i++) {
    document.write(` ${first + second} `)
    let temp = first // 1
    first = second // 2
    second = temp + first // 1 + 2 = 3
}


// 1 2 3 5 8 13 21

// (1 + 2) = 3
// (2 + 3) = 5
// (3 + 5) = 8
// (5 + 8) = 13
// (8 + 13) = 21 

// let firstNum = 12
// let secondNum = 3
// let result = 1
// for (let i = 1; i <= secondNum; i++) {
//     result *= firstNum
// }
// document.write(`<p>${result}</p>`)



// let n1 = 21
// let n2 = 12

// let sign = prompt('Выберите команду [+, -, *, /, %] -1 для остановки')

// while (sign != -1) {
//     if (sign === '+') {
//         alert(`${n1} + ${n2} = ${n1+n2}`)
//     } else if (sign === '-') {
//         alert(`${n1} - ${n2} = ${n1-n2}`)
//     } else if (sign === '*') {
//         alert(`${n1} * ${n2} = ${n1*n2}`)
//     } else if (sign === '/') {
//         alert(`${n1} / ${n2} = ${n1/n2}`)
//     } else if (sign === '%') {
//         alert(`${n1} % ${n2} = ${n1%n2}`)
//     }

//     sign = prompt('Выберите команду [+, -, *, /, %] -1 для остановки')
// }
