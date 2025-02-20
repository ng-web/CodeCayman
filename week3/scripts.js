  // Assign all elements
  const demoId = document.getElementById('demo');
  const demoClass = document.getElementsByClassName('demo');
  const demoTag = document.getElementsByTagName('article');
  const demoQuery = document.querySelector('#demo-query');
  const demoQueryAll = document.querySelectorAll('.demo-query-all');
  
  // Change border of ID demo to purple
  demoId.style.border = 'solid purple';
  
  //Change border of class demo to orange
  for (i = 0; i < demoClass.length; i++) {
    demoClass[i].style.border = 'dashed orange';
  }
  
  // Change border of tag demo to blue
  for (i = 0; i < demoTag.length; i++) {
    demoTag[i].style.border = '2px solid blue';
  }
  
  // Change border of ID demo-query to red
  demoQuery.style.border = '1rem solid green';
  
  // Change border of class query-all to green
  demoQueryAll.forEach(query => {
    query.style.border = 'thick double #32a1ce';
  });
  

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
  document.getElementById("para1").style.color = " #ff0000";
  document.getElementById("para1").style.fontSize = "22px";
});

// add element 
btnAddElement.addEventListener("click", () => {
  let newPara = document.createElement("p");
  newPara.textContent = "New paragraph added dynamically!";
  document.getElementById("container").appendChild(newPara).style.color = " #b4b4b4";
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
const button = document.getElementById('animateList');
const listItems = document.querySelectorAll('#animList li');

// button.addEventListener('click', () => {
//   listItems.forEach(item => {
//     item.classList.add('show');
//   }); 
// });

button.addEventListener('click', () => {
  let delay = 0; 
  listItems.forEach(item => {
    setTimeout(() => {
      item.classList.add('show');
    }, delay);
    delay += 500; // Adjust delay for desired interval (milliseconds)
  });
});

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

// Canvas API

// house drawing
const canvas = document.getElementById("graphics");
const ctx = canvas.getContext("2d");

// Set line width
ctx.lineWidth = 10;

// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();














 