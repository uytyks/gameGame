import { tutorialFn, pAlign } from "./tutorial.js";

//User Input
document.getElementById("pInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      var text = document.getElementById("pInput");

      var pColor = ""
      //user color picker
      if(pAlign === ""){
        pColor = "white";
      }
      else if(pAlign === "good"){
        pColor = "yellow";
      }
      else{
        pColor = "red";
      }
      addText(text.value, pColor);
      tutorialFn(text.value);
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
}
