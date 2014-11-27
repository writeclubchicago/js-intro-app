//Unfinished!!!!!!!!!!!!!!!!!!



var boxesClicked = [];
var count = 0;
var numberOfBoxesToClick = 10;
var letterObjects = { 1:"A", 2:"B", 3:"C", 4:"D", 5:"E", 6:"F", 7:"G", 8:"H", 9:"I", 10:"J" };



function clickNumber(letter, box) {
  if(letter === nextNumber) {
    box.style["background-color"] = colors[number];

    if(number === winningNumber) {
      alert("You've won!");
    }

    nextNumber++;
  }
}