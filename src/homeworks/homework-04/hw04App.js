"use strict";
/*
Створити масив чисел де буде не менше 20 значень. 
Серед них повиннні бути як позитивні так і негативні значення.
*/
let array = [];
array.push(15, 67, -43, 55, -34, -2, 0, 11, -7, 87, -52, 42, 33, -99, 64, -32, 
			128, -256, 512, -1, 17, 22, -13, 4, -15, 77, -89, 36, 159, -951, 5);

/*
1. Відсортувати даний масив
*/
function myComparator(a, b){
	return a - b;
}
console.log("Task 1:");
/*
а). від найменшого до найбільшого
*/
array.sort(myComparator);
console.log(array);
/*
б). від найбільшого до найменшого
*/
array.sort(myComparator).reverse();
console.log(array);
console.log();
/*
2. відфільтрувати лише позитивні (із нулем )та лише негативні в окремі масиви.
*/
let positiveArray = [];
let negativeArray = [];

function filterPositive(number){
	return number >= 0;
}

function filterNegative(number){
	return number < 0;
}

positiveArray = array.filter(filterPositive);
negativeArray = array.filter(filterNegative);

console.log("Task 2:");
console.log(positiveArray);
console.log(negativeArray);
console.log();

/*
3) Створити масив із 10 об'єктів Student {
yearOfStuding: <some data> ,
facultyName: <some data>
}
*/
let students = [];

students.push({yearOfStuding: 2010, facultyName: "Information technology"},
				{yearOfStuding: 2011, facultyName: "Economics"},
				{yearOfStuding: 2012, facultyName: "Political Science"},
				{yearOfStuding: 2013, facultyName: "Chemical Engineering"},
				{yearOfStuding: 2014, facultyName: "Mechanical Engineering"},
				{yearOfStuding: 2015, facultyName: "Biology"},
				{yearOfStuding: 2016, facultyName: "Physics"},
				{yearOfStuding: 2017, facultyName: "Chemistry"},
				{yearOfStuding: 2018, facultyName: "Mathematics"},
				{yearOfStuding: 2019, facultyName: "Mineralogy"}
				);

/*
а) створити окремий масив який матиме лише facultyName об'єктів
*/
console.log("Task 3:");
let faculties = [];

function getFacultyName(student){
	return student.facultyName;
}

faculties.push(students.map(getFacultyName));

console.log(faculties);
console.log;

/*
б) порахувати сумарне значення yearOfStuding для всіх об'єктів 
*/

function getSumYearOfStuding(sumYears, student){
	return sumYears + student.yearOfStuding;
}

let sumYears = 0;
sumYears = students.reduce(getSumYearOfStuding, 0);

console.log(sumYears);










