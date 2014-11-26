
var firstBox = false
var secondBox = false
var thirdBox = false

function threeEach(box) {
  if (box === 0) {
    firstBox = true;
  }
  else if (box === 1) {
    secondBox = true;
  }
  else if (box === 2) {
    thirdBox = true;
  }
  if (firstBox === true && secondBox === true && thirdBox === true) {
    alert("Congrads! You clicked all the boxes!");
  }
  console.log(firstBox);
  console.log(secondBox);
  console.log(thirdBox);
}
