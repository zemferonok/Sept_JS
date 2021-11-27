// - Дано натуральное число n. Выведите все числа от 1 до n.
// Натурáльные чи́сла (от лат. naturalis «естественный») — числа, возникающие естественным образом при счёте (1, 2, 3, 4, 5, 6, 7 и так далее).
let logNumToN = (num) => {
    for (let i = 1; i < num; i++) {
        console.log(i);
    }
};

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let logNumFromAtoB = (a, b) => {
    if (a === b) console.log('Enter another Numbers!');
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    }
    if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
};

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let foo = (arr, i) => {
    if (i < arr.length - 1) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        return arr;
    } else {
        console.log('Out of range.')
        return 'ERROR';
    }
}

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let sortArrByZerro = (arr) => {
    let newArr = [];
    let countOfZero = 0;
    for (const arrElement of arr) {
        if (arrElement) {
            newArr[newArr.length] = arrElement;
        } else {
            countOfZero++;
        }
    }
    for (let i = 0; i < countOfZero; i++) {
            newArr[newArr.length] = 0;
    }
    return newArr;
}