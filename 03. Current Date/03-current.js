const today = new Date();
let day = today.getDate();
let month = today.getMonth();
let year = today.getUTCFullYear();
if(day < 10){
    day = '0' + day;
}
if(month < 10) {
    month = '0' + month;
}
console.log(day +"/"+ month +"/" + year);