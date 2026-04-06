const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//hair
//creates an individaul hair
ctx.beginPath();
	ctx.moveTo(380, 380);
	ctx.lineTo(480, 480);
	ctx.lineTo(500, 480);
	ctx.lineTo(400, 380);
	ctx.closePath();
	ctx.fill();
ctx.stroke();
//top of head
ctx.beginPath();
ctx.moveTo(2500, 1000);
ctx.arc(1500, 1000, 900, 0, Math.PI, true);
ctx.closePath();
ctx.fillStyle = "#CFA185";
ctx.fill();
//hair
ctx.beginPath();
ctx.moveTo(2500, 1000);
ctx.arc(1500, 1000, 900, 0, Math.PI, true);
ctx.lineTo(700, 1000);
ctx.arc(1500, 1000, 700, Math.PI, 0);
ctx.closePath();
ctx.fillStyle = "#34241C";
ctx.fill();
//left eye

//use a black circle for center of eye
//use green circle around black circle

//right eye

//left eye brow
//use paired elipses
//right eye brow
