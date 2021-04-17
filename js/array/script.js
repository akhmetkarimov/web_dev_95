// let arrName = []
// [] - массив
//             0        1        2
let names = ['Omar', 'Andery', 'Abylay']
names[2] = 'Changed'

document.write(`<p>${names[1]}</p>`)
document.write(`<p>${names[0]}</p>`)
document.write(`<p>${names[2]}</p>`)
document.write(`<p>${names.length}</p>`)


for (let i = 0; i < names.length; i++) {
    document.write(`<p>(for)${names[i]}</p>`)
}

let images = [
    'images/img1.jpeg',
    'images/img2.jpeg',
    'images/img3.jpeg',
    'images/img4.jpeg'
]

for (let i = 0; i < images.length; i++) {
    document.write(`<img src='${images[i]}' width='300' height='300'>`)
}


// let arr = [1, 3122, 12,1321]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {

//     }
// }

