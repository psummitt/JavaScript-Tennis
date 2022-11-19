var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 5;
var ballSpeedY = 5;

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
    ballX += ballSpeedX;
    if(ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }
    if(ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    }
}

function drawEverything() {
    // next line blanks out the screen with black
    colorRect(0.0.canvas.width, canvas.height, 'black');
    // this is the left player paddle
    colorRect(0,210,10,100, 'white');
    // next line draws the ball
    colorCircle(ballX, 150, 10, 'white');
}

function colorCircle(centerX, centerY, radius, drawColor) {
    canvasContext.fillstyle = drawColo;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.Pi*2, true);
    canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillstyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}
