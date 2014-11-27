var correctPath = ["1B", "1C", "2C", "3C", "3B", "4B", "4A", "5A", "6A", "6B", "6C", "7C", "7D", "7E", "6E", "5E", "4E", "3E", "2E", "2F", "2G", "3G", "4G", "5G", "6G", "7G", "8G", "9G", "10G", "10F", "10E", "10D", "11D", "12D", "13D", "14D", "14C", "13C", "12C", "12B", "11B", "11A", "12A", "13A", "14A", "14B", "15B", "15C", "15D", "15E", "15F", "15G", "14G", "13G", "13H", "13I", "13J", "14J", "15J"];


var letterCount = 0;

function crazyMaze(div) {
  var box = div.innerHTML;
  if (box === "1A") {
    resetMaze();
    div.className = div.className+" hover";
  }
  else if (box === correctPath[letterCount]) {
    div.className = div.className+" hover";
    letterCount++;
  }
  else if (box === "15J" && correctPath[letterCount] === "15J") {
    alert("Congrads!!! You won!");
  }
  else {
  resetMaze();   
  }
}

function resetMaze() {
  var divs = document.getElementsByClassName("box");
  for(var i=0; i < divs.length; i++) {
    divs[i].className = "box col-md-2";
  }
  letterCount = 0;
}

function solution() {
var boxLetters = [];
var divs = document.getElementsByClassName("box");
  for(var i=0; i < divs.length; i++) {
    boxLetters.push(divs[i].innerHTML);
  }
  for(var i=0; i < boxLetters.length; i++) {
    for(var j=0; j < correctPath.length; j++) {
        if (boxLetters[i] === correctPath[j]) {
          divs[i].className = divs[i].className+" completeSolution";
        }
    }
  }
}








