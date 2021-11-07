function show(array) {
	console.log(array);
}
function devide() {
	console.log('-------------------------');
}

var array = [];
show(array);

//1. splite()
show('SPLITE()');
var fruitString = 'Apple, Orange, Cherry';
array = fruitString.split(',');
show(array);
devide();

//2.join()
show('SPLITE()');
var fruitString = '';
fruitString = array.join('--->>>');
show(fruitString);
devide();

//3.delete from array
show('delete KEYWORD)');
show(array);
delete array[2];
show(array);
devide();

//4. splice()
show('SPLICE()');
array.push('Apple',' Orange','Cherry','Apple',' Orange','Cherry');
show(array);
devide();

array.splice(2,1);
show(array);
devide();

array.splice(3,3,'KIVI','KIVI','KIVI');
show(array);
devide();

array.splice(-1,0,100,100);
show(array);
devide();


//5. slice()
show('SLICE()');

show(array.slice(2,5));
show(array.slice(7));
show(array.slice());