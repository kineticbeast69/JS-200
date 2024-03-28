const scrollbar = document.getElementsByClassName("Scrollbar")[0] ;
// console.log(scrollbar)
 
window.addEventListener("scroll",()=>{
    let scrollY = window.scrollY;
    let scrollHeight = document.body.scrollHeight
    let innerheight = window.innerHeight
    console.log(`Scrolly:${scrollY},ScrollHeight:${scrollHeight},innerHeight:${innerheight}`)
    let percentage = (scrollY/(scrollHeight-innerheight))*100;
    scrollbar.style.width = percentage + '%'
})