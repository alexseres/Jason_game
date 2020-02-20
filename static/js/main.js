function targets(){
    let lanes = ["left1", "left2", "right1", "right2"];
    let pick = lanes[Math.floor(Math.random() * (3 + 1))];
    let createTarget = document.createElement('div');
    let locationTarget = document.body;
    createTarget.className = "target";
    createTarget.id = pick;
    createTarget.innerHTML = '<img src="static/images/stickman.png">';
    locationTarget.appendChild(createTarget);
    return pick
}

function myMove() {
    let picked = targets();
    let elem = document.getElementById(picked);
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos < -100) {
            clearInterval(id);
            document.getElementById(picked).remove();
            myMove()
        } else {
            pos -= 0.2;
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

let KEY_LEFT = 37;
let KEY_RIGHT = 39;

document.addEventListener('keydown', keypress, false);
document.addEventListener('keydown', switchPics, false);

var macheteThrown = false;

function keypress(event) {
    if (macheteThrown === false) {

        if (event.keyCode === KEY_LEFT) {
            macheteThrown = true;
            var macheteLeft = document.getElementById("machete-left");
            var jason = document.getElementById("jason");
            var jasonWithoutMachete = document.getElementById("jason-without-machete");
            var macheteRight = document.getElementById("machete-right");
            var knifeSound = document.getElementById("knife-sound");
            var pos = 0;
            let pos2 = 0;
            var id_left = setInterval(frameLeft, 5);
            var jason_m = setInterval(jasonMachete, 5);
            var jason_nm = setInterval(jasonNoMachete, 5);


            function frameLeft() {
                knifeSound.play();
                knifeSound.volume = 0.2;
                if (pos === 600) {
                    clearInterval(id_left);
                    macheteLeft.style.top = '40px';
                    macheteLeft.style.left = '5px';
                    macheteThrown = false;
                } else {
                    pos += 3;
                    pos2 -= 3.8;
                    macheteLeft.style.top = pos + 'px';
                    macheteLeft.style.left = pos2 + "px";
                    console.log(pos)
                }

            }
        } else if (event.keyCode === KEY_RIGHT) {
            var macheteLeft = document.getElementById("machete-left");
            var jason = document.getElementById("jason");
            var jasonWithoutMachete = document.getElementById("jason-without-machete");
            var macheteRight = document.getElementById("machete-right");
            var knifeSound = document.getElementById("knife-sound");
            var pos = 0;
            let pos2 = 0;
            var id_right = setInterval(frameRight, 5);

            function frameRight() {
                knifeSound.play();
                knifeSound.volume = 0.2;
                if (pos === 600) {
                    clearInterval(id_right);
                    macheteRight.style.top = '40px';
                    macheteRight.style.left = "0px";
                    macheteThrown = false;
                } else {
                    pos += 3;
                    pos2 += 3.8;
                    macheteRight.style.top = pos + 'px';
                    macheteRight.style.left = pos2 + "px";
                    console.log(pos);
                }
            }
        }
    }

}
function switchPics(e) {
    if (e.keyCode === KEY_LEFT) {
        var jason = document.getElementById("jason");
        var jasonWithoutMachete = document.getElementById("jason-without-machete");
        var macheteLeft = document.getElementById("machete-left");
        var macheteRight = document.getElementById("machete-right");
        let jHide = setTimeout(hideJ, 0);
        let jShow = setTimeout(showJ, 1000);

        function hideJ() {
            jason.style.visibility = "hidden";
            jasonWithoutMachete.style.visibility = "visible";
            macheteLeft.style.visibility = "visible";
            macheteRight.style.visibility = "hidden";
        }

        function showJ() {
            jason.style.visibility = "visible";
            jasonWithoutMachete.style.visibility = "hidden";
            macheteLeft.style.visibility = "hidden";
            macheteRight.style.visibility = "hidden";
        }
    }
    if (e.keyCode === KEY_RIGHT) {
        var jason = document.getElementById("jason");
        var jasonWithoutMachete = document.getElementById("jason-without-machete");
        var macheteLeft = document.getElementById("machete-left");
        var macheteRight = document.getElementById("machete-right");
        let jHide = setTimeout(hideJ, 0);
        let jShow = setTimeout(showJ, 1000);

        function hideJ() {
            jason.style.visibility = "hidden";
            jasonWithoutMachete.style.visibility = "visible";
            macheteLeft.style.visibility = "hidden";
            macheteRight.style.visibility = "visible";
        }

        function showJ() {
            jason.style.visibility = "visible";
            jasonWithoutMachete.style.visibility = "hidden";
            macheteLeft.style.visibility = "hidden";
            macheteRight.style.visibility = "hidden";
        }
    }
}