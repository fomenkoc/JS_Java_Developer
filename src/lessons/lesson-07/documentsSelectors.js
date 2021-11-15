function selectByIdElement() {
	console.log(content);
	console.log(window['content-holder']);
}

function changeColorToRed() {
	var contentElement = document.getElementById('content');
	var color = contentElement.style.background;

	switch (color) {
	case 'red':
		contentElement.style.background = 'yellow';
		break;
	case 'yellow':
		contentElement.style.background = 'green';
		break;

	case 'green':
		contentElement.style.background = 'white';
		break;

	case 'white':
		contentElement.style.background = 'red';
		break;

	default:
		contentElement.style.background = 'red';
		break;
	}

}

function selectByTagName() {
	var tableElement = document.getElementById('custom-table');
	var elements = tableElement.getElementsByTagName('input');

	for (var i = 0; i < elements.length; i++) {
		var currentInput = elements[i];
		console.log(currentInput.attributes.value.nodeValue + '--->'
				+ currentInput.checked);
	}
}

function useQuerySelector() {
	var elements = document.querySelectorAll('ul>li:last-child');
	for (var i = 0; i < elements.length; i++) {
		var currentElement = elements[i];
		console.log(currentElement.innerHTML);
		currentElement.innerHTML = '-----';
	}
}

function selectCustomAttributes() {
	var element = document.getElementById('divWithCustomAttributes');
	console.log(element.getAttribute('data-about'));
	console.log(element.getAttribute('data-current-student-name'));
	console.log(element.dataset.about);
	console.log(element.dataset.currentStudentName);
}