"use strict";

function makeBuffer() {
	let arrayBuffer = [];

	return {
		add: function(newElement) {
			arrayBuffer.push(newElement);
		},
		buffer: function() {
			//return arrayBuffer;
			return arrayBuffer.join(" ");
		},
		clear: function(){
			arrayBuffer = [];
		}
	};
}


let buffer = makeBuffer();


buffer.add("JavaScript");
buffer.add("Вчити");
buffer.add("Потрібно");
console.log(buffer.buffer());
buffer.clear();
console.log(buffer.buffer());
buffer.add(1);
buffer.add(2);
buffer.add(3);
console.log(buffer.buffer());