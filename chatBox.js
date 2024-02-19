document.getElementById("pInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addText();
    }});

function addText(){
    var ul = document.getElementsByClassName("chatBox");
    var li = document.createElement("li");
    var text = document.getElementById("pInput");
    li.appendChild(document.createTextNode(text.value));
    ul[0].appendChild(li);
    text.value = "";
}