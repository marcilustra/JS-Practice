const dayToday = new Date();
const DAYS = [
    "Sunday", 
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let leo = DAYS[dayToday.getDay()];
let hour = dayToday.getHours();
let time = dayToday.getMinutes();
let timefull = dayToday.toLocaleString('en-UK', { hour: 'numeric', minute: 'numeric', hour12: true});
console.log("Today is " + leo);
// console.log("The time is " + hour + ":" + time);
console.log("And the time now is " + timefull);