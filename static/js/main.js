function myMove() {
    let targetList = ["targetLeft1", "targetLeft2", "targetRight1", "targetRight2"];
    let elem = document.getElementById("target");
    let pos = 80;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos < 2) {
            clearInterval(id);
            elem.style.bottom = '0px';
            document.getElementById("target").className =
                targetList[Math.floor(Math.random() * (3 - 0 + 1)) + 0];
            myMove()
        } else {
            pos -= 0.2;
            elem.style.top = pos + '%';
        }
    }
}
myMove();


let KEY_LEFT = 37;
let KEY_RIGHT = 39;

document.addEventListener('keydown', keypress, false);
document.addEventListener('keydown', switchPics, false);

function keypress(event) {

    if (event.keyCode === KEY_LEFT) {
        var macheteLeft = document.getElementById("machete-left");
        var jason = document.getElementById("jason");
        var jasonWithoutMachete = document.getElementById("jason-without-machete");
        var macheteRight = document.getElementById("machete-right");
        var knifeSound = document.getElementById("knife-sound");
        var pos = 0;
        let pos2 = 0;
        var id_left = setInterval(frameLeft,5);
        var jason_m = setInterval(jasonMachete,5);
        var jason_nm = setInterval(jasonNoMachete,5);


        function frameLeft() {
            knifeSound.play();
            knifeSound.volume = 0.2;
            if (pos === 600) {
                clearInterval(id_left);
                macheteLeft.style.top = '40px'
                macheteLeft.style.left = '5px'
            } else {
                pos += 3;
                pos2 -= 3.8;
                macheteLeft.style.top = pos + 'px';
                macheteLeft.style.left = pos2 + "px";
                console.log(pos)
            }

        }
    }
    else if (event.keyCode === KEY_RIGHT) {
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