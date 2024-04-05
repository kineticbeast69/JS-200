const image = document.getElementsByClassName("image")[0];
const text = document.getElementsByClassName("text")[0];
const button = document.getElementsByClassName("button")[0];
const container = document.getElementsByClassName("container")[0]
 button.addEventListener("click",async ()=>{
    const url = ` https://meme-api.com/gimme`;
    const data = await fetch(url);
    const meaning = await data.json();
    container.style.backgroundColor = "white";
    image.innerHTML = `<img src="${meaning["preview"][2]}" alt="">`
    text.innerHTML = meaning["title"];

 })