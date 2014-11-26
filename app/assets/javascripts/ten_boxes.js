var boxesClicked = [];
var numberOfBoxesToClick = 10;
var count = 0;

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
