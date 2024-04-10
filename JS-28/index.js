const button = document.getElementById("button");
const userNumber = document.getElementById("input");
const revealNumber = document.getElementsByClassName("show-number")[0];
const text = document.getElementsByClassName("text")[0];
const chances = document.getElementsByClassName("count-meter")[0];

let count = 10;
let randomNumber = Math.floor(Math.random() * 100);
function getNumber(){
    let userValue = parseInt(userNumber.value);
    if(isNaN(userValue)){
        alert("Enter valid number")
    }
    if(userValue == ""){
        alert("Please enter your Number")
    }else{
       count--;
    if(userValue == randomNumber){
        revealNumber.innerHTML = `<h1>${randomNumber}</h1>`;
        text.innerText = "Congrats!You Won";
        chances.innerHTML = `Chances- <span>${count}</span>`;
        button.disabled = true;
    }else if(userValue > randomNumber){
        text.innerText = "Your Number Greater Than actual number";
    }else if(userValue < randomNumber){
        text.innerText = "Your Number Smaller Than actual number";
    }
    
    chances.innerHTML = `Chances- <span>${count}</span>`
    }
    if(count === 0){
        text.innerHTML = "Sorry! Your chances are over";
        button.disabled = true;
        revealNumber.innerHTML = randomNumber;
    }
}


button.addEventListener("click",getNumber)
