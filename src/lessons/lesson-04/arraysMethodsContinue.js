function alert(array) {
	console.log(array);
}

var array = [ 4, 22, 56,22, 8, 12, 37 ];
alert(array);

//1. basic sort
array.sort();
alert(array);

//2. custom sort()
function compareNumbers(number1, number2) {
	return number1 - number2;
}

array.sort(compareNumbers);
alert(array);

//3. reverse()
array.reverse();
alert(array);

//4. concat()
var array2 = [ 1000, 2000, 3000, [999,-888, 777] ];
var concatedArray = array.concat(array2);
alert(concatedArray);

//5. indexOf /lastIndexOf
alert(array.indexOf(22));

alert(array.lastIndexOf(22));

//6. keys()

var person = {
		name: 'Andreas',
		age: 25
}

var keysOfPerson = Object.keys(person);
alert(keysOfPerson);