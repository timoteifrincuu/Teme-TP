
let board = [];
let pawn = function(x,y,col){
  this.x = x;
  this.y = y;
  this.col = col;
}

function setup(){
  createCanvas(400,400);
  for(let i = 0; i < 8; i++){
    board[i] = [];
    for (let j = 0; j < 8; j++){
      board[i][j] = null;
    }
  }
}



//dont forget to make commits after each important thing!