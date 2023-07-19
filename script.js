function add(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a+b;
    document.getElementById("answer1").innerHTML="Addition is "+c; 
}
function sub(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a-b;
    document.getElementById("answer1").innerHTML="Substraction is "+c; 
}
function mul(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a*b;
    document.getElementById("answer1").innerHTML="Multiplication is "+c; 
}
function div(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a/b;
    document.getElementById("answer1").innerHTML="Division is "+c; 
}
function mod(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a%b;
    document.getElementById("answer1").innerHTML="Mod is "+c; 
}
// function handleRestartGame(){
    
// }
// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
// document.querySelector('.game-restart').addEventListener('click', handleRestartGame);
// function clear(){
//     document.querySelectorAll('.cell').forEach(cell=>cell.innerHTML="");
// }
// document.querySelector('.clear').addEventListener('click',clear);