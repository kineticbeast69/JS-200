const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const milliSecond = document.querySelector(".millisecond")


const getTime=()=>{
    const time = new Date();
hour.innerHTML = time.getHours();
minute.innerHTML = time.getMinutes();
second.innerHTML = time.getSeconds()
milliSecond.innerHTML = time.getMilliseconds()
}

setInterval(getTime,100)