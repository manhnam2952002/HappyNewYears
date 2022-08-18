
const DaysE = document.getElementById('days');
const HoursE = document.getElementById('hours');
const MinE = document.getElementById('min');
const SecondE = document.getElementById('second');

const newYears = '1 Jan 2023';

function countDown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const Days = Math.floor(totalSeconds / 3600 / 24);
    const Hours = Math.floor(totalSeconds / 3600 % 24);
    const Min = Math.floor(totalSeconds / 60) % 60;
    const Second = Math.floor(totalSeconds) % 60;


    DaysE.innerHTML = formatTime(Days);
    HoursE.innerHTML = formatTime(Hours);
    MinE.innerHTML = formatTime(Min);
    SecondE.innerHTML = formatTime(Second);
}

function formatTime(time){
    return time < 10 ? `${time}` : time;

}

countDown();

setInterval(countDown, 1000);