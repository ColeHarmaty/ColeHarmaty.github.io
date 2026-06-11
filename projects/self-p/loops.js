let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
for (let x = 0; x <= 700; x = x + 100) {
ctx.fillRect(x, 50, 20, 20);
}
