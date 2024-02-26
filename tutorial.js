import { addText } from "./chatBox.js";

//Start Game Variables
export var tutorial = [0,0,0,0]
export var pName = ""
export var pAlign = ""
export var tc = "white";

var root = document.documentElement;

export function tutorialFn(input){
    if(tutorial[0] == 0 && input.toLowerCase() === "start"){
        tutorial[0] = 1;
        addText("And so our great adventure into The Beyond begins...\nWhat is your name?",tc);
    }
    else if(tutorial[0] == 1 && tutorial[1] == 0){
        pName = input;
        tutorial[1] = 1;
        addText("Hello, " + pName + "!",tc);
        addText("Next, What is your alignment? (GOOD or EVIL)",tc);
    }
    else if (tutorial[1] == 1 && tutorial[2] == 0){
        if(input.toLowerCase() === "good" || input.toLowerCase() === "evil"){
            tutorial[2] = 1;
            pAlign = input.toLowerCase();
            addText("Aha! I see... You are " + pName + " the " + pAlign + "!",tc);
            if(pAlign === "good"){
                root.style.setProperty('--player', "yellow");
            }
            else{
                root.style.setProperty('--player', "#fc0303");
            }
            addText("Welcome to The Beyond! Feel free to LOOK around",tc)
        }
        else{
            addText("Ummm... That wasn't a valid option. Let's try this again.",tc);
            addText("What is your alignment? (GOOD or EVIL)",tc);
        }
    }
    else if (tutorial[2] == 1 && tutorial[3] == 0){
        if(input.toLowerCase() === "look"){
            tutorial[3] = 1;
            addText("Good! Feel free to LOOK around you when you do not know where to go next!",tc);
            addText("Type 'LOOK <THING>' to look at anything in CAPS",tc);
            addText("But back to the game,",tc);
            addText("===================================================",tc);
            addText("Ah yes, around you is a green valley!",tc);
            addText("Overgrown lush grass fills the cracks in the stony sidewalk beneath your feet.",tc);
            addText("It winds ahead of you towards a rickety SIGN barely holding on to life and a collection of wooden buildings.",tc);
            var textF = ""
            if(pAlign == "good"){
                textF = "heroic";
            }
            else{
                textF = "diabolical" ;
            }
            addText("A gentle breeze grazes your skin, it's the perfect day for " + textF + " deeds...",tc);
        }
        else{
            addText("*AHEM* I said 'Welcome to The Beyond! Feel free to ****LOOK**** around'",tc);
        }
    }
}