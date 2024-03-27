const message = document.getElementById("message");
const button = document.getElementsByTagName("button")[0];
const output = document.querySelector(".count");

button.addEventListener("click",()=>{
let value = message.value;
if(value.length == 0){
    alert("Please type some message in the box")
}else{
    let count = 0;
    value = value.toLowerCase()
    for(let i = 0; i<= value.length;i++){
        if(value[i]==="a" || value[i]==="e" || value[i]==="i" || value[i]==="o" || value[i] === "u"){
            count++;
        }
        output.innerHTML = count;
    }
}
})