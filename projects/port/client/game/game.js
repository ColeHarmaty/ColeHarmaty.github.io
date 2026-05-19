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

function EndGame() {
print("GAME OVER");
	gameActive = false;
throw new Error("This error is intentional and a normal part of code execution, it terminates the program.");
}
function timecheck() {
	time++;
if (time === 6) {
print("\n\tYou can feel something nasty sweep over you, like the shadow of a superpredator,\nbut with an added sense of disgust. It's searching for you, and you don't want\nto find out what will happen when it finds you. You get the sense that if you\ndon't get out now, you'll never be able to fully escape it.");
}
if (time === 7) {
print("\n\tSuddenly, a wave of terror washes over you. Somehow, you know that it's\nmarked you. You will forever carry it's shadow. It's best that you get out of here\nquickly.");
}
if (time === 11) {
	print("\n\tYou can feel that IT is nearly here. Your heart is pounding,\nblood racing as you are filled with terror. If you don't get out of here now,\nsomething horrible will happen to you.");
}
if (time === 12) {
	print("\n\tSuddenly, you feel that it's too late for you. IT is here, and\nthere is nothing you can do. You can feel IT's pressure on your mind, as it begins to\ncrack. You resist, but it is futile. In less time than it takes to blink an eye,\nyou are reborn into IT's perfect slave, one who can plant the seed of the universe's\nremaking into IT's image. Three months later, humanity is dust, the electromagnetic radiation\nemitted centuries ago the only hint that there was ever anything other than the\nIT's race of perfect servants in what was once known as Sol.");
	EndGame();
}
}

function StayHere() {
print("\n\tYou just stand there for a few minutes. Say one of the choices listed above.");
timecheck();
}
//This is the function you should call in your game code. Its                   
//input is a function that takes a string and decides what to do with it 

//Make one function for each location
function Cafeteria() {
    print("\n\tYou are surrounded by tentacle monsters, and time is frozen." +"\nYou can either run, or stop trying to keep the power in your head, well in\nyour head. You can sense that it will doing something, but you're not sure\nwhat");
    print("\nWhat do you want to do? Say one of these choices:" + "\n\trun"+"\n\tlet the power out");
    
    function processInput(input){
        if (input.toLowerCase() === "run") {
		time += 5;
		print("\n\tYou never did any kind of sports, but perhaps you should've.\nYou sprint for the door with the speed of a cheetah, and it shows.\nUnfortunately, they are faster than you are. You are about to be torn\napart by the tentacles when the chimps burst through the door, there faces\nshowing what, on a human, would be a smile. On a chimpanzee, it means they\nare pissed. The chimps leap on to the monsters with a savage fury, tearing them\napart in a savage display of guts and fury. They pay for their valor, but\nall the chimps survive. They will need medical treatment. You don't want\nto find out what is in those claws the hard way. You know you can find \nwhat you need in the Chimp Zone. You file out into the hallway with the chimps\nand firmly lock the door behind you. When you look behind you, the chimps are gone.");		
        Hallway();
	} else if (input.toLowerCase() === "let the power out") {
            Magic++;
		print("\n\tYou stop holding the power in. It shoots out of you in a sphere \nshaped ripple of something. When the ripple passes over the tentacle monsters,\nthey seem to crumble to dust. You stumble out the door, your headaching, and something urging you to check on the chimps.");
       Hallway();
	}
    }
	waitForInput(processInput);
}

function Hallway() {
	timecheck();
    print("\n\tYou are in the Hallway, with the door to the cafeteria shut and sealed\nfirmly behind you. From here, you can see the signs saying ChimpZone,\nCafeteria, and Reactor.");
    print("\nWhat do you want to do next? Say one of these choices:" + "\n\tGo To Cafeteria"+"\n\tGo to ChimpZone"+"\n\tGo to Reactor");
    function processInput(input){
        if (input.toLowerCase() === "go to cafeteria") {
            print("\n\tYou try to step into the Cafeteria. But as you move to open the doors,\nyou flash back to the moment everyone you cared for, everyone but your distant\naquantances, died. You jump back from the door like you've been burned. You\nwon't go back there.");
waitThenCall(Hallway());
        }
	    else {
		   if (input.toLowerCase() === "go to chimpzone"){
			   ChimpZone();
		   }
			   else if (input.toLowerCase() === "go to reactor"){
			    Reactor(); 
			   }
        }
    }
    waitForInput(processInput);
}

function ChimpZone() {
timecheck();                                                            
    print("\n\tYou are in the ChimpZone! The chimps live here and most of the \ntime, so do you. You are the one who takes care of the chimps, after all.\nEverything you could want to care for an injured chimp can be found here. Al\nthe chimps' other supplies are also here, from toys to toilets. There is a booth\nacross the room where the chimps can pilot the ship from in the case that\nhumans turned out to be unable to navigate the Void. It requires permission codes\nto be activated, and you don't have all the codes necessary to do so.\n\n\tUnfortunalty, even though the helm is almost certainly logged in,it still requires\nthose codes to activate the booth down here. You don't have enough time to jury-rig\na solution. Otherwise, you'd let the chimps do the job they were so good at,\nand get you out of here. The human helm is also significantly more complex than\nthe one down here, as it does other functions besides controlling the ship in\nthe Void. Otherwise, you'd be bringing a chimp with you to the helm.");
	if (ChimpsSaved === 0){
		print("\nThere are four injured chimps in cages.");
	}
	if(Magic === 1 && ChimpsSaved === 0){
		print("\nHow did they get injured? They never left their cages.");
	}
	else{
print("\n\tI didn't hallucinate the chimps saving me after all. They have the same\ninjuries that I saw them take in the cafeteria. Though, if that's the case, then how did they get here?");	
	}
	print("\nWhat do you want to do? Say one of these choices:" + "\nGo To Hallway");
	if (ChimpsSaved === 0){
		print("\nHelp The Chimps");
	}
function processInput(input){
	if (input.toLowerCase() === "help the chimps"){
ChimpsSaved = 1;
print("\n\tYou spend a few minutes cleaning out the chimps' wounds. It's soothing, and, based\non the fact that the flesh was starting to change color, you don't want to know\nwhat would've happened if you forgot to check on them.");
	ChimpZone();
	}
	else if (input.toLowerCase() === "go to hallway"){
		Hallway();
	}
}
waitForInput(processInput);
}
function Reactor(){
	clear();
	timecheck();
	print("\n\tYou are in the Reactor! This is where the ship's power is generated in\na state of the art fusion reactor, and where the ship's Void drive, currently powered down, is. At least,\nthat's what you've been told. For all you know, it could be a really expensive\npeice of modern art. There should be people here, or at least what used to\nbe people, but there aren't any more. The only thing here that you haven't seen 20\ntimes before makes you feel like you got stabbed in the chest the instant you see\nit.\n\n\tA man in a security officers uniform, his body halfway transformed into one of\nthose things, half man and half monstrosity, with his left arm halfway transformed into\na tentacle. Given the gun in his hand and the way his skull looks like it exploded,\nyou now know roughly what happened here.\n\n\tIn a daze, you do something very stupid, something that your biology teachers would've\nyelled at you for so much as considering, you touch the corpse. You recognize it in a heartbeat.\n\n\tSergeant Alexander Ivanov, the head of the security forces on this ship. People\nget rowdy in space, and the most he usually has to deal with is breaking up a fistfight or\ntwo. You feel the urge to salute to him, knowing what must have happened. You indulge\nit. It's nowhere near what he deserves, what any of the 299 ghosts that died on this\nship deserve, but something is better than nothing. And you will be that something.\n\"I'll see you on the other side in about 5 minutes if this doesn't work,\"\nYou tell him, having seen the sign leading to the helm.\n\nWhat do you want to do? Say one of these choices:\n\tGo back to the Hallway\n\tGo to the Helm");
function processInput(input){
	if (input.toLowerCase() === "go back to the hallway"){
		Hallway();
}
else if (input.toLowerCase() === "go to the helm"){
	Helm();
}
}
waitForInput(processInput);
}
function Helm(){                                                            
	timecheck();
print("\n\tThe Helm. Where the ship is piloted from. Normally, you'd never be here.\nIn a world where the pilot wasn't dead, you wouldn't. It is blinking just\nas you predicted. It's still logged in. It looks familiar to you, just as you\nhoped. You've never done this before, never trained for it, but you've helped\nthe chimps do so enough to instantly identify most of the controls, and seen\nenough of the sims the chimps trained in to have an idea of what you need to\ndo to fly the ship.\n\nWhat do you want to do? Say one of these choices:\n\tGo back to the Reactor\n\tfly the Ship");
function processInput(input){
	if (input.toLowerCase() === "go back to the reactor"){
                Reactor();
	}
	else if (input.toLowerCase() === "fly the ship"){
Ending();
	}
}
waitForInput(processInput);
}
function Ending(){
clear();
	if (ChimpsSaved === 0){
print("\n\tThere's something that you forgot, you think to yourself as you strap into\nthe pilot's chair. But it can't be too important. You begin to punch in the codes\nwhen a sharp pain becomes the last thing you ever feel. As your vision grows dark\n, a glimpse of your killer's mutated face is the last thing you ever see. You\nrealize what you forgot: you really ought to have checked on the chimps.");
	}
	else if (Magic === 1){
if(time === 6){
	print("\n\tYou strap into the pilot's chair, and begin to look over the controls. It's\nfar more familiar than you expected. It doesn't feel like this is the first\ntime you've flown a ship. It feels like the thousandth. You can here something\ncalling to you in the distance, and feel the shadow of something Other that has\npassed over the ship recently. The sound is the most beautiful thing you've\never heard, and the shadow makes you recoil in horror. You can feel the shadow\ntrying to taint you, but you were too quick for it to get more than a passing\nglimpse into your soul.\n\n\tYou fly the ship through the Void with the efficiency of a butterfly crossing\nthe Sahara. It only takes you two minutes to get out of the Void, as you take a\npath full of twists and turns. You punch through into realspace at the ship's\noriginal destination with a feeling of disappointment that is shortly followed\nby the same feeling you get from stepping out of a muddy pit. Both the Shadow and\nthe Song are weaker here, but the Shadow is more weakened. You punch in the com and\ncall out to the ships around you. You were successful beyond all expectations\nat piloting the ship. Now it's time to figure out what happened to everyone else.\n\n\tTwo weeks later, you are teaching humanity's first course on psionics. It turns out\nthat cryostasis, at least when combined with some drugs, protects from the Shadow's influence.");
}else{
print("\n\tYou hurriedly strap into the pilot's chair and dash through the Void,\nhoping to escape IT's influence. It is a close call, but you make it out\nwithout encountering IT. As you dash through the twisted maze of spacetime\nyou realize that there's something else in the Void, something nicer, like\na comforting,guiding Song. You get the feeling the Song's influence is the\ngreatest reason you aren't dead. As you re-enter realspace, you can feel the\nShadow's taint, for IT is the Shadow and the Shadow is it, and it is not\nlimited to the Void. Nor is the Song. The mark the Shadow branded on your soul\nweakens, enough that you will be able to purge most of it, but some traces\nwill haunt you for the rest of your days. Your dedication to the Song will\nbe your guiding light. That is what will guide humanity through the Void.");
}
} else{
print("\n\tYou don't even strap into the pilot's chair. You don't have time for that.\nYou push the ship hard and fast as you dash out of the Void. You are out in 30 seconds.\nYou can feel that any longer, and you would've suffered a fate too horrible for\na human mind to imagine. The ships behind you see a closing portal cut off a\ntentacle. Humanity abandons the Void as a method of travel and classifies the\nincident. You spend the rest of your days as a paranoid wreck, always looking over\nyour shoulder. Humanity barely discovers FTL in time to prevent World War III,\nand billions die before then. Earth is ruined, and humanity abandons it's homeworld,\ncrawling through the dark between the stars in ships barely faster than light.");
}
EndGame();
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
print("\n\tThe first manned FTL test. Of course something like this would happen.\nOf course everyone else would turn into eldritch abominations the instant we entered the Void.\nOf course it seems that I could now stop time. It's obviously logical\nthat that would give me a headache, and that I couldn't hold onto it\nfor that long. It's also sensible that I seem to be psionic.");
function processInput(input){
	Cafeteria();
}
waitForInput(processInput);
}
