import { tutorialFn, pAlign, tutorial } from "./tutorial.js";
import data from "./desc.json" assert { type: 'json' };

//later store this and pAlign in player js file
var pArea = 'tutorial';

//User Input
document.getElementById("pInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      console.log(data);
      event.preventDefault();
      var text = document.getElementById("pInput");

      var pColor = ""
      //user color picker
      if(pAlign === ""){
        pColor = "white";
        //test comment
      }
      else if(pAlign === "good"){
        pColor = "yellow";
      }
      else{
        pColor = "red";
      }
      addText(text.value, pColor);
      if(tutorial[3] == 0){
        tutorialFn(text.value);
      }
      else{
        console.log("user input parser");
      }
      //call checking for input function here
      text.value = "";
    }});


//Text Functions
export function addText(textToAdd, textColor){
    var start = document.getElementsByClassName("lastText");
    var newText = document.createElement("p");
    newText.className = "lastText";
    newText.appendChild(document.createTextNode(textToAdd));
    newText.style.color = textColor;
    start[start.length-1].insertAdjacentElement("afterend",newText);
    if(isOverflown(document.getElementById("mainBox"))){
      while(isOverflown(document.getElementById("mainBox"))){
        var start = document.getElementsByClassName("lastText");
        start[0].remove();
      }
    }
}

function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

function parse(text){
  var ar = text.split(' ');
  var action = ar[0];
  var obj = ar[1];
  if(action.toLowerCase() === 'look' && ar.length === 1){
    addText(data[pAlign][pArea][desc],'white');
  }
  else if(action.toLowerCase() === 'look'){
    //check if the object is in the area and you are allowed to view it
    addText(data[pAlign][pArea][action][obj]);
  }
  else if(action.toLowerCase() === 'go'){
    //if place to move exists, and you are in range to go there, print going text with a random adjective from a csv, and change area
  }
}
