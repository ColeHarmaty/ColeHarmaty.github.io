const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
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
//neck
ctx.fillRect(1000, 2000, 1000, 1000);
//shirt top
ctx.fillStyle = "#D2D0C2";
ctx.fillRect(0, 3000, 3000, -700);
//shirt gap
ctx.fillStyle = "#FF00FF";
ctx.fillRect(500, 0, 200, -200);
ctx.fillRect(2000, 0, 200, -200);
//facial stuble
ctx.fillStyle = "#BF9175";
ctx.fillRect(600, 1500, 1800, 50);
ctx.fillRect(600, 1500, 200, 400);
ctx.fillRect(2200, 1500, 200, 400);
ctx.fillRect(1200, 1100, 600, 50);
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
//nose shadows
ctx.fillStyle = "#000000";
ctx.beginPath();
ctx.moveTo(1400, 1350);
ctx.arc(1350, 1350, 50, 0, Math.PI, true);
ctx.closePath();
ctx.fill();
ctx.beginPath();                                                                
ctx.moveTo(1600, 1350);                                                          
ctx.arc(1550, 1350, 50, 0, Math.PI, true);                                       
ctx.closePath();                                                                
ctx.fill();
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
//glasses circle
ctx.beginPath();
ctx.arc(1000, 1300, 200, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(2000, 1300, 200, 0, 2 * Math.PI);
ctx.stroke();
//nose bridge glasses
ctx.fillStyle = "#000000";
ctx.fillRect(1150, 1200, 700, 40);
//nose bridge face side
ctx.fillRect(600, 1200, 200, 40);
ctx.fillRect(2200, 1200, 200, 40);
//hair down sides
ctx.fillRect(600, 1000, 200, 100);
ctx.fillRect(2200, 1000, 200, 100);
//cowlick
ctx.fillRect(1600, 500, 400, 200);
