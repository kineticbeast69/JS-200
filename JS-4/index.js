const input = document.getElementById("weight");
const output = document.getElementsByClassName("output")[0];

input.addEventListener("input",()=>{
    let val = input.value;
    let out = val*2.2046;
    output.innerHTML = out.toFixed(2)
})