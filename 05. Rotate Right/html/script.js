function rotateString(targetString) {
    let  target = document.getElementById(targetString);
    let textNode = target.childNodes[0];
    let text = textNode.data;
    setInterval( function(){
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 1000);
}