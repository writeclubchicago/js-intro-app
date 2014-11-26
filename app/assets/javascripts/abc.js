var numberOfABCBox = 0
var alphabetWinner = 26

function abcBox(boxNumber, box){
  if (boxNumber===numberOfABCBox){
    numberOfABCBox++;
    box.style["background-color"] = "red";
  };

  if (numberOfABCBox === alphabetWinner){
    alert("You've won!")
  }
  
}

