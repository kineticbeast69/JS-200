let amount = document.getElementsByClassName("amount")[0];
let tip = document.getElementsByClassName("tip")[0];
const calculate = document.getElementsByTagName("button")[0];
const price = document.getElementsByClassName("total")[0]

calculate.addEventListener("click",()=>{
if(amount.value == "" || tip.value == ""){
alert("PLease enter the value");
}else if(amount.value <= 0 || tip.value <= 0){
alert("PLease enter valid value");
}else{
let amountValue = parseFloat(amount.value);
let tipValue = parseFloat(tip.value)
let tipAmount = amountValue * (tipValue/100);
let totalBill = amountValue + tipAmount;
price.innerHTML = totalBill;
}
})