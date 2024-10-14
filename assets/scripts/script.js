let currentTime = document.getElementById("currentTime");
let mandoTime = document.getElementById("mandoTime");

let timeZoneDisplay = document.getElementById("timeZoneDisplay");

let currentTimeLocal = document.getElementById("currentTimeLocal");
let mandoTimeLocal = document.getElementById("mandoTimeLocal");

const secondsInADay = 24 * 60 * 60; // Number of seconds in a day


function updateTimes() {
    let time = Math.floor(Date.now() / 1000);
    let secondsSinceMidnight = time % secondsInADay;
    let hours = Math.floor(secondsSinceMidnight / 3600);
    let minutes = Math.floor((secondsSinceMidnight % 3600) / 60);
    let seconds = secondsSinceMidnight % 60;

    let hakbase = Math.floor(secondsSinceMidnight / 10800) + 1;
    let getue = Math.floor((secondsSinceMidnight % 10800) / 900);
    let kumana = Math.floor(((secondsSinceMidnight % 10800) % 900) / 30);
    let kislun = secondsSinceMidnight % 30;

    currentTime.innerHTML = `${hours}:${minutes}:${seconds}`;
    mandoTime.innerHTML = `${hakbase}:${getue}:${kumana}:${kislun}`;

    let tzTime = new Date();
    let tzHours = tzTime.getHours();
    let tzMinutes = tzTime.getMinutes();
    let tzSeconds = tzTime.getSeconds();

    let tzSecondsSinceMidnight = tzHours * 3600 + tzMinutes * 60 + tzSeconds;

    let tzHakbase = Math.floor(tzSecondsSinceMidnight / 10800) + 1;
    let tzGetue = Math.floor((tzSecondsSinceMidnight % 10800) / 900);
    let tzKumana = Math.floor(((tzSecondsSinceMidnight % 10800) % 900) / 30);
    let tzKislun = tzSecondsSinceMidnight % 30;

    currentTimeLocal.innerHTML = `${tzHours}:${tzMinutes}:${tzSeconds}`;
    mandoTimeLocal.innerHTML = `${tzHakbase}:${tzGetue}:${tzKumana}:${tzKislun}`;
}

var t = setInterval(updateTimes, 1000);