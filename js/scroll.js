
function scrollPage(id) {
	var currentLocation = window.pageYOffset;
	var offsetTop = 60;
	var element = document.getElementById(id);
	var position = findPosition(element);
	var interval; 
	if(currentLocation < position) {
		interval = setInterval(function() {
			if(position == (currentLocation + offsetTop)) {
				clearInterval(interval);
			}
			currentLocation = check(currentLocation, position, offsetTop);
			window.scrollTo(0, currentLocation+700);
		}, 5);
	} else if(currentLocation > position) {
		interval = setInterval(function() {
			if(position >= currentLocation) {
				clearInterval(interval);
			}
			currentLocation -= 20;
			currentLocation = check2(currentLocation, position, offsetTop);
			window.scrollTo(0, currentLocation);
		}, 5);
	}
}

function findPosition(element) {
	console.dir(element);
	if(element.offsetParent) {
		return element.offsetTop;
	}
	return 0;
}

function check(cLocation, position, offsetTop) {
	if(cLocation > position) {
		cLocation = position - offsetTop;
	} else {
		cLocation += 20;
	}
	return cLocation;
}

function check2(cLocation, position, offsetTop) {
	if(cLocation < position) {
		cLocation = position - offsetTop;
	} else {
		cLocation -= 20;
	}
	return cLocation;
}