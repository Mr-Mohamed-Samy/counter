const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
let count = 0 ;
increase.onclick = function(){
    count++;
    counter.textContent = count;
}
reset.onclick = function(){
    count = 0;
    counter.textContent = count;
}
decrease.onclick = function(){
    count--;
    counter.textContent = count;
}