var person ={};
console.log(person);

person.name = 'Petro';
person.age = 25;
console.log(person);

delete person.age;
console.log(person);


if('name' in person){
	console.log('property name is in person');
}


console.log(person.test);

console.log(person.test == undefined);
console.log(person.name === undefined);

console.log('test' in person);
console.log('name' in person);

console.log(person.name);
console.log(person['name']);

person['test test'] = 'Custom';
//console.log(person.test test);
console.log(person['test test']);


var key = 'test test';
console.log(person[key]);



