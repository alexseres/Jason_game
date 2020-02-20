function myMove() {
    let targetList = ["targetLeft1", "targetLeft2", "targetRight1", "targetRight2"];
    let elem = document.getElementById("target");
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos > 85) {
            clearInterval(id);
            elem.style.top = '0px';
            document.getElementById("target").className =
                targetList[Math.floor(Math.random() * (3 - 0 + 1)) + 0];
            myMove()
        } else {
            pos += 0.2;
            elem.style.top = pos + '%';
        }
    }
}

function timer() {
    let myTime = 2000;
    let stillRunning = setInterval(function(){
        myTime--;
        document.getElementById("timer").innerHTML =
            Math.floor(myTime/1000) + "," +
            Math.floor(myTime/10 - (Math.floor(myTime/1000)* 100)) + "S";
        if (myTime === 0) {
            clearInterval(stillRunning);
            window.location.href = '/loss';
        }
        }, 1);
}


timer()
myMove();