const weekDay = ["Sunday", "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date();
let day = weekDay[date.getDay()];
document.querySelector("div[data-testid=currentUTCTime]").innerHTML=`The current day of the week is ${day}`;

document.getElementById("currentUTCTime").innerHTML= timeFormat(date)


function timeFormat(date){
    let milli = date.getTime();


    return `The current UTC time in milliseconds is ${milli}`
}