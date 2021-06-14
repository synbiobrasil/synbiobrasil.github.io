var daysElement = document.getElementById("days");
var hoursElement = document.getElementById("hours");
var minutesElement = document.getElementById("minutes");
var secondsElement = document.getElementById("seconds");

var countDownDate = new Date("Jul 24, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
    daysElement.innerHTML = zeroApply(days);
    hoursElement.innerHTML = zeroApply(hours);
    minutesElement.innerHTML = zeroApply(minutes);
    secondsElement.innerHTML = zeroApply(seconds);
    console.log(days, hours, minutes, seconds);

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";  
    }
}, 1000);

var zeroApply = function(number) {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}
