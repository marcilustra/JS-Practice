function isItSunday() {
    let today = new Date();
    today.setFullYear(new Date().getFullYear() - 9);
    
    if(today.getDate() == 1 && today.getMonth() == 0){
        console.log("1st January 183 days from now\n");
    }
    return today;
}

console.log(isItSunday());