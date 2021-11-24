// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minOfThree = (a, b, c) => {
    let min = a;
    if (min > b) min = b;
    if (min > c) min = c;
    console.log(min);
};

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxOfThree = (a, b, c) => {
    let max = a;
    if (max < b) max = b;
    if (max < c) max = c;
    console.log(max);
};

// - створити функцію яка повертає найбільше число з масиву
let maxNumInArr = (arrOfNum) => {
    let max = arrOfNum[0];
    for (const arrOfNumElement of arrOfNum) {
        if (max < arrOfNumElement) max = arrOfNumElement;
    }
    return max;
};

// - створити функцію яка повертає найменьше число з масиву
let minNumInArr = (arrOfNum) => {
    let min = arrOfNum[0];
    for (const arrOfNumElement of arrOfNum) {
        if (min > arrOfNumElement) min = arrOfNumElement;
    }
    return min;
};

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumNumInArr = (arrOfNum) => {
    let sum = 0;
    for (const arrOfNumElement of arrOfNum) {
        sum += arrOfNumElement;
    }
    return sum;
};

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let midSumNumInArr = (arrOfNum) => {
    let sum = 0;
    for (const arrOfNumElement of arrOfNum) {
        sum += arrOfNumElement;
    }
    return sum/arrOfNum.length;
};

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let logMaxRetMin = (...numbers) => {
    let min = numbers[0];
    let max = numbers[0];
    for (const number of numbers) {
        if (number > max) max = numbers;
        if (number < min) min = numbers;
    }
    console.log(max);
    return min;
};

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let fullArrByRand = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.round(Math.random()*100);
    }
};

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let fullArrByLimRand = (arr, limit) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.round(Math.random()*limit);
    }
};

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrReverser = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr[newArr.length] = arr[i];
    }
    // arr = newArr;       // Не идет потому, что сцуко ссылка на умирающий объект!
    arr.length = 0;
    for (const newArrElement of newArr) {
        arr[arr.length] = newArrElement;
    }
};

let arr123 = [1,2,3,];
console.log('arr123 is ',arr123);
arrReverser(arr123);
console.log('arr123 is ',arr123);