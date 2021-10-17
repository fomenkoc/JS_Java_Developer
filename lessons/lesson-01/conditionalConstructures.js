'use strict'

//1. if clause
let currentYear = 2018;

if (currentYear == 2018) {
	console.log("You are rihgt current year is 2018");
}

currentYear = 2019;

if (currentYear == 2018) {
	console.log("You are rihgt current year is 2018");
} else {
	console.log("Wellcome to the future");
}

currentYear = 2020;

if (currentYear < 2020) {
	console.log("You are rihgt current year is 2018");
} else if (currentYear > 2020) {
	console.log("Wellcome to the future");
} else {
	console.log('Yeah, current year is 2020');
}

//2. ternary operator
let age = 19;
let accessToAlcohol = age >= 21 ? true : false;
console.log('access to alcohol= '+accessToAlcohol);





