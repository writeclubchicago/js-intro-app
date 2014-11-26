var boxesClicked = [];
var count = 0;
var numberOfBoxesToClick = 10;
var car = { 1:"A", 2:"B", 3:"C", 4:"D", 5:"E", 6:"F", 7:"G", 8:"H", 9:"I", 10:"J" };


function tenClick(number, box) {
  boxesClicked[number] = count;
  count++;
  checkOrder(box);
}

function checkOrder(box) {
  for(var i = 0; i < count; i++) {  
    if (i === 9 && boxesClicked[i] === 9) {
      alert("You've won!");
    }
    else if (boxesClicked[i] === i)   {
      console.log(boxesClicked[i]);
      console.log(i);
      console.log(i + " box clicked");
      var color = '#'+Math.floor(Math.random()*16777215).toString(16);
      box.style["background-color"] = color;

    }
    else {
      console.log("Sorry, that wasn't the right order");
      boxesClicked = [];
      count = 0;
      style["background-color"] = "pink";
      break;
    }
  }

}