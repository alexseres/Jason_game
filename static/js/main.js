// App = function() {
//     this.load = function(){
//     };
//     this.init = function(){
//     };
// };
//
// this.init = function(){
//     machete.setMinScreenSize(200,284);
//     machete.setMaxScreenSize(200,284);
// };
//
// machete.loadImage('static/images/machete.png');
//
// var jason;
// var sprite = new Sprite('images/ship.png');
// jason = new SceneObject(sprite, 0, 0, 0);
// machete.addSeceneObject(jason);
//
// this.onMouseMove = function(eventData) {
//     jason.setPosition(eventData.screenPosition.x,eventData.screenPosition.y);
// };
//
// var sprite = new Sprite('images/ship.png');
// var mousePosition = machete.getMousePosition();
// jason = newSceneObject(sprite, 0 , mousePosition.x, mousePosition.y);
// machete.addSceneObject(jason);

var SPACE_KEY = 32;
var RIGHT_KEY = 39;


document.addEventListener('keydown', shoot, false);

function shoot(event) {
    if (event.keyCode == SPACE_KEY) {
        var elem = document.getElementById("machete");
        var pos = 0;
        let pos2 = 0;
        var id = setInterval(frame, 5);

        function frame() {
            if (pos > 400) {
                clearInterval(id);
                elem.style.top = '0px'
            } else {
                pos += 3;
                pos2 += 0.3;
                elem.style.top = pos + "px";
                elem.style.bottom = pos2 + "px";
                console.log(pos)
            }
        }
    }
}


