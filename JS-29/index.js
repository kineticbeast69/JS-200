const password = document.getElementById("password");
const eye = document.getElementsByClassName("eye")[0];

eye.addEventListener("click",()=>{
    if(password.type === "password"){
        password.type = "text";
        eye.innerHTML = "<i class='fa-solid fa-eye'></i>"
    }else{
        password.type = "password";
        eye.innerHTML = "<i class='fa-solid fa-eye-slash'></i>";
        
    }
})