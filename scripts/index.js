var ball = document.querySelector(".discoball");
var classAll = ["here","goes", "our", "awesome", "disco", "ball"];
var i=0;
 
function goDisco() {
	ball.setAttribute("class", "discoball " + classAll[i]);
	i++;
	console.log(classAll[i]);
	if (i>=5){
		i=0;
	}


}

setInterval(goDisco,300);