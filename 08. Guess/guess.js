function randomBS() {
    let myNum = Math.floor(Math.random() * 10) + 1;
    console.log(myNum);
    return myNum;
}

// for(var i = 0; i < 10; i++) {
//     randomBS();
// }

function guess() {
    let myNumber = randomBS();
    let yourNumber = 0;

    if(yourNumber !== myNumber) {
        console.log("Ouuu, too bad");
    }else {
        console.log("Correct! You win nothing.");
    }
}

guess();