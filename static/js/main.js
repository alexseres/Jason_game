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
                targetList[Math.floor(Math.random() * (4 - 0 + 1)) + 0];
            myMove()
        } else {
            pos += 0.2;
            elem.style.top = pos + '%';
        }
    }
}
myMove();