const color = document.getElementsByClassName("color")[0];
const button = document.querySelector("button");
const body = document.querySelector("body");
let count = 0;
let intervalId = null;

button.addEventListener("click",()=>{
    if(intervalId === null){
        intervalId = setInterval(()=>{
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            let borderColor = color.style.backgroundColor = `rgba(${r},${g},${b})`;
            if(color.style.borderColor === borderColor){
                color.style.borderColor = "white";
            }
            body.style.backgroundColor = borderColor;
            count++;
            if(count == 10){
                clearInterval(intervalId);
                intervalId = null;
                color.style.backgroundColor = "red"
                body.style.backgroundColor = "white"
            }
        },2000)
    }else{
        clearInterval(intervalId)
        intervalId = null;
    }

})