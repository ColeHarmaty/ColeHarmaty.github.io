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
//midpart of head
ctx.fillStyle = "#CFA185";
ctx.fillRect(600, 1000, 1800, 1000);
//hair
ctx.beginPath();
ctx.moveTo(2500, 1000);
ctx.arc(1500, 1000, 900, 0, Math.PI, true);
ctx.lineTo(700, 1000);
ctx.arc(1500, 1000, 700, Math.PI, 0);
ctx.closePath();
ctx.fillStyle = "#34241C";
ctx.fill();
//eyebrows
ctx.fillStyle = "#000000"
ctx.fillRect(800, 1100, 400, 50);
ctx.fillRect(1800, 1100, 400, 50);
//lips
ctx.fillStyle = "#CE7C74";
ctx.fillRect(1250, 1550, 500, 100);
ctx.fillStyle = "#000000";
ctx.fillRect(1250, 1595, 500, 5);
//right eye
ctx.beginPath();                                                                
ctx.arc(2000, 1300, 85, 0, 2 * Math.PI);                                        
ctx.fillStyle = "#749256";                                                      
ctx.fill();
ctx.beginPath();
ctx.arc(2000, 1300, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#000000";
ctx.fill();
//use a black circle for center of eye
//use green circle around black circle

//left eye
ctx.beginPath();                                                                 
ctx.arc(1000, 1300, 85, 0, 2 * Math.PI);                                        
ctx.fillStyle = "#749256";                                                       
ctx.fill();            
ctx.beginPath();                                                                
ctx.arc(1000, 1300, 50, 0, 2 * Math.PI);                                        
ctx.fillStyle = "#000000";                                                      
ctx.fill();

