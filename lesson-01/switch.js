'use strict'

let a = 4;

switch (a) {
	case 3: {
		console.log(3 + ' Match');
		break;
	}
	case 4: {
		console.log(4 + ' Match');
		break;
	}
	case 5: {
		console.log(5 + ' Match');
		break;
	}
	default: {
		console.log('default');
	}
}

a = 3;

switch (a) {
	case 3:
	case 4: {
		console.log(3 + '-4 Match');
		break;
	}
	case 5: {
		console.log(5 + ' Match');
		break;
	}
	default: {
		console.log('default');
	}
}