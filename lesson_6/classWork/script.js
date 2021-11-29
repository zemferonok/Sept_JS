// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
let normalizer = (str) => {
    let newStr = str
        .replaceAll('_', ' ')
        .replaceAll('.', ' ')
        .replaceAll('-', ' ')
        .split(' ')
        .filter(item => item).join(' ');
    return newStr;
}
console.log(normalizer(n1));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomArr = (count) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
}

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arr = randomArr(10).sort((a, b) => a - b);
console.log(arr)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let arrFilter = arr.filter(item => {
    if (!(item % 2)) {
        return item
    }
});

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arrMap = arr.map(item => '' + item);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let nums = [11, 21, 3];
let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b);
    }
    if (direction === 'descending') {
        return arr.sort((a, b) => b - a);
    }
    console.log('Fail direction');
    return 0;
}

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
coursesAndDurationArray = coursesAndDurationArray.filter( item => item.monthDuration > 5)