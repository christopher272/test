var timeLeft = 5;
const counters = document
const timerText = document.createElement('h2')
const countText = document.createElement('h2')
document.getElementsByTagName('div')[0].append(timerText)
document.getElementsByTagName('div')[0].append(countText)

const count = document.getElementById('count')
var counter = 0;
let stopCounting = false;
var timerId = setInterval(countdown, 1000);
console.log(counters)
document.getElementsByTagName('div')[0].append(counter)
counters.addEventListener("click", function(){
    console.log("you clicked")
    if (stopCounting === false) {
        counter++;
       }
        else if (stopCounting === true) {
            alert("Time over")
            localStorage.setItem("counter", counter)
        console.log(localStorage.getItem("counter",counter.value))}
}) ;console.log(counter)
function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
        stopCounting = true;
    } else {
        timerText.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
        
    }
}
function doSomething() {
    alert("You clicked: " + counter + " times in 30 seconds");
}
