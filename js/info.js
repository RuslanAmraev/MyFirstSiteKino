function ShowInfo(action, id1, id2) {
	if (action == 'show') {
		document.getElementById(id1).style.display = 'block';
		document.getElementById(id2).style.display = 'block';
		setTimeout(function() {
		document.getElementById(id1).style.transition = '0.7s';
		document.getElementById(id2).style.transition = '0.7s';
		document.getElementById(id1).style.opacity = 1;
		document.getElementById(id2).style.opacity = 1;
	}, 200);
	}else{
		document.getElementById(id1).style.opacity = 0;
		document.getElementById(id2).style.opacity = 0;
		setTimeout(function() {
		document.getElementById(id1).style.display = 'none';
		document.getElementById(id2).style.display = 'none';
		document.getElementById(id1).style.transition = '0s';
		document.getElementById(id2).style.transition = '0s';
	}, 600);
	}
}