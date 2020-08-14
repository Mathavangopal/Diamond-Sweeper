

function getRandomnumber(min,max){
    let step1=max-min+1;
    let step2=Math.random()*step1;
    let result=Math.floor(step2)+min;
    return result;
}
var id =  getRandomnumber(0,15);
var id1 =  getRandomnumber(0,15);
var id2 =  getRandomnumber(0,15);

console.log( id);
console.log( id1);
console.log( id2);

function change(){

    var image = document.getElementById(getRandomnumber(0,15));
    image.src = "diamond.png"
}

function change(){

    var image = document.getElementById(getRandomnumber(0,15));
    image.src = "diamond.png"
}

function change(){

    var image = document.getElementById(getRandomnumber(0,15));
    image.src = "diamond.png"
}