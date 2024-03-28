const month = document.getElementsByClassName("month")[0];
const week = document.getElementsByClassName("week")[0];
const day = document.getElementsByClassName("day")[0];
const year = document.getElementsByClassName("year")[0];


const date = new Date();
year.innerText=date.getFullYear();
day.innerText=date.getDate();
week.innerText = date.toLocaleDateString("en-US",{weekday:"long"})
month.innerText = date.toLocaleDateString("en-US",{month:"long"})