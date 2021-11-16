// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arrNum = [1, 2, 3, 4, 5]
let arrStr = ['qw', 'we', 'er', 'rt', 'ty']
let arrStrNumBool = [true, 'two', 3, 'four', false]
console.log(arrNum);
console.log(arrStr);
console.log(arrStrNumBool);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arrEmpty = []
arrEmpty[0] = 'first element'
arrEmpty[1] = 'second element'
arrEmpty[2] = 'third element'
console.log(arrEmpty);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>for</div>`)
}


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>for + ${i}</div>`)
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0
while (i < 20) {
    document.write(`<div>while</div>`)
    i++
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
i = 0
while (i < 20) {
    document.write(`<div>while + ${i}</div>`)
    i++
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrNum10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (const element of arrNum10) {
    console.log(element);
}


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrStr10 = ['qa', 'ws', 'ed', 'rf', 'tg', 'yh', 'uj', 'ik', 'ol', 'p;']
for (const element of arrStr10) {
    console.log(element);
}


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrAny10 = [1, 2, 'ed', 'rf', true, false, 'uj', 'ik', '9', '10']
for (const element of arrAny10) {
    console.log(element);
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (const element of arrAny10) {
    if (typeof element === "boolean") {
        console.log(element);
    }
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const element of arrAny10) {
    if (typeof element === 'number') {
        console.log(element);
    }
}


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const element of arrAny10) {
    if (typeof element === "string") {
        console.log(element);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arrEmpty10 = []
for (let i = 0; i < 10; i++) {
    if (i < 5) {
        arrEmpty10[i] = i;
    } else {
        arrEmpty10[i] = `${i}`
    }
}
for (const arrEmpty10Element of arrEmpty10) {
    console.log(arrEmpty10Element);
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(`<p>${i}</p>`)
}
document.write(`<p>========</p>`)


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i)
    document.write(`<p>${i}</p>`)
}
document.write(`<p>========</p>`)


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i)
    document.write(`<p>${i}</p>`)
}
document.write(`<p>========</p>`)


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (!(i % 2)) {
        console.log(i)
        document.write(`<p>${i}</p>`)
    }
}
document.write(`<p>========</p>`)


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2) {
        console.log(i)
        document.write(`<p>${i}</p>`)
    }
}
document.write(`<p>========</p>`)
