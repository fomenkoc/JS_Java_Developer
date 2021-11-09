function alert(array) {
	console.log(array);
	console.log('-----------------------------------');
}

var arrayOfPersons = [];
var person_1 = {
	name : 'Petro',
	age : 20
};
var person_2 = {
	name : 'Andrew',
	age : 30
};
var person_3 = {
	name : 'Vitalii',
	age : 40
};

arrayOfPersons.push(person_1, person_2, person_3);
alert(arrayOfPersons);

// 1. forEach
function customFunctionForLoop(item, i, array) {
	console.log(i + '::' + item.name + '--> arrayName: ' + array);
}

arrayOfPersons.forEach(customFunctionForLoop);
alert();

// 2. filter()
function filterByAge(obj) {
	return obj.age > 30;
}

var filteredArray = arrayOfPersons.filter(filterByAge);
alert(filteredArray);

// 3. map()

function getName(obj) {
	return obj.name;
}

var names = arrayOfPersons.map(getName);
alert(names);

// 4 every/some
alert('every() --->' + arrayOfPersons.every(filterByAge));
alert('some()  --->' + arrayOfPersons.some(filterByAge));

// 5. reduce()
function sumPersonAges(sumOfAges, currentObj) {
	return sumOfAges + currentObj.age;
}

var ageSum = arrayOfPersons.reduce(sumPersonAges, 0);
alert(ageSum);
