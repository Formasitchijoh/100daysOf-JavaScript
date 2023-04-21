var count = 0;
let seconds;
setInterval(counting, 1000);

function counting(){
     count += 1;
    document.querySelector(".count").innerHTML = count;
}

function countUp(){
    document.querySelector(".count").innerHTML = count++;
}

function resetCount(){
    count = 0;
    document.querySelector(".count").innerHTML = count;
}

function countDown(){
    document.querySelector(".count").innerHTML = count--;
}