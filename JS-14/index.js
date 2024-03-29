const principal = document.getElementById("loan");
const rate = document.getElementById("interest");
const nom = document.getElementById("month");
const submit = document.getElementById("submit");
const output = document.getElementsByClassName("output")[0];

submit.addEventListener("click",()=>{
    const p = principal.value
    const r = rate.value
    const n = nom.value
  if(p == "" || r == "" || n ==""){
    alert("Please enter the value")
  }else{
    const emi = (p * r * (1 + r)**n)/((1+r)**n -1);
    output.innerHTML = `Your EMI is ${emi}`
  }
})