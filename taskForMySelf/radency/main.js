// Завдання до виконання мовою JavaScript
// Ділан і Кейт хочуть подорожувати між кількома містами А, В, С....
// Кейт має на аркуші паперу список відстаней між цими містами. ls = [51, 56, 58, 59, 61].
// Ділан втомився їздити, і він каже Кейт, що не хоче їхати більше t = 174 милі,
// і він відвідає лише 3 міста. Які відстані, а отже, які міста вони оберуть,
// щоб сума відстаней була якомога більшою, щоб догодити Кейт та Ділану?
//
// Приклад:
// Маючи список ls та 3 міста для відвідування,
// вони можуть зробити вибір між: [51,56,58], [51,56,59], [51,56,61],
// [51,58,59], [51, 58,61], [51,59,61], [56,58,59], [56,58,61], [56,59,61], [58,59,61].
//
// Тоді суми відстаней складають: 165, 166, 168, 168, 170, 171, 173, 175, 176, 178.
//
// Найбільшою можливою сумою з урахуванням обмеження в 174 є 173,
// а відстані до 3 відповідних міст - [56, 58, 59].
//
// Функція chooseOptimalDistance приймає параметри:
// t (максимальна сума відстаней, ціле число >= 0),
// k (кількість міст, які потрібно відвідати, k> = 1),
// ls (список відстаней, всі відстані є додатними або нульовими цілими числами,
// і цей список містить принаймні один елемент).
//
// Функція повертає "найкращу" суму, тобто найбільшу можливу суму k відстаней,
// менших або рівних заданій межі t, якщо ця сума існує, або якщо не існує - null.
// Примітка: не змінюйте змінну ls.
//
// Важливо: треба вирішити завдання для будь-якого k, а не тільки 3.
//
// Початковий код
// const chooseOptimalDistance = (t, k, ls) => {
//     // твій код
//     return null;
// }
//
// chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]); //173
// chooseOptimalDistance(163, 3, [50]); // null

const ls = [51, 56, 58, 59, 61];
const k = 3;
const t = 174;

const choseOptimalDistance = (maxDistance, count, distanceList) => {
    if (distanceList.length < count) return null;
    if (count < 1) return null;
    if (maxDistance < 0) return null;


    let allArr = [];
    let tempArr = [];
    for (let x = 0; x < distanceList.length; x++) {
        tempArr[0] = (distanceList[x]);
        for (let y = x + 1; y < distanceList.length; y++) {
            tempArr[1] = (distanceList[y]);
            for (let z = y + 1; z < distanceList.length; z++) {
                tempArr[2] = (distanceList[z]);
                allArr.push(tempArr.slice(0));
                document.write(JSON.stringify(tempArr) + '<br>');
            }
        }
    }

    // How to recursion 51-61

    let finDistance = 0;
    for (const array of allArr) {
        const sum = array.reduce((previousVal, currentValue) => previousVal + currentValue, 0);
        if (sum > finDistance && sum <= maxDistance) finDistance = sum;
    }
    if (finDistance) {
        return finDistance
    }
    return 'ИдиНаХуй';
}
// document.write(JSON.stringify(choseOptimalDistance(t, k, ls)))
document.write(JSON.stringify(choseOptimalDistance(65, 3, [10, 20, 30, 40, 50])))