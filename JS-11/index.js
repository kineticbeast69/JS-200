const xPos = document.querySelector(".mouse-xnumber");
const yPos = document.querySelector(".mouse-ynumber");
 

window.addEventListener("mouseover",(event)=>{
let xValue = event.clientX;
let yValue = event.clientY;
xPos.innerText=xValue;
yPos.innerText = yValue;
})