function show(array) {
	console.log(array);
}

function devide() {
	console.log('-------------------------');
}

var array = [];
show(array);

array = [ 'Apple', 'Orange', 'Cherry' ];

show(array[0]);
show(array[1]);
show(array[2]);

devide();

array[1] = 'Bannana';
show(array);

var variousDataArray = [ true, 'TestData', {
	name : 'John'
} ]
show(variousDataArray);
devide();

// Methods
// 1. pop()
show('POP()');
show(array);
show(array.pop());
show(array);
devide();

// 2.push()
show('PUSH()');
show(array);
array.push('PineApple');
show(array);
devide();


//3.shift()
show('SHIFT()');
show(array);
show(array.shift());
show(array);
devide();

//4.unshift()
show('UNSHIFT()');
show(array);
array.unshift('Bluberry');
show(array);
devide();


//5. added multiple elements
show(array);
array.push('Apple', 'Orange', 'Cherry');
show(array);
array.unshift('Apple', 'Orange');
show(array);
devide();

//6. set values with wholes
array[12]='very good FRUIT';
show(array)
devide();

//7. create array with constructor
var customArray = new Array('person-1','person-2', 'person-3');
show(customArray);
devide();

customArray = new Array(2);
show(customArray);
show(customArray.length);
devide();
























