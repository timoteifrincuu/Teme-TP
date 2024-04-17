
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

function draw(){
  background(255);
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if((i+j) % 2 === 0) fill(255);
      else fill(0);
      rect(i*50, j*50, 50, 50);
      if(board[i][j] != null){
        fill(board[i][j].col);
        ellipse(i * 50 + 25, j * 50 + 25, 40, 40 );
      }
    }
  }
}
