const container = document.getElementsByClassName("container")[0]; //container element
const template = document.getElementsByTagName("template")[0];
const apiKey = "6f700615c2484ffeb27889cc6f68e496";
const getData = async (query) => {
  //fetching the data
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
  );
  const responseData = await response.json();
  const data = responseData.articles;
  container.innerHTML = "";
  iterate(data);
};
function iterate(data) {
  //all the data showing going over here
  data.forEach((item, index) => {
    const clone = template.content.cloneNode(true);
    clone.firstElementChild.addEventListener("click", () => {
      //adding link to the source
      window.open(item.url, "_blank");
    });
    clone.querySelector(
      ".card-image"
    ).innerHTML = `<img src="${item.urlToImage}"  />`; //adding image over her
    clone.querySelector(".card-heading").textContent = item.title; //adding title
    clone.querySelector(".card-para").textContent = item.description; //adding description
    container.appendChild(clone);
  });
}
const btn = document.getElementsByClassName("search-btn")[0];
const input = document.getElementById("search");
btn.addEventListener("click", () => {
  //search based data query
  inputValue = input.value;
  if (inputValue == "") {
    alert("Plese fill up the field.");
  } else {
    getData(inputValue);
    input.value = "";
  }
});
window.addEventListener("load", () => {
  getData("india");
});

function navClick(value) {
  //navbar based query search
  if (value === "india") {
    //india based news in navbar
    getData(value);
    document.querySelector("#india").style.color = "blue";
    document.querySelector("#politics").style.color = "white";
    document.querySelector("#technology").style.color = "white";
    document.querySelector("#sports").style.color = "white";
  } else if (value === "sports") {
    //sports based news in navbar
    getData(value);
    document.querySelector("#india").style.color = "white";
    document.querySelector("#politics").style.color = "white";
    document.querySelector("#technology").style.color = "white";
    document.querySelector("#sports").style.color = "blue";
  } else if (value === "politics") {
    //politics based news in navbar
    getData(value);
    document.querySelector("#india").style.color = "white";
    document.querySelector("#politics").style.color = "blue";
    document.querySelector("#technology").style.color = "white";
    document.querySelector("#sports").style.color = "white";
  } else if (value === "technology") {
    //technolgy based news in navbar
    getData(value);
    document.querySelector("#india").style.color = "white";
    document.querySelector("#politics").style.color = "white";
    document.querySelector("#technology").style.color = "blue";
    document.querySelector("#sports").style.color = "white";
  } else {
    getData("india");
  }
}
