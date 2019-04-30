 var actions = 1;
 function ShowInput(action){
 	if (action == 'show') {
 		actions=actions + 1;
 		if (actions % 2 == 0) {
 			document.getElementById('find').className="input-active"
 		}else{
 			document.getElementById('find').className="input-non-active"
 		}
 	}
 }
