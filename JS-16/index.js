const reset = document.getElementsByClassName("reset-button")[0];
const plusButton = document.getElementsByClassName("plus-button")[0];
const minusButton = document.getElementsByClassName("minus-button")[0];
const output = document.getElementsByClassName("number")[0];

let count = 0;
plusButton.addEventListener("click",()=>{
    count++;
    output.innerHTML = count;
})

minusButton.addEventListener("click",()=>{
    count--;
    output.innerHTML = count;
})
reset.addEventListener("click",()=>{
    count = 0
    output.innerHTML = count
})