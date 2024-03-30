const applause = document.querySelector(".btn-applause");
const boo = document.querySelector(".btn-boo");
const gasp = document.querySelector(".btn-gasp");
const victory = document.querySelector(".btn-victory");
const tada = document.querySelector(".btn-tada");
const wrong = document.querySelector(".btn-wrong");

//sounds
const app_sound = document.getElementById("app-sound");
const boo_sound = document.getElementById("boo-sound");
const gasp_sound = document.getElementById("gasp-sound");
const victory_sound = document.getElementById("vic-sound");
const tada_sound = document.getElementById("tada-sound");
const wrong_sound = document.getElementById("wrong-sound");


const stopAudio = () =>{
    app_sound.pause();
    app_sound.currentTime = 0;
    boo_sound.pause();
    boo_sound.currentTime = 0;
    gasp_sound.pause();
    gasp_sound.currentTime = 0;
    victory_sound.pause();
    victory_sound.currentTime = 0;
    tada_sound.pause();
    tada_sound.currentTime = 0;
    wrong_sound.pause();
    wrong_sound.currentTime = 0;
}

applause.addEventListener("click",()=>{
    stopAudio();
app_sound.play()
})
boo.addEventListener("click",()=>{
    stopAudio();
boo_sound.play()
})
gasp.addEventListener("click",()=>{
    stopAudio();
gasp_sound.play()
})
victory.addEventListener("click",()=>{
    stopAudio();
victory_sound.play()
})
tada.addEventListener("click",()=>{
    stopAudio();
tada_sound.play()
})
wrong.addEventListener("click",()=>{
    stopAudio();
wrong_sound.play()
})