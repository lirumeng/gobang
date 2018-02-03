var me = true;
var chessBoard = [];
for (var i = 0; i < 15; i++) {
    chessBoard[i] = [];
    for (var j = 0; j < 15; j++) {
        chessBoard[i][j] = 0;
    }
}

var chess = document.getElementById('chess');
var context = chess.getContext('2d');

context.strokeStyle = '#bfbfbf';

var logo = new Image();
logo.src = 'images/appload.png';
logo.onload = function() {
    context.globalAlpha = 0.1;
    context.drawImage(logo, 117, 117, 216, 216);
    drawChessBoard();
    oneStep(0, 0, true);
    oneStep(1, 1, false);
}

var drawChessBoard = function() {
    for (var i = 0; i < 15; i++) {
        context.globalAlpha = 1;
        // 纵线
        context.moveTo(15 + 30 * i, 15);
        context.lineTo(15 + 30 * i, 435);
        context.stroke();

        // 横线
        context.moveTo(15, 15 + 30 * i);
        context.lineTo(435, 15 + 30 * i);
        context.stroke();
    }
}

var oneStep = function(i, j, me) {
    context.beginPath();
    context.arc(15 + 30 * i, 15 + 30 * j, 13, 0, 2 * Math.PI);
    context.closePath();
    var gradient = context.createRadialGradient(15 + 30 * i + 2, 15 + 30 * j - 2, 13, 15 + 30 * i + 2, 15 + 30 * j - 2, 0);
    if (me) {
        gradient.addColorStop(0, '#0a0a0a'); //第一个圆颜色
        gradient.addColorStop(1, '#636766'); //第二个圆颜色
    } else {
        gradient.addColorStop(0, '#d1d1d1'); //第一个圆颜色
        gradient.addColorStop(1, '#f9f9f9'); //第二个圆颜色
    }
    context.fillStyle = gradient;
    context.fill();
}

chess.onclick = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var i = Math.floor(x / 30);
    var j = Math.floor(y / 30);
    if (chessBoard[i][j] === 0) {
        oneStep(i, j, me);
        if (me) {
            chessBoard[i][j] = 1;
        } else {
            chessBoard[i][j] = 2;
        }
        me = !me;
    }
}