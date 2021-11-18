"use strict";

function hideDivIDText() {
	text.classList.add("hide");
}

selfHide.onclick = function() {
	this.classList.add("hide");
}

menuTitle.onclick = function() {
	if (menuSections.classList.contains("hide")) {
		menuSections.classList.remove("hide");
	} else {
		menuSections.classList.add("hide");
	}
}