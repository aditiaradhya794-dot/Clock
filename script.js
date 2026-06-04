// CLOCK

function updateClock(){
    const now = new Date();

    const h = String(now.getHours()).padStart(2,'0');
    const m = String(now.getMinutes()).padStart(2,'0');
    const s = String(now.getSeconds()).padStart(2,'0');

    document.getElementById("clock").innerText =
        `${h}:${m}:${s}`;
}

setInterval(updateClock,1000);
updateClock();


// STOPWATCH

let stopwatchInterval;
let seconds = 0;

function updateStopwatch(){
    seconds++;

    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds%3600)/60);
    let secs = seconds%60;

    document.getElementById("stopwatch").innerText =
        `${String(hrs).padStart(2,'0')}:` +
        `${String(mins).padStart(2,'0')}:` +
        `${String(secs).padStart(2,'0')}`;
}

function startStopwatch(){
    if(!stopwatchInterval){
        stopwatchInterval = setInterval(updateStopwatch,1000);
    }
}

function pauseStopwatch(){
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch(){
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    seconds = 0;
    document.getElementById("stopwatch").innerText =
        "00:00:00";
}


// ALARM

let alarmTime = "";

function setAlarm(){
    alarmTime =
        document.getElementById("alarmTime").value;

    document.getElementById("alarmStatus").innerText =
        "Alarm set for " + alarmTime;
}

setInterval(()=>{
    const now = new Date();

    const currentTime =
        String(now.getHours()).padStart(2,'0') +
        ":" +
        String(now.getMinutes()).padStart(2,'0');

    if(alarmTime === currentTime){
        alert("⏰ Alarm Ringing!");
        alarmTime = "";
    }
},1000);


// DARK MODE

const toggleBtn =
document.getElementById("themeToggle");

toggleBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        toggleBtn.innerText = "☀ Light Mode";
    }else{
        toggleBtn.innerText = "🌙 Dark Mode";
    }
});