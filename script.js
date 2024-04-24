const rolldice = document.getElementById('btn');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const total = document.getElementById('total');
const winstate = document.getElementById('winstate');
const date = document.getElementById('day');
function datecheck(){
    var d = new Date();
    var dd = d.getUTCDate();
    var mm = d.getUTCMonth() + 1;
    var yy = d.getUTCFullYear();
    var hh = d.getHours();
    var m = d.getMinutes();
    var ss = d.getSeconds();
    date.innerText = dd +"/" + mm +"/" + yy + " at " +hh + ":" +m;

}
setInterval(datecheck(),100)

rolldice.addEventListener('click',rolldicefunction);

function rolldicefunction(){
    imageUrl = "dive-1.svg";
    var sumtotal = 0;
    var randomVal = Math.random();
    if(randomVal<(1/6)){
        diceface = 1;
        sumtotal += 1;
    }
    else if(randomVal<(2/6)){
        diceface = 2;
        sumtotal += 2;
    }
    else if(randomVal<(3/6)){
        diceface = 3;
        sumtotal += 3;
    }
    else if(randomVal<(4/6)){
        diceface = 4;
        sumtotal += 4;
    }
    else if(randomVal<(5/6)){
        diceface = 5;
        sumtotal += 5;
    }
    else {
        diceface = 6;
        sumtotal += 6;
    }
    if(diceface === 1){
        imageUrl = "dice-1.svg"
    }
    else if(diceface ===2){
        imageUrl = "dice-2.svg"
    }
    else if(diceface ===3){
        imageUrl = "dice-3.svg"
    } else if(diceface ===4){
        imageUrl = "dice-4.svg"
    } else if(diceface ===5){
        imageUrl = "dice-5.svg"
    }
    else{imageUrl = "dice-6.svg"}

    dice1.innerHTML = "<img src='" + imageUrl + "' alt='" + diceface +"'>";
    randomVal = Math.random();
    if(randomVal<(1/6)){
        diceface = 1;
        sumtotal += 1;
    }
    else if(randomVal<(2/6)){
        diceface = 2;
        sumtotal += 2;
    }
    else if(randomVal<(3/6)){
        diceface = 3;
        sumtotal += 3;
    }
    else if(randomVal<(4/6)){
        diceface = 4;
        sumtotal += 4;
    }
    else if(randomVal<(5/6)){
        diceface = 5;
        sumtotal += 5;
    }
    else {
        diceface = 6;
        sumtotal += 6;
    }
    if(diceface === 1){
        imageUrl = "dice-1.svg"
    }
    else if(diceface ===2){
        imageUrl = "dice-2.svg"
    }
    else if(diceface ===3){
        imageUrl = "dice-3.svg"
    } else if(diceface ===4){
        imageUrl = "dice-4.svg"
    } else if(diceface ===5){
        imageUrl = "dice-5.svg"
    }
    else{imageUrl = "dice-6.svg"}
    dice2.innerHTML = "<img src='" + imageUrl + "' alt='" + diceface +"'>";
    total.textContent = sumtotal;
    if(sumtotal>7){
        winstate.innerHTML = "<h3>You win: Try Again!</h1>"
    }
    else{
        winstate.innerHTML = "<h3>You didn't win: Try Again!</h1>"
    }
}