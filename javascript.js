
// document.getElementById("mycanvas").addEventListener("mousehover", draw);
// function draw(){
// #TODO: TOOL `SELECT`
// #TODO: ERASER
let drawing = false;
let x = 0;
let y = 0;


const mycanvas = document.getElementById('myCanvas');
const context = mycanvas.getContext('2d');
console.log("what");

mycanvas.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    console.log("mousedown");
    drawing = true;
});

mycanvas.addEventListener('mousemove', e => {
    if (drawing === true) {
        drawline(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

mycanvas.addEventListener('mouseup', e => {
    if (drawing === true) {
        drawline(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        drawing = false;
    }
});

function drawline(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  }

document.querySelector('#clear').addEventListener('click', clearcanvas);
  
function clearcanvas() {
    context.clearRect(0, 0, mycanvas.width, mycanvas.height);
}


