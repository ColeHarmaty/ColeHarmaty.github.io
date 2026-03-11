let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let ChimpsSaved = 0;
let time = 0;
let Magic = 0;

//If you need, add any "helper" functions here
function timecheck(){
	time =+ 1;
}
// This function prints text out to the terminal                                
function print(text) { 
    const output = document.getElementById('output');                           
    const line = document.createElement('div');                                 
    line.innerHTML = "<p>" + text + "</p>";                                     
    output.appendChild(line);                                                   
    output.scrollTop = output.scrollHeight;                                     
}
	//this formats text inside a pre tag.                                           
//it just makes sure that HTML doesn't mess with spacing                        
//tip - ASCII art will need to escape any backslashes!                          
//      so to print \, you'll need to say \\                                    
function printAscii(art) {                                                      
    const output = document.getElementById('output');                           
    const pre = document.createElement('pre');                                  
    pre.className = 'ascii-art';                                                
    pre.textContent = art;                                                      
    output.appendChild(pre);                                                    
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
});                                                                             
                                                                                
//This function will be overridden by the current game state                    
function handleInput(input) {                                                   
    console.log("No handler for input: " + input);                              
}                                                                               
                                                                              
//This is the function you should call in your game code. Its                   
//input is a function that takes a string and decides what to do with it        
function waitForInput(handlerFunction){                                         
    handleInput = handlerFunction;                                              
}                                                                               
                                                                                
function waitThenCall(target){                                                  
    setTimeout(target,2000);                                                    
}                                                                              
function stayHere(){
	print("\nsorry, I don't understand your input. I'll assume you " + "want to stay here");
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
            print"You try to step into the Cafeteria. But as you move to open the doors, you flash back to the moment everyone you cared for, everyone but your distant aquantances, died. You jump back from the door like you've been burned. You won't go back there.";
time =+ 5;
waitThenCall(Hallway);
        }
	    else {
		   if (input.toLowerCase() === "chimpzone"){
			   ChimpZone();
		   }
			   else {
			   if (input.toLowerCase() === "reactor"){
				   Reactor();
			   }
			   else if (input.toLowerCase != "reactor"){
				   StayHere();
				   waitThenCall(Hallway);
			   }
	   
        }
    }
    waitForInput(processInput);
}


function ChimpZone() {
clear();
timecheck();                                                            
    print("\nYou are in the ChimpZone! The Chimps live here and most of the \ntime, so do you. You are the one who takes care of the chimps, after all.\nEverything you could want to care for an injured chimp can be found here. Al\nthe chimps' supplies are here, from toys to toilets.");
	if (ChimpsSaved === "0"){
		print("\nThere are four injured chimps in cages.");
	}
	if(Magic > 0){
		print("How did they get injured? They never left there cages.")
	}
	else{
print("I didn't hallucinate the chimps saving me after all. They have the same\ninjuries that I saw them take in the cafeteria. But then, how did they get here,")
i	}
	print("\nWhat do you want to do? Say one of these choices:" + "\nStay Here"+ "\nGo To Hallway");
	if (ChimpsSaved === "0"){
		print("\nHelp The Chimps")
	}
function processInput(input){
	if (input.toLowerCase() === "help the chimps"){
ChimpsSaved =+ 1;
time--;
print("You spend a few minutes cleaning out the chimps' wounds");
	ChimpZone();
	}
	else if (input.toLowerCase() === "Hallway"){
		Hallway();
	}
	else{
	StayHere();
	ChimpZone();
	}
function Reactor(){
	clear();
	timecheck();
	print("\nYou are in the Reactor! This is where the ship's power");
	print("\nis generated in a state of the art fusion reactor, and");
print("\n where the ship's Void drive, currently powered down is. At least, that's\n what you've been told. For all");
	//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("The first manned FTL test. Of course something like this would happen.\n Of course everyone else would turn into eldritch abominations the instant we entered the Void.\nOf course it seems that I could now stop time. It's obviously logical\nthat that would give me a headache, and that I couldn't hold onto it\nfor that long. It's also sensible that I seem to be psionic.");
waitThenCall(Cafeteria);
    function processInput(input){
            Cafeteria();
    }
    waitForInput(processInput);
}
start();
