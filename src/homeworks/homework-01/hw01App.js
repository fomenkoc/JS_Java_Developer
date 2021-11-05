"use strict"

/*
Напишіть код, в якому: оголосіть дві змінні admin та name.
В змінну name запишіть значення 'John'. 
Скопіюйте значення змінної name в змінну admin. 
Виведіть значення змінної admin на консоль.
*/

let name;
let admin;

name = "John";
admin = name;

console.log(admin);
console.log();


/*
Використовуючи конструкцію if-else створіть зміннi login та password. 
Після присвоєння їм одного значень повинні відбуватись дії згідно 
блок-схеми малюнку JS-task-2.PNG (малюнок додано). 
Всі виводи проводити в консоль, а значення повинні бути текстові
*/

let login = "Admin";
let password = "TheMaster";

if (login == "Admin") {
	if (password == "TheMaster") {
		console.log("Welcome!");
	} else if (password == "Cancel") {
		console.log("Canceled.");
	} else {
		console.log("Wrong password");
	}
} else if (login == "Cancel") {
	console.log("Canceled.");
} else {
	console.log("I don't know you");
}
console.log();


/*
Переписати завдання 2 використовуючи конструкцію switch. 
*/

login = "Admin";
password = "TheMaster";

switch (login) {
	case "Admin": {
		switch (password) {
			case "TheMaster":
				console.log("Welcome!");
				break;
			case "Cancel": {
				console.log("Canceled.");
				break;
			}
			default: {
				console.log("Wrong password");
			}
		}
		break;
	}
	case "Cancel": {
		console.log("Canceled.");
		break;
	}
	default: {
		console.log("I don't know you");
	}

}