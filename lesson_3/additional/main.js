// 1. Створити пустий масив та :
let arrEmpty = [];

//     a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 0, b = 2; i < 50; i++, b += 2) {
    arrEmpty[i] = b;
}
console.log('pair', arrEmpty);

//     b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; i < 50; i++) {
    arrEmpty[i] = i * 2 + 1;
}
console.log('not pair', arrEmpty);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
arrEmpty.length = 0;
for (let i = 0; i < 20; i++) {
    arrEmpty[i] = Math.floor(Math.random() * 101);
}
console.log('random', arrEmpty);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arrEmpty[i] = Math.floor(8 + Math.random() * (732 - 7));  //Так корректно? есть другой способ задать диапазон?
}
console.log('random 8-732', arrEmpty);

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < arrEmpty.length; i += 3) {
    console.log(`arrEmp[${i}] is ${arrEmpty[i]}`);
}
console.log('=====')

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < arrEmpty.length; i += 3) {
    if (!(arrEmpty[i] % 2)) {
        console.log(`arrEmp[${i}] is ${arrEmpty[i]}`);
    }
}
console.log('=====')

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arrNew = [];
for (let i = 0, y = 0; i < arrEmpty.length; i += 3) {   //Это правильно сделано, как сделать иначе?
    if (!(arrEmpty[i] % 2)) {
        arrNew[y] = arrEmpty[i];
        y++;
    }
}
console.log('arrNew pair', arrNew)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 0; i < arrEmpty.length; i++) {
    if (!(arrEmpty[i] % 2) && i !== 0) {
        console.log(arrEmpty[i - 1]);
    }
}
console.log('====')

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arrChek = [100, 250, 50, 168, 120, 345, 188];
let middleChek = 0;
for (const element of arrChek) {
    middleChek += element / arrChek.length;
}
console.log('middle Chek is ', middleChek);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arrRand = [];
for (let i = 0; i < 10; i++) {
    arrRand[i] = Math.floor(Math.random() * 11);
}
let arrInother = []
for (let i = 0; i < arrRand.length; i++) {
    arrInother[i] = arrRand[i] * 5;
}
console.log('arrRand', arrRand);
console.log('arrRand * 5', arrInother);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arrNumStrBool = [true, false, 1, 2, 3, 'cat', 'dog', {sex: 'female', name: 'LiR', age: 22}];
arrInother.length = 0;
for (let elemetn of arrNumStrBool) {
    if (typeof elemetn == 'number') {
        arrInother.push(elemetn)
    }
}
console.log('arrNumStrBool ', arrNumStrBool);
console.log('arrInother just Numb ', arrInother);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
let usersWithCities = [];
for (let user of usersWithId) {
    let newObject = {};
    for (let city of citiesWithId) {
        if (city.user_id === user.id) {
            for (let key in user) {
                newObject[key] = user[key];
            }
            // newObject = user;    //Передает только ссылку, а не копирует информацию.
            newObject.address = city;
            usersWithCities.push(newObject);
        }
    }
}
console.log('userWithID', usersWithId);
console.log('citiesWithId', citiesWithId);
console.log('usersWithCities', usersWithCities);

//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
arrEmpty.length = 10;
for (const arrEmptyElement of arrEmpty) {
    if (!(arrEmptyElement%2)) {
        console.log(arrEmptyElement)
    }
}
console.log('====')

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
arrInother.length = 0;
for (const arrEmptyElement of arrEmpty) {
    arrInother.push(arrEmptyElement);
}
console.log('arr', arrEmpty);
console.log('arr Copy', arrInother);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arrChar = [ 'a', 'b', 'c'];
let word = '';
for (let i = 0; i < arrChar.length; i++) {
    word = word + arrChar[i];
}
console.log('for Word is ', word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let i = 0;
word = '';
while (i < arrChar.length) {
    word += arrChar[i] + '(While) ';
    i++;
}
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
word = '';
for (let char of arrChar) {
    word = word + char + '(ForOf) ';
}
console.log('forOf Word is ', word);


let arr1 = [
    {name: 'Luna', age: 22, status: true},
    {name: 'Lila', age: 33, status: true},
    {name: 'Lana', age: 44, status: false},
];
let arr2 = [];
arr2.push(arr1)
console.log(arr2)
console.log(arr1);