
var timeLeft = 20;

var startTime = 0;
var currentTime = 0;

function convertSeconds(s) {
    var min = floor(s / 60);
    var sec = s % 60;
    return nf(min, 2) + ':' + nf(sec, 2) +  'min';
}



function setup() {
    noCanvas();
    startTime = millis();

    var timer = select('#timer');
    timer.html(convertSeconds(timeLeft - currentTime))

    var interval = setInterval(timeIt, 1000);
    
    function timeIt() {
        currentTime = floor((millis() - startTime)/1000);
        timer.html(convertSeconds(timeLeft - currentTime));


        if (currentTime == timeLeft) {
            clearInterval(interval)
            /* var expired = select('#timer');
            expired.innerHTML = "EXPIRED" */
            //counter = 0;
            document.getElementById("timeout").style.visibility = "hidden"
            document.getElementById("account-details").style.visibility = "hidden"
            document.getElementById("payment").style.visibility = "hidden"
            
            let text1 = document.getElementById("account-details");
            text1.insertAdjacentHTML('beforebegin', '<div id="account-details-1" >You have to be patient. we would match your payment</div>');
            let text = document.getElementById("account-details-1");
            text.insertAdjacentHTML('afterend', '<div id="account-details-2" >The time given too you for payment has being exhuasted!!</div>');

            }
    }

  /* document.getElementById("#timer").innerHTML = "Paragraph changed!"; */
}



/* function draw() {
  ellipse(50, 50, 80, 80);
} */