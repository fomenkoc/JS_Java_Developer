"use strict";

function disableButtons() {
	sendByGet.disabled = true;
	sendByPost.disabled = true;
}

function enableButtons() {
	sendByGet.disabled = false;
	sendByPost.disabled = false;
}

function sendDataByGet() {
	let userData = {
		lName: document.getElementById("lastName").value,
		fName: document.getElementById("firstName").value,
		age: document.getElementById("age").value,
		address: document.getElementById("address").value
	}

	let xhr = new XMLHttpRequest();
	xhr.open("GET", "/formGet?lName=" + userData.lName
		+ "&fName=" + userData.fName
		+ "&age=" + userData.age
		+ "&address=" + userData.address);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send();
	
	logToConsole(userData, "GET");

}

function sendDataByPost() {
	let userData = {
		lName: document.getElementById("lastName").value,
		fName: document.getElementById("firstName").value,
		age: document.getElementById("age").value,
		address: document.getElementById("address").value
	}

	let xhr = new XMLHttpRequest();
	xhr.open("POST", "/formPost");
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(userData));

	logToConsole(userData, "POST");
}

function logToConsole(data, type){
	let validated = ".ValidatedBy" + type;
	data.fName += validated;
	data.lName += validated;
	data.age += validated;
	data.address += validated;
	
	console.log(data);
}

age.onblur = function() {
	if (age.value < 1 || age.value > 100) {
		this.classList.add("error");
		disableButtons();
	} else {
		this.classList.remove("error");
		enableButtons();
	}

}

sendByGet.onclick = sendDataByGet;
sendByPost.onclick = sendDataByPost;
