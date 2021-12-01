// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car1(model, maker, age, maxSpeed, engineValue) {
    this.model = model;
    this.maker = maker;
    this.age = age;
    this.maxSpeed = maxSpeed;
    this.enginValue = engineValue;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log("Car's info:")
        for (let carKey in this) {
            if (typeof this[carKey] != 'function') {
                console.log(`${carKey} - ${this[carKey]}`);
            }
        }
        console.log('----------');
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.age = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car1 = new Car1('a500', 'audi', 2018, 190, 2.5);
car1.addDriver({name: 'lolik', exp: 4, status: true});


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, maker, year, maxSpeed, engineValue) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineValue = engineValue;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log("Car's info:")
        for (let carKey in this) {
            if (typeof this[carKey] != 'function') {
                console.log(`${carKey} - ${this[carKey]}`);
            }
        }
        console.log('----------');
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.age = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car2 = new Car2('Juk', 'wolksWagen', 2005, 160, 1.2);
car2.addDriver('Ivan');


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Girl {
    constructor(name, age, feetSize) {
        this.name = name;
        this.age = age;
        this.feetSize = feetSize;
    }
}

let girls = [];
for (let i = 1; i <= 10; i++) {
    girls.push(new Girl(`Name${i}`, 20 + i, 28 + i));
}

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Boy {
    constructor(name, age, favoriteFeetSize) {
        this.name = name;
        this.age = age;
        this.favoriteFeetSize = favoriteFeetSize;
    }
}

let boy = new Boy('Ivan', 15, 36);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let girl of girls) {
    if (girl.feetSize === boy.favoriteFeetSize) {
        console.log('She must be with this Boy');
        console.log(girl);
    }
}


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
girls.find(girl => girl.feetSize === boy.favoriteFeetSize);