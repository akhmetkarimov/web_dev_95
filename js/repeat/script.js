// for(старт; условие; шаги) {
//      действие
// }


for (let start = 2; start < 13; start++) {
    document.write(`<p>Продукт ${start}</p>`)   
}


// 1) start = 2;
// 2) start < 13; true 2 < 13
// 3) действие -> document.write(`<p>Продукт ${start}</p>`)  
// 4) start++;  start = 3


// 1) start = 3;
// 2) start < 13; true 3 < 13
// 3) действие -> document.write(`<p>Продукт ${start}</p>`)  
// 4) start++; start = 4


for (let i = 24; i > 13; i--) {
    document.write(`<p>Обраное ${i}</p>`) 
}

// let start = +prompt('Старт')
// let end = +prompt('Конец')
// let stop = +prompt('Стоп')

// if (start > end) {
//     alert('Конечная точка меньше чем стартовая точка!!!!')
// }

// for (let i = start; i < end; i++){
//     if (i == stop) {
//         document.write(`<p>СТОП!</p>`)
//         break
//     }
//     document.write(`<p>Вывод ${i}</p>`) 
// }


// [] - массив

let books = [
    'Магия Утра', 
    'Зеленая миля', 
    'Шерлок Холмс', 
    'Жестокий век', 
    '1984', 
    'Оно'
] // 0 -> n

document.write(`<h4>Название книги: ${books[2]}</h4>`)
document.write(`<h4>Название книги: ${books[5]}</h4>`)



document.write(`<hr><h4>Цикл For()</h4>`)

for(let index = 0; index < books.length; index++) {
    document.write(`<h4>Название книги: ${books[index]}</h4>`)
}

document.write(`<hr><h4>Цикл For in</h4>`)

for (const index in books) {
    document.write(`<h4>Название книги: ${books[index]}</h4>`)
}

console.log(books)

document.write(`<hr><h4>Цикл For of</h4>`)

for (const data of books) {
    document.write(`<h4>Название книги: ${data}</h4>`)
}