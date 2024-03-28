const score = document.getElementById("score");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const input = document.getElementById("input");
const submit = document.getElementsByTagName("button")[0];

num1 = parseInt(num1.textContent.trim());
num2 = parseInt(num2.textContent.trim());
let count = 0;
submit.addEventListener("click",()=>{
let val = input.value;
val = val.trim();
val = Number(val);
if(input===""){
    alert("Enter Your Number")
}else if(val === num1 * num2){
    count++;
    score.textContent = count;
    num1.textContent = Math.floor(Math.random() * 10);
    num2.textContent = Math.floor(Math.random() * 10)
}else{
    num1.textContent = Math.floor(Math.random() * 10);
    num2.textContent = Math.floor(Math.random() * 10)
}
})