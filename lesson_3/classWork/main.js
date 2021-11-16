// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while
let i = 0;
while (i < arr.length) {
    console.log(`arr[${i}] is ${arr[i]}`)
    i++;
}
console.log('====');

//     2. перебрати його циклом for
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + 1);
}
console.log('====');

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < arr.length) {
    if (i % 2) {
        console.log(`arr[${i}] is ${arr[i]}`)
    }
    i++;
}
console.log('====');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
        console.log(`arr[${i}] is ${arr[i]}`)
    }
}
console.log('====');

// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < arr.length) {
    if (i !== 0 && !(i % 2)) {
        console.log(`arr[${i}] is ${arr[i]}`)
    }
    i++;
}
console.log('====');

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && !(i % 2)) {
        console.log(`arr[${i}] is ${arr[i]}`)
    }
}
console.log('====');

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 3)) {
        arr[i] = 'okten'
    }
    console.log(arr[i]);
}
console.log('====');

// 8. вивести масив в зворотньому порядку.
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(`arr[${i}] is ${arr[i]}`)
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
/////////////////////////////////////////////////////////////////////////////////
console.log('////////////////////////////////////')
/////////////////////////////////////////////////////////////////////////////////
//     1. перебрати його циклом while, але в зворотньому циклі (с заду на перед)
i = arr.length - 1;
while (i >= 0) {
    console.log(`arr[${i}] is ${arr[i]}`)
    i--;
}
console.log('====');

//     2. перебрати його циклом for, але в зворотньому циклі (с заду на перед)
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i] - 1);
}
console.log('====');

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом, але в зворотньому циклі (с заду на перед)
i = arr.length - 1;
while (i >= 0) {
    if (i % 2) {
        console.log(`arr[${i}] is ${arr[i]}`)
    }
    i--;
}
console.log('====');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом, але в зворотньому циклі (с заду на перед)
for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2) {
        console.log(`arr[${i}] is ${arr[i]}`)
    }
}
console.log('====');

// 5. перебрати циклом while та вивести  числа тільки парні  значення, але в зворотньому циклі (с заду на перед)
i = arr.length - 1;
while (i >= 0) {
    if (i !== 0 && !(i % 2)) {
        console.log(`arr[${i}] is ${arr[i]}`)
    }
    i--;
}
console.log('====');

// 6. перебрати циклом for та вивести  числа тільки парні  значення, але в зворотньому циклі (с заду на перед)
for (let i = arr.length - 1; i >= 0; i--) {
    if (i !== 0 && !(i % 2)) {
        console.log(`arr[${i}] is ${arr[i]}`)
    }
}
console.log('====');

// 7. замінити кожне число кратне 3 на слово "okten", але в зворотньому циклі (с заду на перед)
for (let i = arr.length - 1; i >= 0; i--) {
    if ((arr[i] === 'okten')) {
        arr[i] = 3
    }
    console.log(arr[i]);
}
console.log('====');