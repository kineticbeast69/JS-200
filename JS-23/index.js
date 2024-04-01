const cards = document.querySelectorAll(".inner-container")



function removeActive(){
    cards.forEach((card)=>{
card.classList.remove("active");
    })
}
cards.forEach((card)=>{
card.addEventListener("mouseover",()=>{
    removeActive();
    card.classList.add("active")
})
})