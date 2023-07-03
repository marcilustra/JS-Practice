function isItSunday() {
    //First we create 2 variables storing the dates 1st Jan 2014
    //And 31st Dec 2050
    let today = new Date("January 1, 2014");
    let lastDay = new Date("January 1, 2050");
    
    //loop is meant to hold the value of today as we count thru to 2050 Dec 31
    var loop = new Date(today);
    while(loop <= lastDay) {
        //Check if Jan 1st of a Year is on a Sunday(0)
        if(loop.getDate() == 1 && loop.getMonth() == 0 && loop.getDay() == 0){
            console.log("1st January is a Sunday for date:\n" + loop + "\n");
        }
        //Add to the date jumping to next year since we are only checking Januaries on 1st.
        var newDate = loop.setFullYear(loop.getFullYear() + 1);
        loop = new Date(newDate);
    }
    return today.getFullYear();
}


isItSunday();