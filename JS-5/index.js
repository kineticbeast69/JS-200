const celinput = document.getElementById("celsius");
const kelinput = document.getElementById("kelvin");
const fahinput = document.getElementById("fahrenheit");


// celsius to kelvin
//celsius to fahrenheit
celinput.addEventListener("input",()=>{
let celsius = celinput.value;
celsius = parseFloat(celsius)
let kel = celsius + 273.15;
let fah = (celsius * 9/5) + 32;
kelinput.value = kel.toFixed(3);
fahinput.value = fah.toFixed(3)

})


//kelvin to celsius
//kelvin to fahrenheit
kelinput.addEventListener("input",()=>{
    let kelvin = kelinput.value;
    kelvin = parseFloat(kelvin);
    let cel = kelvin - 273.15;
    let fah = (cel * 9/5) + 32;
    celinput.value = cel.toFixed(3);
    fahinput.value = fah.toFixed(3);
})

//fahrenheit to celsius
//fahrenheit to kelvin
fahinput.addEventListener("input",()=>{
    let fahrenheit = fahinput.value;
    fahrenheit = parseFloat(fahrenheit);
    let cel = (fahrenheit - 32) * 5/9;
    let kel = cel + 273.15;
celinput.value = cel.toFixed(3);
kelinput.value = fah.toFixed(3)

})
