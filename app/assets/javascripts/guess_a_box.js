var winningBox = Math.floor((Math.random() * 3)); // Picks a random number between 0 and 2:

function guessBox(boxGuessed, box) {
  if (boxGuessed === winningBox) {
    box.className += " right";
    alert("You win!");
  } else {
    box.className += " wrong";
    console.log("wrong");
  }

}


