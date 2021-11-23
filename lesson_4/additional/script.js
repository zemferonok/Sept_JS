// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function logOrSum_Concat() {
    if (arguments.length === 0) {
        console.log('Du gibst mir nichts!');
    } else if (arguments.length === 1) {
        console.log(arguments[0]);
    } else if (arguments.length > 1) {
        let result = null;  // С другими определениями работает не корректно
        for (const argument of arguments) {
            result += argument;
        }
        return result;
    }
}

logOrSum_Concat();
logOrSum_Concat('JopkaJordo');
console.log(logOrSum_Concat(50, 50, '500'));
console.log('====');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
let arrB = [1, 2, 3, 4];
let arrA = [2, 3, 4, 5];

//результат[3, 5, 7, 9]
function sumArray(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr[i] = arr1[i] + arr2[i];
    }
    return newArr;
}

console.log(sumArray(arrA, arrB));
console.log('====');

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
let arrOfObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];

// result = [ name, age, model ]
function keyOfObjInArray(arrOfObj) {
    let arrOfKey = [];
    for (const obj of arrOfObj) {
        for (const key in obj) {
            arrOfKey.push(key);
        }
    }
    return arrOfKey;
}

console.log(keyOfObjInArray(arrOfObj));
console.log('====');

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function itemOfObjInArray(arrOfObj) {
    let arrOfItem = [];
    for (const obj of arrOfObj) {
        for (const key in obj) {
            arrOfItem.push(obj[key]);
        }
    }
    return arrOfItem;
}

console.log(itemOfObjInArray(arrOfObj));
console.log('====');
