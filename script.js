const playButton = document.getElementById("play");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const second = document.getElementById("sec");
const miliSecond = document.getElementById("msec");
const minute = document.getElementById("min");
const laps = document.getElementById("laps");
const clearButton= document.getElementById("clear");

let isPlay = false;
let secCounter = 0;
let sec;
let centiCounter = 0;
let centiSecond;
let min;
let minCounter=0;
let isReset= false;
let lapItem = 0;
const toogleButton = () => {
    lapButton.classList.remove("hidden")
    resetButton.classList.remove("hidden")
}
const play = () => {
    if (!isPlay && !isReset) {
        playButton.innerHTML = "Pause";
        sec = setInterval(() => {
            if (secCounter === 60) {
                secCounter = 0;
            }
            second.innerHTML = `&nbsp${++secCounter} :`;
        }, 1000)
        centiSecond = setInterval(() => {
            if (centiCounter === 100) {
                centiCounter = 0;
            }
            miliSecond.innerHTML = `&nbsp${++centiCounter}`;
        }, 10)
        min = setInterval(() => {
            if (minCounter === 99) {
                minCounter = 0;
            }
            minute.innerHTML = `${++minCounter} :`;
        }, 60*1000)
        isPlay = true;
        isReset= true;
    }
    else {
        playButton.innerHTML = "Play";
        clearInterval(sec);
        clearInterval(centiSecond);
        clearInterval(min);
        isPlay = false;
        isReset = false;
    }
    toogleButton();
}


const reset = () => {
    isReset=true;
    play();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    second.innerHTML = "&nbsp 0 :";
    miliSecond.innerHTML = "&nbsp 0";
    minute.innerHTML="0 :"
    secCounter=0;
    minCounter=0;
    centiCounter=0;
}

const lap = ()=>{
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("spam");

    li.setAttribute("class","lap-item");
    number.setAttribute("class","number");
    timeStamp.setAttribute("class","time-stamp");
    number.innerText= `#${++lapItem}`
    timeStamp.innerHTML = `->   ${minCounter} : ${secCounter} : ${centiCounter}`;

    li.append(number,timeStamp);
    laps.append(li);

}
const clearAll = ()=>{
    laps.innerHTML = "";
    lapItem=0;
    laps.append(clearButton);
}
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click",lap);
clearButton.addEventListener("click",clearAll);