var spaces = ["", "", "", "", "", "", "", "", ""];
var currentTurn = "x";

function checkIfWon() {
  if((spaces[0] && spaces[0] == spaces[1] && spaces[1] == spaces[2]) ||
     (spaces[3] && spaces[3] == spaces[4] && spaces[4] == spaces[5]) ||
     (spaces[6] && spaces[6] == spaces[7] && spaces[7] == spaces[8]) ||
     (spaces[0] && spaces[0] == spaces[3] && spaces[3] == spaces[6]) ||
     (spaces[1] && spaces[1] == spaces[4] && spaces[4] == spaces[7]) ||
     (spaces[2] && spaces[2] == spaces[5] && spaces[5] == spaces[8]) ||
     (spaces[0] && spaces[0] == spaces[4] && spaces[4] == spaces[8]) ||
     (spaces[2] && spaces[2] == spaces[4] && spaces[4] == spaces[6])) {

    alert('Youve won!!');
  }
}

function addSpace(position){
  if(currentTurn === "x"){
    spaces[position] = "x";
  }else{
    spaces[position] = "o";
  }
}

function switchTurn(){
  if(currentTurn === "x"){
    currentTurn = "o"
  }else{
    currentTurn = "x";
  }
}

function fillInSpace(box){
  if(currentTurn === "x"){
    box.className += " x";
  }else{
    box.className += " o";
  }
}

function takeTurn(boxNum, box){
  addSpace(boxNum);
  fillInSpace(box);
  checkIfWon();
  switchTurn();
}



