
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


  for (let i = 0; i < 16; i++){
    let x,y;
    do{
      x = floor(random(8));
      y = floor(random(8));
    } while (board[x][y] != null);
    board[x][y] = new pawn(x,y, i<8 ? color(255) : color(50));
  }
}
//dont forget to make commits after each important thing!