const userInput = document.getElementById("userinput");
const errorZone = document.getElementsByClassName("errorzone")[0];
userInput.addEventListener("input", () => {
  let password = userInput.value;
setTimeout(()=>{
  if (password.length < 8) {


    errorZone.innerHTML = "Your Password is too short";
    errorZone.style.color = "red"
  } else {


    errorZone.innerHTML = "Your Password is too long";


    if (password.search(/[a-z]/) == -1) {


      errorZone.innerHTML = "Your Password must inlcude small letters";
    } 
    else if (password.search(/[A-Z]/) == -1) {


      errorZone.innerHTML = "Your Password must include capital letters";
    } 
    else if (password.search(/[0-9]/) == -1) {
errorZone.innerHTML = "Your password must include numbers";

    }else if(password.search(/[!/@/#/?/$/%/^/&/*/(/)/_/-/{/}/</>/+/=]/) == -1){
errorZone.innerHTML = "Your Password must special characters"
    } 
    else {


      errorZone.innerHTML = "Your Password is strong";
      errorZone.style.color = "green";
    }
  }
},2000)
});
