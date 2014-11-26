var winningNumber = 10;
var nextNumber = 1;
var colors = [null, "red", "orange", "yellow", "green", "blue", "purple", "white", "brown", "pink", "cyan"]


function clickNumber(number, box) {
  if(number === nextNumber) {
    box.style["background-color"] = colors[number];

    if(number === winningNumber) {
      alert("You've won!");
    }

    nextNumber++;
  }
}