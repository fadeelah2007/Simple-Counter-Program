//COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const numberCount = document.getElementById("numberCount");
let count = 0

decreaseBtn.onclick = function(){
    count--;
    numberCount.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    numberCount.textContent = count;
}

increaseBtn.onclick = function(){
    count++;
    numberCount.textContent = count;
}