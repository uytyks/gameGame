document.getElementById("pInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      var text = document.getElementById("pInput");
      addText(text.value);
      text.value = "";
    }});

function addText(textToAdd){
    var start = document.getElementsByClassName("lastText");
    var newText = document.createElement("p");
    newText.className = "lastText";
    newText.appendChild(document.createTextNode(textToAdd));
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