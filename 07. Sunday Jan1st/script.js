function isItSunday() {
    let today = new Date("January 1, 2014");
    // today.setFullYear(new Date().getFullYear());
    let lastDay = new Date("December 31, 2050");
    
    var loop = new Date(today);
    while(loop <= lastDay) {
        if(loop.getDate() == 1 && loop.getMonth() == 0 && loop.getDay() == 0){
            console.log("1st January is a Sunday for date:\n" + loop + "\n");
        }
        // console.log(loop.getDate() + "\n");
        var newDate = loop.setDate(loop.getDate() + 1);
        loop = new Date(newDate);
    }
    return today.getFullYear();
}

// console.log(isItSunday());
isItSunday();