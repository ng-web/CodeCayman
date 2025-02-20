// caching our elements
const btnChangeText = document.getElementById("changeText");
const btnChangeStyle = document.getElementById("changeStyle");
const btnAddElement = document.getElementById("addElement");

// update text event
btnChangeText.addEventListener("click", () => {
  document.getElementById("para1").textContent = `Text has been changed!`;
});

// update style
btnChangeStyle.addEventListener("click", () => {
  document.getElementById("para1").style.color = "#ff0000";
  document.getElementById("para1").style.fontSize = "22px";
});

// add element 
btnAddElement.addEventListener("click", () => {
  let newPara = document.createElement("p");
  newPara.textContent = "New paragraph added dynamically!";
  document.getElementById("container").appendChild(newPara).style.color = "#b4b4b4";
  document.getElementById("container").style.fontStyle = "italic";
});

// toggle light switch
function toggleLight() {
  const lightSwitch = document.getElementById("lightSwitch");
  if (lightSwitch.src.match("bulboff")) {
    lightSwitch.src = "img/pic_bulbon.gif";
  }else{
    lightSwitch.src = "img/pic_bulboff.gif";
  }  
}

// mouse hover event
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", () => {
  hoverBox.classList.add("hovered");
});

hoverBox.addEventListener("mouseleave", () => {
  hoverBox.classList.remove("hovered");
});

// keyboard event
  document.getElementById("keyInput").addEventListener("keyup", (event) => {
    document.getElementById("keyDisplay").textContent = "You pressed: " + event.key;

    // challenge: perform an action based on a particular key press
});

// animate Todo list
  document.getElementById("animateList").addEventListener("click", () => {
      let items = document.querySelectorAll("#animList li");
      items.forEach((item, index) => {
        setTimeout(() => {
          item.style.transform = "scale(1.2)";
          item.style.transition = "transform 0.5s";
        }, index * 300)  ;    
      setTimeout(() => {
        item.style.transform = "scale(1)";
      }, (index * 300) + 500);
  });
});