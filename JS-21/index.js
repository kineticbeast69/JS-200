const jokes = document.getElementsByClassName("jokes")[0];
const button = document.getElementById("submit");


button.addEventListener("click", async ()=>{
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,sexist&type=single";
 const data =  await fetch(url);
 const meaning = await data.json()
//  console.log(meaning["joke"])
 jokes.innerHTML = meaning["joke"]
})