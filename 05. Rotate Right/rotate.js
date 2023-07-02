function spinIy() {
    let word = "w3resource";
    var spin = "";

    for(let i = word.length-1; i >= 0; i--){
        spin += word[i];
    }
    console.log(spin);
}


spinIy();