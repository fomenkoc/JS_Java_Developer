function alert(text) {
	console.log(text);
}

alert('Hello guys !!!');

function custom(text, age, width) {
	alert(text + age + width);
}

custom("1", 2, 3);

var a = 11;
function go(c) {
	var b = 22;
	return a + b + c;
}


console.log(go(100));

var testCustom = function go(c) {
	var b = 22;
	return a + b + c;
};


console.log(testCustom(1000));


