const inputValue = document.querySelector(".age");
const submit = document.getElementsByClassName("submit")[0];

const output = document.querySelector(".output");



submit.addEventListener("click",()=>{
if(inputValue.value== ""){
    alert("Please enter your date of birth")
}
else{
    //user age
    let user_dob = new Date(inputValue.value);
    user_dob = user_dob.getFullYear();

//current age
const date = new Date();
let currentYear = date.getFullYear();

let age = currentYear - user_dob;
output.innerHTML = `Your age is ${age}`
}
})
