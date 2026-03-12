let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let ChimpsSaved = 0;
let time = 0;
let Magic = 0;

//If you need, add any "helper" functions here
function waitThenCall(target){
	setTimeout(target,2000);
}
function EndGame(){
waitThenCall(let gameActive = false;);
}
function timecheck(){
	time =+ 1;
if (time == 6){
print("\n\tYou can feel something nasty sweep over you, like the shadow of a superpredator,\nbut with an added sense of disgust. It's searching for you, and you don't want\nto find out what will happen when it finds you. You get the sense that if you\ndon't get out now, you'll never be able to escape it completly.");
}
if (time == 7){
print("\n\tSuddenly, a wave of terror washes over you. Somehow, you know that it's\nmarked you. You will forever carry it's shadow. It's best that you get out of here\nquickly.");
}
if (time == 11){
	print("\n\tYou can feel that IT is nearly here. Your heart is pounding,\nblood racing as you are filled with terror. If you don't get out of here now,\nsomething horrible will happen to you.");
}
if (time == 12){
	print("\n\tSuddenly, you feel that it's too late for you. IT is here, and\nthere is nothing you can do. You can feel IT's pressure on your mind, as it begins to\ncrack. You resist, but it is futile. In less time than it takes to blink an eye,\nyou are reborn into IT's perfect slave, one who can plant the seed of the universe's\nremaking into IT's image. Three months later, humanity is dust, the electromagnetic radation\nemitted centuries ago the only hint that there was ever anything other than the\nIT's race of perfect servants in what was once known as Sol.");
	EndGame();
}
}
// This function prints text out to the terminal                                
function print(text) { 
    const output = document.getElementById('output');                           
    const line = document.createElement('div');                                 
    line.innerHTML = "<p>" + text + "</p>";                                     
    output.appendChild(line);                                                   
    output.scrollTop = output.scrollHeight;                                     
}
//clears the output screen.                                                     
//this isn't really necessary, but I found that the output                      
//looked cluttered if I didn't clear it every time the user                     
//enters a new command                                                          
function clear() {
	document.getElementById('output').innerHTML = '';
}
// This lets the user type input. It acts a little weird.                       
// Don't worry too much yet about how it works. Just know                       
// that when you press the enter key, it grabs what you typed                   
// and passes it to a function called `handleInput`                             
document.getElementById('user-input').addEventListener('keypress', function(e) {(
    if (e.key === 'Enter' && gameActive) {                                      
        const input = this.value.trim();                                        
        this.value = '';                                                        
        print('> ' + input);                                                    
        handleInput(input);                                                     
    }                                                                           
)};                                                                             
                                                                                
//This function will be overridden by the current game state                    
function handleInput(input) {                                                   
    console.log("No handler for input: " + input);                              
}                                                                               
                                                                              
//This is the function you should call in your game code. Its                   
//input is a function that takes a string and decides what to do with it        
function waitForInput(handlerFunction){                                         
    handleInput = handlerFunction;                                              
}                                                                              
function stayHere(){
	print("\nYou just stand there.");
}
//This is the function you should call in your game code. Its                   
//input is a function that takes a string and decides what to do with it 

//Make one function for each location
function Cafeteria() {
    clear();
    print("You are surrounded by tentacle monsters, and time is frozen." +"\nYou can either run, or stop trying to keep the power in your head, well in \nyour head. You can sense that it will doing something, but you're not sure\nwhat");
    print("\n What do you want to do? Say one of these choices:" +
        "\n\run"+"\nlet the power out");
    
    function processInput(input){
        if (input.toLowerCase() === "run") {
		time =+ 5;
		print("\nYou've never did any kind of sports, but pherhaps you should've\n. You sprint for the door with the speed of a cheetah, and it shows.\n Unfortunatly, they are faster than you are. You are about to be torn\napart by the tenactles when the chimps burst through the door, there faces\nshowing what, on a human, would be a smile. On a chimpaneze, it means they\nare pissed. They leap on to the monsters with a savage fury, tearing them\napart in a savage display of guts and fury. They pay for their injuries, but\nall the chimps survive. They will need medical treatement. You don't want\nto find out what is in those claws the hard way. You know you can find \nwhat you need in the Chimp Zone. You file out into the hallway with the chimps\n and firmly lock the door behind you. When you look behind you, the chimps are gone.");		
        } else {
            Magic =+ 1;
		print("You stop holding the power in. It shoots out of you in a sphere \nshaped ripple of something. When the ripple passes over the tentacle monsters,\nthey seem to crumble to dust. You stumble out the door, your headaching, and something urging you to check on the chimps.")
        }
    }
    waitThenCall(Hallway);
}

function Hallway() {
    clear();
	timecheck();
    print("\nYou are in the Hallway, with the door to the cafeteria shut and sealed\n firmly behind you. From here, you can see the signs saying ChimpZone,\nCafeteria, and Reactor.");
    print("\nWhat do you want to do next? Say one of these choices:" + "Stay Here"+"\n\tGo To Cafeteria"+"\n\tGo to ChimpZone"+"Go to Reactor");
    
    function processInput(input){
        if (input.toLowerCase() === "Cafeteria") {
            print("You try to step into the Cafeteria. But as you move to open the doors, you flash back to the moment everyone you cared for, everyone but your distant aquantances, died. You jump back from the door like you've been burned. You won't go back there.");
time =+ 5;
waitThenCall(Hallway);
        }
	    else {
		   if (input.toLowerCase() === "chimpzone"){
			   ChimpZone();
		   }
			   else if (input.toLowerCase() === "reactor"){
			   {
				   Reactor();
			   }
			   else {
				   StayHere();
				   Hallway();
			   }
        }
    }
    waitForInput(processInput);
}
}

function ChimpZone() {
clear();
timecheck();                                                            
    print("\nYou are in the ChimpZone! The Chimps live here and most of the \ntime, so do you. You are the one who takes care of the chimps, after all.\nEverything you could want to care for an injured chimp can be found here. Al\nthe chimps' other supplies are also here, from toys to toilets. There is a booth\nacross the room where the chimps can pilot the ship from in the case of\nhumans turning out to be unable to navigate the Void. It requires permission codes\nto be activated, and you don't have all the codes nessecary to do so.\n\n\tUnfortunalty, even though the helm is almost certainly logged in,it still requires\nthose codes to activate the booth down here. You don't have enough time to jury-rig\na solution. Otherwise, you'd let the chimps do the job they were so good at,\nand get you out of here. The human helm is also significantly more complex than\nthe one down here, as it does other functions besides controlling the ship in\nthe Void. Otherwise, you'd be bringing a chimp with you to the helm.");
	if (ChimpsSaved === 0){
		print("\nThere are four injured chimps in cages.");
	}
	if(Magic > 0){
		print("How did they get injured? They never left there cages.");
	}
	else{
print("I didn't hallucinate the chimps saving me after all. They have the same\ninjuries that I saw them take in the cafeteria. But then, how did they get here,")	
	}
	print("\nWhat do you want to do? Say one of these choices:" + "\nStay Here"+ "\nGo To Hallway");
	if (ChimpsSaved === 0){
		print("\nHelp The Chimps");
	}
function processInput(input){
	if (input.toLowerCase() === "help the chimps"){
ChimpsSaved =+ 1;
print("\nYou spend a few minutes cleaning out the chimps' wounds. It's soothing, and, based\non the fact that the flesh was starting to change color, you don't want to know\nwhat would've happened if you forgot to check on the chimps.");
	ChimpZone();
	}
	else if (input.toLowerCase() === "Hallway"){
		Hallway();
	}
	else{
	StayHere();
	ChimpZone();
	}
}
}
function Reactor(){
	clear();
	timecheck();
	print("\nYou are in the Reactor! This is where the ship's power");
	print("\nis generated in a state of the art fusion reactor, and");
print("\n where the ship's Void drive, currently powered down is. At least, that's\n what you've been told. For all you know, it could be a really expensive\npeice of modern art. There should be people here, or at least what used to\nbe people, but there aren't any more. The only thing here that you haven't seen 20\ntimes before makes you feel like you got stabbed in the chest the instant you see\nit.\n\n\tA man in a security officers uniform, his body halfway transformed into one of\nthose things, half man and half monstrosity, with his left arm halfway transformed into\na tentacle. Given the gun in his hand and the way his skull looks like it exploded,\nyou now know roughly whathappened here.\nIn a daze, you do something very stupid, something that your biology teachers would\nyell at you for so much as considering, you touch the corpse. You recognize it in a heartbeat.\n\n\tSergeant Alexander Ivanov, the head of the security forces on this ship. People\nget rowdy in space, and the most he usaully has to deal with is breaking up a fistfight.\nYou feel the urge to salute to him, knowing what must have happened. You indulge\nit. It's nowhere near what he deserves, what any of the 299 ghosts that died on this\nship deserve, but something is better than nothing. And you will be thatsomething.\n "I'll see you on the other side in about 5 minutes if this doesn't work,"\nYou tell him, having seen the sign leading to the helm.\n\n\tWhat do you want to do? Say one of these choices:" + "\nStay Here" + "\nGo back to the Hallway" + "Go to the Helm");
function processInput(input){
	if (input.toLowerCase === "go back to the hallway"){
		Hallway();
}
else if (input.toLowerCase === "go to the helm"){
	Helm();
}
else{
StayHere();
	Reactor();
}
}
}
function Helm(){                                                            
        clear();
	timecheck();
print("\nThe Helm. Where the ship is piloted from. Normally, you'd never be here.\nIn a world where the pilot wasn't dead, you wouldn't. The helm is blinking just\n as you predicted. It's still logged in. It looks familiar to you, just as you\nhoped. You've never done this before, never trained for it, but you've helped\nthe chimps do so enough to instantly identify most of the controls, and seen\nenough of the sims the chimps trained in to have an idea of what you need to\ndo to fly the ship."+"\n\nWhat do you want to do? Say one of these choices:" + "\nStay Here" + "\nGo back to the Reactor" + "fly the Ship");
function processInput(input){
	if (input.toLowerCase === "go back to the reactor"){
                Reactor();
	}
	else if (input.toLowerCase === "fly the ship"){
		Ending();
	}
else{
	stayHere();
	Helm();
}
}
}
function Ending(){
clear();
	if (ChimpsSaved == 0){
print("\n\tThere's something that you forgot, you think to yourself as you strap into\nthe pilot's chair. But it can't be too important. You begin to punch in the codes\nwhen a sharp pain becomes the last thing you ever feel. As your vision grows dark\n, a glimpse of your killer's mutated face is the last thing you ever see. You\nrealize what you forgot: you really ought to have checked on the chimps.");
	}
	else if (Magic === 1){
if(time === 6){
	print("\n\tYou strap into the pilots chair, and begin to look over the controls. It's\nfar more familair than you expected. It doesn't feel like this is the first\ntime you've flown a ship. It feels like the thousandth. You can here something\ncalling to you in the distance, and feel the shadow of something Other that has\npassed over the ship recently. The sound is the most beautiful thing you've\never heard, and the shadow makes you recoil in horror. You can feel the shadow\ntrying to taint you, but you were too quick for it to get more than a passing\nglimpse into your soul.\n\n\tYou fly the ship through the Void with the efficency of a butterfly crossing\nthe Sahara. It only takes you two minutes to get out of the Void, as you take a\npath full of twists and turns. You punch through into realspace at the ships\noriginal destination with a feeling of disappointment that is shortly followed\nby the same feeling you get from stepping out of a muddy pit. Both the shadow and\nthe song are weaker here, but the shadow is more weakened. You punch in the com and\ncall out to the ships around you. You were succesful beyond all expectations\nat piloting the ship. Now it's time to figure out what happened to everyone else.\n\n\tTwo weeks later, you are teaching humanity's first course on psionics. It turns out\nthat cryostasis, at least when combined with some drugs, protects from the Shadow's influence.");
}else{
print("\n\tYou hurridly strap into the pilot's chair and dash through the Void,\nhoping As you escape the Void, you can feel the Shadow's taint on you. You\nwill be able to purge most of it, but some trace will haunt you for the rest of your days.")
}
} else{
print("\n\tYou don't even strap into the pilot's chair. You don't have time for that.\nYou push the ship hard and fast as you dash out of the Void. You are out in 30 seconds.\nYou can feel that any longer, and you would've suffered a fate too horrible for\na human mind to imagine. The ships behind you see a closing portal cut off a\ntentacle. Humanity abandons the Void as a method of travel and classifies the\nincident. You spend the rest of your days as a paranoid wreck, always looking over\nyour shoulder. Humanity barely discovers FTL in time to prevent World War III,\nand billions die before then from the turmoilrip out of the Void like a bat\nout of hell, feeling IT chase you.");
}
EndGame();
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("\n\tThe first manned FTL test. Of course something like this would happen.\n Of course everyone else would turn into eldritch abominations the instant we entered the Void.\nOf course it seems that I could now stop time. It's obviously logical\nthat that would give me a headache, and that I couldn't hold onto it\nfor that long. It's also sensible that I seem to be psionic.");
waitThenCall(Cafeteria());
}
start();
