function clickHandler(e){
  const mouseX = e.offsetX, mouseY = e.offsetY;
  for(const j of junk) {
    junk_min_x = j.x - 12*j.size;
    junk_max_x = j.x + 12*j.size;
    junk_min_y = j.y - 12*j.size;
    junk_max_y = j.y + 12*j.size;

    //TODO: write some code here that checks whether
    //(mouseX, mouseY) is inside j
if (junk_min_x <= mouseX && mouseX <= junk_max_x && junk_min_y <= mouseY && mouseY <= junk_max_y) {
j.alive = false; 
}
}
}

canvas.addEventListener('click', clickHandler);

function checkCollisions(){
    //todo - loop through all junk/ship pairs
    //check to see whether they're colliding.
    //If so, set both of their alive to false
    for(const j of junk) {
        for(const s of ships){
            if(j.alive && s.alive){
                jminx = j.x - 12*j.size;
                jmaxx = j.x + 12*j.size;
                jminy = j.y - 12*j.size;
                jmaxy = j.y + 12*j.size;

                sminx = s.x - 15*s.size;
                smaxx = s.x + 15*s.size;
                sminy = s.y - 15*s.size;
                smaxy = s.y + 15*s.size;
if(smaxx > jminx && sminx < jmaxx &&
	smaxy > jminy && sminy < jmaxy
) {
	j.alive = false;
	s.alive = false;
            }
        }
    }
}
