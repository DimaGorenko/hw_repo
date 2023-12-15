// створити масив з цифрами [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9];

const arr = [1, 1, 1, 2, 3, 4, 5, 5, 66, 6, 6, 7, 77, 8, 8, 8888, 9];

// перебрати масив i до кожного числа додати 5, i вивести результат в консоль

for (let i = 0; i < arr.length; i++) {
  arr[i] += 5;
}

console.log(arr);

// створити на базі масиву Set унікальних значень

const set = new Set(arr);

// ітерувати через сет i кожне число збільшити на 2, далі вивести суму всіх елементів

let sum = 0;
set.forEach((num) => {
  sum += num + 2;
});

console.log(sum);

// створити мапу з літерами алфівіту, i значеннями з сету {"a" : 1, "b" : 2 ....}

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const alphabetMap = new Map(
  [...alphabet]
    .map((letter, index) => [letter, Array.from(set)[index]])
    .filter(([_, value]) => value !== undefined)
);

console.log(alphabetMap);

// зробити конкатенацію ключів з мапи.

const concatenatedKeys = [...alphabetMap.keys()].join("");

console.log(concatenatedKeys);
