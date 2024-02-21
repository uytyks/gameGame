import { addText } from "./chatBox.js";

//Start Game Variables
var tutorial = [0,0,0,0]
export var pName = ""
export var pAlign = ""

export function tutorialFn(input){
    if(tutorial[0] == 0 && input === "start"){
        tutorial[0] = 1;
        addText("And so our great adventure into The Beyond begins...\nWhat is your name?");
    }
    else if(tutorial[0] == 1 && tutorial[1] == 0){
        pName = input;
        tutorial[1] = 1;
        addText("Hello, " + pName + "!");
        addText("Next, What is your alignment? (GOOD or EVIL)");
    }
    else if (tutorial[1] == 1 && tutorial[2] == 0){
        if(input.toLowerCase() === "good" || input.toLowerCase() === "evil"){
            tutorial[2] = 1;
            pAlign = input.toLowerCase();
            addText("Aha! I see... You are " + pName + " the " + pAlign + "!");
        }
        else{
            addText("Ummm... That wasn't a valid option. Let's try this again.");
            addText("What is your alignment? (GOOD or EVIL)");
        }
    }
}