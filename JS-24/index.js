const input = document.getElementsByClassName("input")[0];
const search = document.getElementById("search")
const deatils = document.getElementsByClassName("details")[0];
const flag = document.getElementsByClassName("flag-country")[0];
// const country = document.getElementsByClassName("country-name")[0];

async function getData(){
    const countryInput = input.value;
    const url = `https://restcountries.com/v3.1/name/${countryInput}?fullText=true`;
    const data = await fetch(url);
    const meaning = await data.json();
console.log(meaning[0]);
flag.innerHTML = `<div class="flag">
 <img src="${meaning[0]["flags"]["svg"]}"  class="country-flag">
 <div class="country-name">${input.value}</div>
 </div>`;
deatils.innerHTML = `
<div class="capital design">
Capital : <p id="p-design">  ${meaning[0]["capital"][0]}</p> 
</div>
<div class="capital design">
Continent : <p id="p-design">  ${meaning[0]["continents"
][0]}</p> 
</div>
<div class="capital design">
Population : <p id="p-design">  ${meaning[0]["population"]}</p> 
</div>
<div class="capital design">
Population : <p id="p-design">  ${meaning[0]["population"]}</p> 
</div>
`
};


search.addEventListener("click",getData)