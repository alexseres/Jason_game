function myMove() {
    let elem = document.getElementById("target");
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos > 88) {
            clearInterval(id);
            elem.style.top = '0px';
            myMove()
        } else {
            pos += 0.2;
            elem.style.top = pos + '%';
        }
    }
}
myMove();