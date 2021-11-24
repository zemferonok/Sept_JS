// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка обчислює та повертає площу прямокутника висотою
let squareS = (a, b) => a * b;

// - створити функцію яка обчислює та повертає площу кола
let circleS = (r) => Math.PI * Math.pow(r, 2);

// - створити функцію яка обчислює та повертає площу циліндру
let cilinderS = (r, h) => 2 * (Math.PI * Math.pow(r, 2)) + (2 * Math.PI * r) * h;

// - створити функцію яка приймає масив та виводить кожен його елемент
let logArray = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
};

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let docText = (string) => {
    document.write(`<p>${string}</p>`);
};

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let docUl = (string) => {
    document.write(`<ul>`);
        document.write(`<li>${string}</li>`);
        document.write(`<li>${string}</li>`);
        document.write(`<li>${string}</li>`);
    document.write(`</ul>`);
};

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let docUlXL = (string, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${string}</li>`);
    }
    document.write(`</ul>`);
};

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayToUl = (array) => {
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
};

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let writeArrOfObj = (arr) => {
    for (const obj of arr) {
        document.write(`<p>${obj.id} - ${obj.name}</p>`);
    }
};