"use strict";

/*
1. У нас є масив products. Скільки в ньому елементів - не знаємо, 
але можемо прочитати з products.length.
Напишіть код для отримання останнього елемента products.
 */

console.log("Task 1:");
let products = [];
products = ["Coca-Cola", "Fanta", "Sprite"];
console.log(products[products.length - 1]);
console.log(products.slice(-1));
console.log(products.pop());



/*
2. Створіть масив styles з елементами «Джаз», «Блюз».
Додайте в кінець значення «Рок-н-Ролл»
Замініть передостаннє значення на «Класика». 
Код заміни передостаннього значення має працювати для масивів будь-якої довжини.
Видаліть перше значення масиву і виведіть його на консоль.
Додайте в початок значення «Реп» і «Реггі».
 */
console.log();
console.log("Task 2:");
let styles = [];
styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-Ролл");
console.log(styles);
styles.splice(-2, 1, "Класика");
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift("Реп", "Реггі");
console.log(styles);

console.log(styles.length);
/*
3. Створіть функцію find(arr, value), 
яка шукає в масиві arr значення value і повертає його номер, 
якщо знайдено, або -1, якщо не знайдено.
 */
console.log();
console.log("Task 3:");

function find(arr, value) {
	let result = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == value) {
			result = i;
		}

	}
	return result;
}
const rocknRoll = "Рок-н-Ролл";
console.log(rocknRoll + " id = " + find(styles, rocknRoll));

/*
4.Створіть функцію filterRange(array, a, b), 
яка приймає масив чисел array і повертає новий масив, 
який містить тільки числа з array в діапазоні від a до b.
 */
console.log();
console.log("Task 4:");

function filterRange(array, a, b) {
	let resultArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] >= a && array[i] <= b) {
			resultArray.push(array[i]);
			//console.log(array[i]);
		}
	}
	return resultArray;
}

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterRange(numArray, 3, 7));

/*
5. Напишіть функцію camelize(str), 
яка перетворює такі рядки «my-short-string» в «myShortString». 
Тобто, дефіси видаляються, а всі слова після них отримують велику літеру. 
 */
console.log();
console.log("Task 5:");

function camelize(str) {
	let tmpArray = [];
	tmpArray = str.split("-");
	let tmpStr = "";
	for (let i = 0; i < tmpArray.length; i++) {
		if (i == 0) {
			tmpStr += tmpArray[i].slice(0);
		}
		else {
			tmpStr += tmpArray[i].slice(0, 1).toUpperCase()
										+ tmpArray[i].slice(1);
		}
	}
	return tmpStr;
}

console.log(camelize("my-short-string"));










