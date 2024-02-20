document.getElementById("pInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addText();
    }});

function addText(){
    var start = document.getElementsByClassName("lastText");
    var newText = document.createElement("p");
    newText.className = "lastText";
    var text = document.getElementById("pInput");
    newText.appendChild(document.createTextNode(text.value));
    start[start.length-1].insertAdjacentElement("afterend",newText);
    text.value = "";
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