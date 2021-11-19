// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minOfABC(a, b, c) {
    if (a < b && a < c) {
        console.log(`${a},${b},${c} Min is ` + a);
    } else if (b < a && b < c) {
        console.log(`${a},${b},${c} Min is ` + b);
    } else if (c < a && c < b) {
        console.log(`${a},${b},${c} Min is ` + c);
    } else {
        alert('Вводимые числа должны быть разными!');
    }
}

minOfABC(7, 100, 69);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxOfABC(a, b, c) {
    if (a > b && a > c) {
        console.log(`${a},${b},${c} Max is ` + a);
    } else if (b > a && b > c) {
        console.log(`${a},${b},${c} Max is ` + b);
    } else if (c > a && c > b) {
        console.log(`${a},${b},${c} Max is ` + c);
    } else {
        alert('Вводимые числа должны быть разными!');
    }
}

maxOfABC(7, 100, 69);

// - створити функцію яка повертає найбільше число з масиву
arrNum = [1, 2, 3, 4, 5, 7, 8, 9];

function maxNumInArr(arr) {
    let maxNum = arr[0];
    for (const arrElement of arr) {
        if (arrElement > maxNum) {
            maxNum = arrElement;
        }
    }
    return maxNum
}

console.log(maxNumInArr(arrNum));

// - створити функцію яка повертає найменьше число з масиву
function minNumInArr(arr) {
    let minNum = arr[0];
    for (const arrElement of arr) {
        if (arrElement < minNum) {
            minNum = arrElement;
        }
    }
    return minNum
}

console.log(minNumInArr(arrNum));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumArr(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

console.log(sumArr(arrNum));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function middleArr(arr) {
    return sumArr(arr) / arr.length;
}

console.log(middleArr(arrNum));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minOutMaxLog() {
    let min = arguments[0];
    let max = arguments[0];
    for (const argument of arguments) {
        if (argument > max) {
            max = argument;
        }
        if (argument < min) {
            console.log('min>>' + argument);
            min = argument;
        }
    }
    console.log(max);
    return min;
}

console.log(minOutMaxLog(3, 5, 69, -4, 0, -10));

// - створити функцію яка заповнює масив рандомними числами
let arrRand = [];

function fullArrRand(arr) {
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * 11);
    }
}

fullArrRand(arrRand);
console.log(arrRand);

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randMinMax() {
    let rand = Math.floor(Math.random() * 100);
    console.log(rand);
}
randMinMax();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function fullArrRandLimit(arr, limit) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * limit);
    }
}

fullArrRandLimit(arrRand, 6);
console.log(arrRand);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function arrRevers(arr) {
    let newArr = [];
    for (let i = arr.length - 1, y = 0; i >= 0; i--, y++) {
        newArr[y] = arr[i];
    }
    return newArr;
}

console.log(arrRevers(arrRand));
