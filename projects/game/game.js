let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let ChimpsSaved = 0;
let time = 0;
let Magic = 0;

//If you need, add any "helper" functions here
                                                                                
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
    print("\nsorry, I don't understand your input. I'll assume you " +          
        "want to stay here");                                                                                
//This is the function you should call in your game code. Its                   
//input is a function that takes a string and decides what to do with it 

//Make one function for each location
function Cafeteria() {
    clear();
    print("You are surrounded by tentacle monsters, and time is frozen." +"\nYou can either run, or stop trying to keep the power in your head, well in your head");
    print("\n What do you want to do? Say one of these choices:" +
        "\n\run"+"\nlet the power out");
    
    function processInput(input){
        if (input.toLowerCase() === "run") {
		time =+ 5;
		print("\nYou've never did any kind of sports, but pherhaps you should've\n 
            Hallway();
        } else {
            Magic =+ 1;
            ;
        }
    }
    waitForInput(processInput);
}

function Hallway() {
    clear();
	timecheck();
    print("\nYou are in the Hallway, with the door to the cafeteria shut and sealed\n firmly behind you.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tCafeteria"+"\n\tChimpZone);
    
    function processInput(input){
        if (input.toLowerCase() === "locationa") {
            print"You try to step into the Cafeteria. But as you move to open the doors, you flash back to the moment everyone you cared for, everyone but your distant aquantances, died. You jump back from the door like you've been burned. You won't go back there.";

        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

function ChimpZone() {
    clear();
        timecheck();
    print("\nYou are in the ChimpZone! The Chimps live here and most of the \n time, so do you. You are the one who takes care of the chimps, after all.\n Everything you could want to care for an injured chimp can be found here All the chimps' supplies are here, from toys to toilets.");
    print("\nWhere do you want to do? Say one of these choices:" +
        "\n\tlocationA");

    function processInput(input){
        if (input.toLowerCase() === "cafeteria") {
            print"You try to step into the Cafeteria. But as you move to open the \ndoors, you flash back to the moment everyone you cared for, everyone but \n your\ndistant aquantances, died. You jump back from the door like you've been\n burned. You won't go back there. You're never going back there.";
Hallway;
        } else {
		if (input.toLowercase() ==="
            stayHere();
            waitThenCall(locationB);
//This checks time levels
function timecheck(){
	time += 1;
}


//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("The first manned FTL test. Of course something like this would happen. Of course everyone else would turn into eldritch abominations the instant we entered the Void. Of course it seems that I could now stop time. It's obviously logical that that would give me a headache, and that I couldn't hold onto it for that long. It's also sensible that I seem to be psionic. Press any key to start");

    function processInput(input){
            Cafeteria();
    }
    waitForInput(processInput);
}
print("The first human FTL test. Of course something like this happens. Of course we 
start()

