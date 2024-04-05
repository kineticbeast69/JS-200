const personName = document.getElementsByClassName("person-name")[0];
const title = document.getElementsByClassName("title")[0];
const personLocation = document.getElementsByClassName("location")[0];
const images = document.getElementsByClassName("images")[0];
const button = document.getElementsByClassName("button")[0]
const dob = document.getElementsByClassName("dob")[0];
const email = document.getElementsByClassName("email")[0]


button.addEventListener("click",async()=>{
    const url = `https://random-data-api.com/api/v2/users?response_type=json`;
    const data = await fetch(url);
    const meaning = await data.json();
    console.log(meaning)
    personLocation.innerText = `${meaning["address"]["city"]},${meaning["address"]["state"]},${meaning["address"]["country"]}`;
    title.innerText = `${meaning["employment"]["title"]}`
    personName.innerText = `${meaning["first_name"]} ${meaning["last_name"]}`;
    console.log(meaning["avatar"])
    images.innerHTML = `<img src="${meaning["avatar"]}" alt="">`;
    dob.innerText = `${meaning["date_of_birth"]}`;
    email.innerText = `${meaning["email"]}`
})