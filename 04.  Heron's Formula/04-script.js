function findArea(a,b,c){
    let s = (a + b + c)/2;
    let area = 0;

    area = (s*(s-a)*(s-b)*(s-c)) ** 0.5;
    return area.toFixed(1);
}

console.log(findArea(5,6,7) + " square units.");