
// document.getElementById("mycanvas").addEventListener("mousehover", draw);
// function draw(){
// #TODO: TOOL `SELECT`
// #TODO: ERASER
let drawing = false;
let x = 0;
let y = 0;

//jsut for some debugging
let mousedown = false;
let mousemove = false;
let mouseup = false;


// boolean check for different tools
let pencil = true;  //for now drawing bool works fine
let eraser = false;
let bucket_fill = false;
let line = false;
let brush = false;


//listen for different events
document.querySelector('#pencil').addEventListener('click', ()=> {
    pencil = true;
    eraser = false;
    line = false;
});

document.querySelector('#line').addEventListener('click', ()=> {
    line = true;
    eraser = false;
    pencil = false;
});

document.querySelector('#eraser').addEventListener('click', ()=> {
    line = false;
    eraser = true;
    pencil = false;
});


const mycanvas = document.getElementById('myCanvas');
const context = mycanvas.getContext('2d');
console.log("what");

mycanvas.addEventListener('mousedown', e => {
    document.querySelector('#status-mouse-up').innerHTML = "mouse-up: false";
    document.querySelector('#status-mouse-down').innerHTML = "mousedown: true";
    x = e.offsetX;
    y = e.offsetY;
    console.log("mousedown");
    if (pencil == true){
        drawing = true;
    }
    
});

mycanvas.addEventListener('mousemove', e => {
    document.querySelector('#status-mouse-move').innerHTML = "mousemove: True";
    if (drawing === true) {
        drawline(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

mycanvas.addEventListener('mouseup', e => {
    document.querySelector('#status-mouse-down').innerHTML = "mouse-down: false";
    document.querySelector('#status-mouse-up').innerHTML = "mouse-up: true";
    if (drawing === true) {
        drawline(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        drawing = false;
    }
    if (line === true) {
        drawline(context, x, y, e.offsetX, e.offsetY);
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

//this is just to make sure things are all right
// funciton to clear canvas
function clearcanvas() {
    context.clearRect(0, 0, mycanvas.width, mycanvas.height);
}


