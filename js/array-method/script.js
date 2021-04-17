let subjects = ['Математика', 'Геометрия']

document.write(`<p>До добавления ${subjects}</p>`)

subjects[2] = 'Физика'

document.write(`<p>После добавления ${subjects}</p>`)

subjects[subjects.length] = 'Литература'

document.write(`<p>После добавления #2 ${subjects}</p>`)

// Добавляет элементы в конец массива
subjects.push('Физра', 'Химия', 'Технология')

document.write(`<p>После добавления #3 ${subjects}</p>`)

// Добавляет элементы в начло массива
subjects.unshift('Русский Язык', 'Английский')

document.write(`<p>После добавления #4 (Начало)  ${subjects} </p>`)

// Удаляет элемент с конца массива
subjects.pop()

document.write(`<p>После удаления #1 (конец) ${subjects} </p>`)

// Удаляет элемент с начала массива
subjects.shift()

document.write(`<p>После удаления #2 (начало) ${subjects} </p>`)

let delIndex = subjects.indexOf('Физика')

// Удаление элемента по индексу
subjects.splice(delIndex, 1)

document.write(`<p>После удаления #3 (по индексу) ${subjects} </p>`)

console.log('Все методы которые можно использовать с массивом', subjects.__proto__) 
// dir()

let temp = [1, 1, 1, 1, 1]
temp.fill(12, 1, 4)
document.write(`<p>Fill ${temp} </p>`)


let arrayIntoArray = [1, 2, 3, [33, 21, 87]]

document.write(`<p>${arrayIntoArray}</p>`)
document.write(`<p>Flat: ${arrayIntoArray.flat()}</p>`)
document.write(`<p>Join: ${arrayIntoArray.join('-')}</p>`)

document.write(`<p>${subjects}</p>`)
document.write(`Сортировка Z-A: ${subjects.reverse()}`)
document.write(`Сортировка A-Z: ${subjects.sort()}`)