function showPlayer(id, action) {
	if (action == 'show') {
	document.getElementById(id).style.display = "flex";
}else{
	document.getElementById(id).style.display = "none";
}
}