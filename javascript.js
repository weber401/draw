
onmousemove = function(e){
    console.log("mouse location:", e.clientX, e.clientY);
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(e.clientX,e.clientY,4,4);
}

