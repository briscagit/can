function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

document.onclick = function() {
    var inlineCanvas = document.getElementById("inlineCanvas");
    var canvas = document.createElement("canvas");
    document.body.insertBefore(inlineCanvas,canvas);
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';
    // fillRect(x,y,width,height)
    ctx.fillRect(30,30,100,100);
}
