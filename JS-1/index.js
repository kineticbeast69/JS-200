const url = document.getElementById("qr-url");
const button = document.getElementById("qr-click");
const qrcode = document.getElementById("qr-img");
// console.log(url,button,qrcode)

button.addEventListener("click",()=>{
    const urlInput = url.value;
    if(!urlInput){
        alert("Please enter a valid url")
    }else{
        button.innerText = "Here You QR code"
        qrcode.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${urlInput}`;
        qrcode.alt = `${urlInput}`
    }
})