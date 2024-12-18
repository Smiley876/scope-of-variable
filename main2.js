//global variable
var b=5;

function display(){ //local variable
 var a = 6;
 document.getElementById("o1").innerHTML = a+b
}
document.getElementById("o2").innerHTML = a*b
document.getElementById("o3").innerHTML = a-b