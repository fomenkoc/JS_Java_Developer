"use strict";

function disableButtons() {
	$("#sendByGet").prop("disabled", true);
	$("#sendByPost").prop("disabled", true);
}

function enableButtons() {
	$("#sendByGet").prop("disabled", false);
	$("#sendByPost").prop("disabled", false);
}

function sendDataByGet() {
	$.ajax({
		type: "GET",
		contentType: "application/json",
		url: "http://localhost:3000/userGet?userName=" + $("#firstName").val()
			+ " " + $("#lastName").val()
			+ "&userAge=" + $("#age").val()
			+ "&userAddress=" + $("#address").val(),
		success: function(data) {
			console.log('success');
			console.log(JSON.stringify(data));
		}
	});

}

function sendDataByPost() {
	$.ajax({
		type: "POST",
		data: JSON.stringify({
			userName: $("#firstName").val() + " " + $("#lastName").val(),
			userAge: $("#age").val(),
			userAddress: $("#address").val()
		}),
		contentType: "application/json",
		url: "http://localhost:3000/userPost",
		success: function(data) {
			console.log('success');
			console.log(JSON.stringify(data));
		}
	})
}



$("#age").on("blur", function() {
	if (age.value < 1 || age.value > 100) {
		this.classList.add("error");
		disableButtons();
	} else {
		this.classList.remove("error");
		enableButtons();
	}

})


$("#sendByGet").on("click", sendDataByGet);
$("#sendByPost").on("click", sendDataByPost);

