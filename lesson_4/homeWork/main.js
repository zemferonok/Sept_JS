// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareRectangle(a, b) {
    return (a*b);
}
console.log(squareRectangle(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function squareCircle(r) {
    return Math.PI*Math.pow(r, 2);
}
console.log(squareCircle(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareCilinder(r, h) {
    return 2*Math.PI*r*h;
}
console.log(squareCilinder(10, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1,2,3,4,5,6,7,9];
function elementOfArr (array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
    console.log('----')
}
elementOfArr(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function pText(someText) {
    document.write(`<p>${someText}</p>`);
}
pText('Hello Man');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulText(someText) {
    document.write(`<ul>`);
        document.write(`<li>${someText}</li>`);
        document.write(`<li>${someText}</li>`);
        document.write(`<li>${someText}</li>`);
    document.write(`</ul>`);
}
ulText('Some Li text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulTextCount(someText, countOfLi) {
    document.write(`<ul>`);
    for (let i = 0; i < countOfLi; i++) {
        document.write(`<li>${someText}</li>`);
    }
    document.write(`</ul>`);
}
ulTextCount('Some Li text with Count', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrNumStrBool = [true, false, 1,2,3, 'bad girl', 'good boy'];
function arrToOl(arr) {
    document.write(`<ol>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ol>`);
}
arrToOl(arrNumStrBool);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrOfObj = [
    {id: 1, name: 'Sofa', age: 26, status: true},
    {id: 2, name: 'Leila', age: 22, status: true},
    {id: 3, name: 'Olesia', age: 24, status: true},
];
function printObject(arrOfObj) {
    for (const obj of arrOfObj) {
        document.write(`<div class="girl">`);
        for (const objKey in obj) {
            document.write(`<p>${objKey}: ${obj[objKey]}</p>`)
        }
        document.write(`</div>`);
    }
}
printObject(arrOfObj);