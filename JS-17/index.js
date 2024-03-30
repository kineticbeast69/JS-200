const buttons = document.querySelectorAll(".number");

const output = document.getElementById("result")
let str = '';

buttons.forEach((button)=>{
button.addEventListener("click",(e)=>{
// console.log("value",e.target.innerText)
if(e.target.innerText.trim() === "Ac"){
    str = "";
    output.value = str
}
else if(e.target.innerText.trim() === "del"){
    str = str.substring(0,str.length -1);
    output.value = str;
}else if (e.target.innerText.trim() === "="){
 str = eval(str);
 output.value = str;
}
else{
    str += e.target.innerText;
    output.value = str
}
})
})