const height = document.getElementById("height");
const weight = document.getElementById("weight");
const button = document.getElementById("button")
const output = document.getElementsByClassName("output")[0];

button.addEventListener("click",()=>{
    if(height.value == "" || weight.value == ""){
        alert("Please enter the value")
    }else if(height.value <= 0 || weight.value <= 0){
alert("Please enter the valid number")
    }else{
        let meterHeight = parseFloat(height.value)
        meterHeight = meterHeight/100;

        let weightValue = parseFloat(weight.value);
        let bmi = weightValue/(meterHeight*meterHeight)
        bmi = bmi.toFixed(2)
        if(bmi <= 18.4){
            output.innerHTML = `Your Underweight ${bmi}`
        }else if(bmi > 18.5 && bmi <= 24.9){
                output.innerHTML = `Your Normal ${bmi}`
        }else if(bmi > 25.0 && bmi <= 29.9){
            output.innerHTML = `Your overweight ${bmi}`
        }else if(bmi > 30 && bmi <= 34.9){
            output.innerHTML = `Your obese 1 ${bmi}`
        }else if(bmi > 35.0 && bmi <= 39.9){
            output.innerHTML = `Your Obsese 2 ${bmi}`
        }else {
                output.innerHTML = `You have obese 3 ${bmi}`
        }
    }
})