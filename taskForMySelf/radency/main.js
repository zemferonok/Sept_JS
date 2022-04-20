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

const choseOptimalDistance = (maxDistance, citiesCount, distanceList) => {
    if (distanceList.length < citiesCount) return null;
    if (citiesCount < 1) return null;
    if (maxDistance < 0) return null;

    function getAllCombinations(list, k) {
        let k1 = k;
        if(k1 === 1){
            return list.map(x => [x]);
        }
        let variants = [];
        for(let i = 0; i <= (list.length-k1); i++){
            let nextvariants = getAllCombinations(list.slice(i+1), k1-1)
            for(let j = 0; j < nextvariants.length; j++){
                variants.push(nextvariants[j].concat([list[i]]))
            }
        }
        return variants;
    }

    let allVariants = getAllCombinations(distanceList, citiesCount)

    let finDistance = -1;
    for (const variant of allVariants) {
        const variantDistance = variant.reduce((previousVal, currentValue) => previousVal + currentValue, 0);
        if (variantDistance > finDistance && variantDistance <= maxDistance) finDistance = variantDistance;
    }
    if (finDistance >= 0) {
        return finDistance
    }
    return 'Шлях не знайдено';
}
document.write(JSON.stringify(choseOptimalDistance(t, k, ls)))
document.write(JSON.stringify(choseOptimalDistance(65, 4, [1, 2, 3, 4, 5])))





