// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
console.log('------------------');


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());
console.log('------------------');


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
console.log('------------------');


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
str = str.trim()


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
str = 'Каждый охотник желает знать';
let stringToArray = (string) => string.split(' ');
let arr = stringToArray(str);
document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
console.log(arr);
console.log('------------------');


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
str = 'Каждый охотник желает знать';
let delete_characters = (str, length) => {
    return str.substr(0, length);
}
document.writeln(delete_characters(str, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
str = "HTML JavaScript PHP";
let insert_dash = (str) => {
    return str.toUpperCase().replaceAll(' ', '-');
}
document.writeln(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
str = 'first char is big';
let firstCharToUp = (str) => {
    if (!str[0]) return ;
    return str[0].toUpperCase() + str.slice(1);
}
console.log(firstCharToUp(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
str = 'all first char is big';
let capitalize = (str) => {
    if (str === '') return 'string is empty';
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] === ' ' && str[i] !== ' ') {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    }
    return newStr[0].toUpperCase() + newStr.slice(1);
}
console.log(capitalize('str'));