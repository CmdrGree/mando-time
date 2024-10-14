let currentTime = document.getElementById("currentTime");
let mandoTime = document.getElementById("mandoTime");

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
}

var t = setInterval(updateTimes, 1000);