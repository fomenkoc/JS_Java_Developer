var menu = {
	width : 300,
	height : 150,
	title : 'custom menu'
}

for ( var key in menu) {
	console.log('Key : ' + key + ' Value: ' + menu[key]);
}

var counter = 0;
for ( var key in menu) {
	counter++;
}
console.log('object menu has ' + counter + ' properties');


var codes= {
		'45':' data 1',
		'3': 'data 2',
		'17': 'data 3'
}


for(var code in codes){
	console.log(code);
}


var codes= {
		'+45':' data 1',
		'+3': 'data 2',
		'+17': 'data 3'
}


for(var code in codes){
	console.log(code);
}



