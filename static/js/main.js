/// lanes[Math.floor(Math.random() * (3 + 1))];;


function targets(){
    let lanes = ["left1", "left2", "right1", "right2"];
    let pick = lanes[Math.floor(Math.random() * (3 + 1))];
    let createTarget = document.createElement('div');
    let locationTarget = document.body;
    createTarget.className = "target";
    createTarget.id = pick;
    createTarget.innerHTML = '<img src="static/images/survivor-move_flashlight_0.png">';
    locationTarget.appendChild(createTarget);
    return pick
}


function myMove() {
    let picked = targets();
    let elem = document.getElementById(picked);
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos > 80) {
            clearInterval(id);
            document.getElementById(picked).remove();
            myMove()
        } else {
            pos += 0.2;
            elem.style.top = pos + '%';
        }
    }
}


function timer() {
    let myTime = 999999999;
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


timer();
myMove();