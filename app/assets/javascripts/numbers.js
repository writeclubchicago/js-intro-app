var nextNumber = 1;
var lastNumber = 10;

function clickNumber(number, box) {
  if (number === nextNumber) {
    box.style["background-color"] = "green";

    if (number === lastNumber) {
      alert("You've won!");
    }

    nextNumber++;

  }
}
