var ball = document.querySelector(".discoball");
var classAll = ["here","goes", "our", "awesome", "disco", "ball"];

 
function goDisco() {

ball.classList.add(classAll[0,1,2,3,4,5]);

}

setInterval(goDisco,300);