function rotateString(targetString) {
    //First we get the target by element ID
    let  target = document.getElementById(targetString);

    //Assign the innerHTML to a variable
    let innerText = target.innerHTML;

    //Repeatedly call the function with an interval to rotate the string left going right
    setInterval( function(){
        innerText = innerText[innerText.length - 1] + innerText.substring(0, innerText.length - 1);
        target.textContent = innerText;
    }, 150);
}