// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];
for (let i = 1; i <= 10; i++) {
    users.push(new User(i, `Name${i}`, `SurName${i}`, `NameSurname${i}@mail.ru`, i*11111));
}
console.log(users);
console.log('---------');


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(user => !(user.id % 2)));
console.log('---------');


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users.sort( (a,b) => b.id - a.id)  // UpToDown
console.log(users);     //Почему не выводит результат сразу, а только после следующей сортировки кода?
users.sort( (a,b) => a.id - b.id);  // DownToUp
console.log(users);
console.log('---------');


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = this.name + this.surname + email;
        this.phone = phone;
        this.order = order;
    }
}


// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];   // Можно ли всё это заполнить как-то компактнее, читабельнее и проще?
clients.push(new Client(1, 'Vova', 'Kokos', '@mail.ru', 2342334, ['a', 'b']));
clients.push(new Client(2, 'Gogi', 'Abrikos', '@mail.ru', 2345235, ['a', 'v', 'b']));
clients.push(new Client(3, 'Mila', 'Nasos', '@mail.ru', 234564, ['a', 'b', 's', 'd']));
clients.push(new Client(4, 'Jorik', 'Pisos', '@mail.ru', 74567, ['a', 'b']));
clients.push(new Client(5, 'Lombi', 'Matros', '@mail.ru', 64567, ['a', 'b', 's']));
clients.push(new Client(6, 'Pipa', 'Gazos', '@mail.ru', 75634, ['a', 'b'], 'd', 'f'));
clients.push(new Client(7, 'Mina', 'Petros', '@mail.ru', 23456334, ['a', 'b', 'f', 'f', 'd']));
clients.push(new Client(8, 'Lola', 'Frigos', '@mail.ru', 7652334, ['a', 'b']));
clients.push(new Client(9, 'Gynter', 'Zasos', '@mail.ru', 764542334, ['a', 'b', 'r']));
clients.push(new Client(10, 'Lolita', 'Perdos', '@mail.ru', 37232334, ['a', 'b', 'd', 'h']));


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort( (a, b) => a.order.length - b.order.length);
console.log(clients);