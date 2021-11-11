var a = 10;

(function() {
	var a = 12;
	function showMessege() {
		console.log(a);
	}
	showMessege();
})();

console.log(a);

console.log('------------------');

var t = (function() {
	var a = 17;
	return {
		showMessege : function() {
			console.log(a);
		}
	}
})();


t.showMessege();
