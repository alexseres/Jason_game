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

function keypress(event) {

    if (event.keyCode === KEY_LEFT) {
        var macheteLeft = document.getElementById("machete-left");
        var jason = document.getElementById("jason");
        var jasonWithoutMachete = document.getElementById("jason-without-machete");
        var macheteRight = document.getElementById("machete-right");
        var pos = 0;
        let pos2 = 0;
        var id_left = setInterval(frame, 5);

        function frame() {
            if (pos > 400) {
                clearInterval(id_left);
                macheteLeft.style.top = '0px'
            } else {
                pos += 3;
                pos2 += 0.3;
                macheteLeft.style.top = pos + 'px';
                macheteLeft.style.bottom = pos2 + "px";
                console.log(pos)
            }
        }
    }
    else if (event.keyCode === KEY_RIGHT) {
        var macheteLeft = document.getElementById("machete-left");
        var jason = document.getElementById("jason");
        var jasonWithoutMachete = document.getElementById("jason-without-machete");
        var macheteRight = document.getElementById("machete-right");
        var pos = 0;
        let pos2 = 0;
        var id_right = setInterval(frame, 5);

        function frame() {
            if (pos > 400) {
                clearInterval(id_right);
                macheteRight.style.top = '0px'
            } else {
                pos += 3;
                pos2 += 0.3;
                macheteRight.style.top = pos + 'px';
                macheteRight.style.bottom = pos2 + "px";
                console.log(pos)
            }
        }
    }
}

