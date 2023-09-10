const weekDay = ["Sunday", "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date();
let day = weekDay[date.getDay()];
document.getElementById("currentDayOfTheWeek").innerHTML=`The current day of the week is ${day}`;

document.getElementById("currentUTCTime").innerHTML= timeFormat(date)


function timeFormat(date){
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let milli = date.getMilliseconds();
    let morningNoon = hour >= 12 ? "pm" : "am"

    hour = (hour % 12 ) || 12;

    return `The current time today is ${hour}:${min}:${sec}:${milli} ${morningNoon}`
}