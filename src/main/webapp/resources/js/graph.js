let SIZE = 320;
let primary = (SIZE-50)/10;

var rounded = function(number){
    return +number.toFixed(2);
}

function normalizeX(x, left, right) {
    x_center = left+(right-left)/2;
    return rounded((x-x_center)/primary);
}

function normalizeY(y, top, bottom) {
    y_center = top + (bottom-top)/2;
    return rounded((y_center - y)/primary);
}

function drawDot(x, y, left, top, color) {
    let graph = document.getElementById("graph");
    let ctx = graph.getContext("2d");

    ctx.fillStyle = color;
    ctx.fillRect(x - left,y - top,4,4);
}

function drawNormDot(norm_x, norm_y, left, right, top, bottom, color) {
    x_center = left+(right-left)/2;
    y_center = top + (bottom-top)/2;
    x = norm_x * primary + x_center;
    y = -norm_y * primary + y_center;
    drawDot(x, y, left, top, color);
}


function drawGraph(r) {
    let graph = document.getElementById("graph");
    let ctx = graph.getContext("2d");

    ctx.fillStyle = "#FBEAEB";
    ctx.fillRect(0,0,SIZE,SIZE);

    drawFigures(ctx, r);
    drawAxis(ctx, r);

}

function drawFigures(ctx, r) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(66, 170, 255, 0.5)";
    ctx.strokeStyle = "rgba(66, 170, 255, 0.5)";
    drawCircle(ctx, r);
    drawRectangle(ctx, r);
    drawTriangle(ctx, r);
}

function drawCircle(ctx, r) {
    ctx.beginPath();
    ctx.moveTo(SIZE/2, SIZE/2);
    ctx.arc(SIZE/2, SIZE/2, r/2*primary, Math.PI, 3/2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

function drawRectangle(ctx, r) {
    ctx.beginPath();
    ctx.fillRect(SIZE/2, SIZE/2, r*primary, -r*primary);
    ctx.stroke();
}

function drawTriangle(ctx, r) {
    ctx.beginPath();
    ctx.moveTo(SIZE/2-r*primary, SIZE/2);
    ctx.lineTo(SIZE/2, SIZE/2+r/2*primary);
    ctx.lineTo(SIZE/2, SIZE/2);
    ctx.lineTo(SIZE/2-r*primary, SIZE/2);
    ctx.fill();
    ctx.stroke();
}

function drawAxis(ctx, r) {
    drawXAxis(ctx, r);
    drawYAxis(ctx, r);
    drawXValues(ctx, r);
    drawYValues(ctx, r);
}

function drawXAxis(ctx, r) {
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(10, SIZE/2);
    ctx.lineTo(SIZE-10, SIZE/2);
    ctx.lineTo(SIZE-15, SIZE/2+3);
    ctx.moveTo(SIZE-10, SIZE/2);
    ctx.lineTo(SIZE-15, SIZE/2-3);
    ctx.fillText("x", SIZE-10, SIZE/2-5);
    ctx.stroke();
}

function drawYAxis(ctx, r) {
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(SIZE/2, SIZE-10);
    ctx.lineTo(SIZE/2, 10);
    ctx.lineTo(SIZE/2+3, 15);
    ctx.moveTo(SIZE/2, 10);
    ctx.lineTo(SIZE/2-3, 15);
    ctx.fillText("y", SIZE/2+5, 10);
    ctx.stroke();
}

function drawXValues(ctx, r) {
    ctx.font = 10 + 10*r/5 + "px serif";
    ctx.beginPath();
    ctx.fillText(-r, SIZE/2-r*primary-5, SIZE/2-5);
    ctx.moveTo(SIZE/2-r*primary, SIZE/2);
    ctx.lineTo(SIZE/2-r*primary, SIZE/2-3);
    ctx.lineTo(SIZE/2-r*primary, SIZE/2+3);

    ctx.fillText(-r/2, SIZE/2-r*primary/2-5, SIZE/2-5);
    ctx.moveTo(SIZE/2-r*primary/2, SIZE/2);
    ctx.lineTo(SIZE/2-r*primary/2, SIZE/2-3);
    ctx.lineTo(SIZE/2-r*primary/2, SIZE/2+3);

    ctx.fillText(r/2, SIZE/2+r*primary/2-5, SIZE/2-5);
    ctx.moveTo(SIZE/2+r*primary/2, SIZE/2);
    ctx.lineTo(SIZE/2+r*primary/2, SIZE/2-3);
    ctx.lineTo(SIZE/2+r*primary/2, SIZE/2+3);

    ctx.fillText(r, SIZE/2+r*primary-5, SIZE/2-5);
    ctx.moveTo(SIZE/2+r*primary, SIZE/2);
    ctx.lineTo(SIZE/2+r*primary, SIZE/2-3);
    ctx.lineTo(SIZE/2+r*primary, SIZE/2+3);
    ctx.stroke();
}

function drawYValues(ctx, r) {
    ctx.font = 10 + 10*r/5 + "px serif";
    ctx.beginPath();
    ctx.fillText(r, SIZE/2+5, SIZE/2-r*primary+5);
    ctx.moveTo(SIZE/2, SIZE/2-r*primary);
    ctx.lineTo(SIZE/2-3, SIZE/2-r*primary);
    ctx.lineTo(SIZE/2+3, SIZE/2-r*primary);

    ctx.fillText(r/2, SIZE/2+5, SIZE/2-r*primary/2+5);
    ctx.moveTo(SIZE/2, SIZE/2-r*primary/2);
    ctx.lineTo(SIZE/2-3, SIZE/2-r*primary/2);
    ctx.lineTo(SIZE/2+3, SIZE/2-r*primary/2);

    ctx.fillText(-r/2, SIZE/2+5, SIZE/2+r*primary/2+5);
    ctx.moveTo(SIZE/2, SIZE/2+r*primary/2);
    ctx.lineTo(SIZE/2-3, SIZE/2+r*primary/2);
    ctx.lineTo(SIZE/2+3, SIZE/2+r*primary/2);

    ctx.fillText(-r, SIZE/2+5, SIZE/2+r*primary+5);
    ctx.moveTo(SIZE/2, SIZE/2+r*primary);
    ctx.lineTo(SIZE/2-3, SIZE/2+r*primary);
    ctx.lineTo(SIZE/2+3, SIZE/2+r*primary);
    ctx.stroke();
}