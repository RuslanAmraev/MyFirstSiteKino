function sort(a) {
	if (a == 'lines') {
	for (i = 0; (document.getElementsByClassName('block-line')[i] != undefined); i++) {
	document.getElementsByClassName('block-line')[i].style.display = "flex";
}

	for (i = 0; (document.getElementsByClassName('block')[i] != undefined); i++) {
	document.getElementsByClassName('block')[i].style.display = "none";
}
	}else{
		for (i = 0; (document.getElementsByClassName('block-line')[i] != undefined); i++) {
	document.getElementsByClassName('block-line')[i].style.display = "none";
}
		for (i = 0; (document.getElementsByClassName('block')[i] != undefined); i++) {
		document.getElementsByClassName('block')[i].style.display = "block";
}
	}
}