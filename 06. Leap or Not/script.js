function leapOrNot(year) {
    if(year % 4 == 0){
        return "That's a Leap!";
    } else {
        return "Sorry, no leap";
    }
}

console.log(leapOrNot(2023));