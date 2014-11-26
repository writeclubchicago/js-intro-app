var clicks = 0;

function changeColorClick(box) {
  clicks++;
  var colors = ["blue", "green", "red", "orange", "yellow"];
  
  box.style["background-color"] = colors[clicks];
  if (clicks === 5) {
    alert("You win!");
  } else {
    console.log("Keep clicking!");
  }
}
