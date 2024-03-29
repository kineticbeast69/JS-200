const input = document.getElementById("Word");
const submit = document.getElementById("submit");
const output = document.getElementById("meaning-output");



submit.addEventListener("click", async ()=>{
    let word = input.value;
    if(word == ""){
        alert("PLease Enter the word")
    }else{
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const data = await fetch(url);
        const meaning = await data.json();
        output.innerText= `Meaning:-${meaning[0]["meanings"][0]["definitions"][0]["definition"]}`
    }
})