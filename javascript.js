
// document.getElementById("mycanvas").addEventListener("mousehover", draw);
// function draw(){
// #TODO: TOOL `SELECT`
// #TODO: ERASER
let drawing = false;
let x = 0;
let y = 0;


// boolean check for different tools
let pencil = true;  //for now drawing bool works fine
let eraser = false;
let bucket_fill = false;
let line = false;
let brush = false;


//listen for different events
document.querySelector('#pencil').addEventListener('click', ()=> {
    drawing = true;
    pencil = true;
    eraser = false;
    line = false;
    alert("here, here");
});

document.querySelector('#line').addEventListener('click', ()=> {
    line = true;
    eraser = false;
    pencil = false;
    alert("here, here");
});

document.querySelector('#eraser').addEventListener('click', ()=> {
    line = false;
    eraser = true;
    pencil = false;
    alert("here, here");
});


const mycanvas = document.getElementById('myCanvas');
const context = mycanvas.getContext('2d');
console.log("what");

mycanvas.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    console.log("mousedown");
    if (pencil == true){
        drawing = true;
    }
    
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

//this is just to make sure things are all right
function clearcanvas() {
    context.clearRect(0, 0, mycanvas.width, mycanvas.height);
}


