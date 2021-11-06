"use strict"
/*
1). Створіть порожній об'єкт user.
Додайте властивість name зі значенням ПИЛИП.
Додайте властивість surname зі значенням ШЕВЧЕНКО.
Поміняйте значення name на СЕРГІЙ.
Видаліть властивість name з об'єкта.
*/
console.log()
console.log("Task 1:")
var user = {};
user.name = "ПИЛИП";
user.surname = "ШЕВЧЕНКО";
console.log(user);
user.name = "СЕРГІЙ";
console.log(user);
delete user.name;
console.log(user);

/*
2). Створіть об'єкт employeeSalaries із зарплатами працівників. 
Напишіть код, який виведе суму всіх зарплат працівників . 
Якщо об'єкт порожній, то результат повинен бути 0.
*/
console.log()
console.log("Task 2:")
var employeeSalaries = {
	emp01Salary: 5500,
	emp02Salary: 3500,
	emp03Salary: 7700,
	emp04Salary: 6600,
	emp05Salary: 4400
};
var employeeSalaries2 = {};

function calcEmployeeSalaries(empSal) {
	var sum = 0;
	for (var key in empSal) {
		sum += empSal[key];
	}
	return sum;
}

console.log("Sum = " + calcEmployeeSalaries(employeeSalaries));
console.log("Sum = " + calcEmployeeSalaries(employeeSalaries2));

/*
3). Напишіть функцію, яка прийматиме два числа і тип операції над ними 
(множення ділення, додавання віднімання). 
Передбачити відловлювання exceptions за умови не коретних вхідних даних.
 */
console.log()
console.log("Task 3:")
function calc(x, y, operation) {
	try {
		if (!isNaN(x) && !isNaN(y)) {
			switch (operation) {
				case "+": {
					return x + y;
				}
				case "-": {
					return x - y;
				}
				case "*": {
					return x * y;
				}
				case "/": {
					return x / y;
				}
				default: {
					throw new Error("Incorrect operation");
				}
			}
		} else {
			throw new Error("Incorrect argument");
		}
	}
	catch (error) {
		console.log(error);
	}
}

console.log(calc(12, 5, "+"));
console.log(calc(12, 5, "-"));
console.log(calc(12, 5, "*"));
console.log(calc(12, 5, "/"));
//console.log(calc(12,5,1));
//console.log(calc("test",5,"/"));












