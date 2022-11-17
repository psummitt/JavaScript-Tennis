var canvas;
var canvasContext;
var ballX = 50

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(function () {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);
}

function moveEverything() {
    ballX += 5;

}


function drawEverything() {

    canvasContext.fillstyle = 'black';
    canvasContext.fillRect(0.0.canvas.width, canvas.height);
    canvasContext.fillstyle = 'white';
    canvasContext.fillRect(0,210,10,100);
    canvasContext.fillstyle = 'red';
    canvasContext.fillRect(ballX,200,10,10);
}