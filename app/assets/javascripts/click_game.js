var clicks_to_win = 5;
var clicks = 0;

function clickBox() {
  clicks++;

  if(clicks === clicks_to_win) {
    alert("You win!");
  }
}