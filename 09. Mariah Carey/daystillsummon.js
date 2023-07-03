let today = new Date();
let dec25 = new Date("25 December, 2023");

var daysLeft = new Date(today);
var count = 0;
while(daysLeft <= dec25) {
    daysLeft = today.setDate(today.getDate() + 1);
    count++;
}

console.log(count + " days left until Christmas of 2023");


