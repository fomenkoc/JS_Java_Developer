
//2.1 closure
function createCounter(){
	var currentValue = 0;
	
	return  function() {
		return currentValue++;
	}
}

var counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

var counter2  = createCounter();
console.log('------------------');
console.log(counter2())
console.log(counter2())
console.log('------------------');


//2.2 closure return object
function createCounterWithObject(){
	var currentValue = 1;
	
	return {
		getNext: function() {
			return currentValue++;
		},
		setValue: function(value) {
			currentValue = value;
		},
		reset: function() {
			currentValue = 1;
		}
	}
}

var objectCounter = createCounterWithObject();
console.log(objectCounter.getNext());
console.log(objectCounter.getNext());
console.log(objectCounter.getNext());
console.log(objectCounter.getNext());
objectCounter.setValue(-10);
console.log(objectCounter.getNext());
console.log(objectCounter.getNext());
console.log(objectCounter.getNext());
console.log(objectCounter.getNext());
objectCounter.reset();
console.log(objectCounter.getNext());
console.log(objectCounter.getNext());
console.log(objectCounter.getNext());
console.log(objectCounter.getNext());
console.log('------------------');

//2.3 closure return function
function createCounterWithFunction(){
	var currentValue = 1;
	
	function creator(){
		return currentValue++;
	}
	
	
	creator.setValue= function(value) {
		currentValue = value;
	};
	
	creator.reset= function() {
		currentValue = 1;
	}
	
	return creator;
}

var objectCounter = createCounterWithFunction();

console.log(objectCounter());
console.log(objectCounter());
console.log(objectCounter());
console.log(objectCounter());
objectCounter.setValue(-10);
console.log(objectCounter());
console.log(objectCounter());
console.log(objectCounter());
console.log(objectCounter());
objectCounter.reset();
console.log(objectCounter());
console.log(objectCounter());
console.log(objectCounter());
console.log(objectCounter());


























