/*
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
*/

document.onclick = function() {
    var inlineCanvas = document.getElementById("inlineCanvas");
    var canvas = document.createElement("canvas");
    document.body.insertBefore(canvas,inlineCanvas);
    var ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'red';
    // there is no printf equivalent in js
    color = "rgb(" + Math.random() + "," + Math.random() + "," + Math.random() + ")"
    ctx.fillStyle = color
    // fillRect(x,y,width,height)
    ctx.fillRect(10,10,100,100);
}
