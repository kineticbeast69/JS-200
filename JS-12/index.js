const quotePara = document.getElementsByClassName("qoute")[0];
const authorName = document.getElementsByClassName("name")[0];
const submit = document.getElementsByTagName("button")[0];


async function getQuote(){
    const  qoute = await fetch("https://api.quotable.io/quotes/random")

    const data = await qoute.json();
    quotePara.innerText = data[0].content;
    authorName.innerText = data[0].author
}

submit.addEventListener("click",getQuote)