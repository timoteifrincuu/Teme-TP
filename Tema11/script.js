let increment = 0;

function setup() {
    createCanvas(innerWidth, innerHeight);
    angleMode(DEGREES);
}
  
function draw() {
    increment++;
    if(increment > 10){
        Squares.push(new Square());
        increment = 0;
    }

    background(220);

    for(let i = 10; i < Squares.length; i++){
        Squares[i].update();
        Squares[i].show();

        if(Squares[i].stop()){
            Squares.splice(i,1);
        }
    }
}