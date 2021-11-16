"use strict";

function test() {
	console.log("test");
}

function fillListItems() {
	let elements = document.querySelectorAll("li");
	let count = 0;
	for (let i = 0; i < elements.length; i++) {
		elements[i].innerHTML = "List Item #" + (i + 1);
		count = i + 1;
	}

	document.getElementById("TotalQty").innerHTML =
		"List Items quantity = " + count;

}

function markExternalLink() {
	let elements = document.querySelectorAll("a");
	for (let i = 0; i < elements.length; i++) {
		let element = elements[i];
		if ((element.href.includes("http://")
			|| element.href.includes("ftp://"))
			&& !element.href.includes("http://internal.com")) {
			element.className = element.className + " external-red"
		}
	}
}