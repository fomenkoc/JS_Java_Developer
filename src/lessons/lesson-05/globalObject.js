// 1. object window and variables
//should be run in chrome console
var a = 5;
alert(window.a);

window.b = 25;
alert(b);

var i ;
{i = 13;}
alert(i);

t = 17;
{var t;}
alert(t);


var u = 10;
for (var u = 0; u < 15; u++) {
	console.log(u);
}