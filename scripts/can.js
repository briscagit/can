function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

document.onclick = function() {
    var inlineCanvas = document.getElementById("inlineCanvas");
    var canvas = document.createElement("canvas");
    // 1920 = 2^7 * 3   * 5
    // 1080 = 2^3 * 3^3 * 5
    // 2^7 = 128
    canvas.width = 128
    canvas.height = 135
    document.body.insertBefore(canvas,inlineCanvas);
    var ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'red';
    // there is no printf equivalent in js
    color = "rgb(" + randomInt(256) + "," + randomInt(256) + "," + randomInt(256) + ")"
    ctx.fillStyle = color
    // fillRect(x,y,width,height)
    ctx.fillRect(0,0,128,135);
}
