function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0,0,0);
    soare(200, 200, 10, 50);
    orbita(200,200,100,60);
    orbita(200,200,200,70);
    orbita(200,200,300,80);
    orbita(200,200,380,100);
    fill(230,100,20);
    planete(210,170,5);
    fill(230,100,220);
    planete(275,220,10);
    fill(50,200,220);
    planete(80,220,20);
    fill(200,20,20);
    planete(350,170,20);
    fill(255,255,255);
    text('The Solar System', 150, 80);
}

function orbita(x,y,d1, d2){
    stroke(255,255,255);
    ellipse(x,y,d1,d2);
    noStroke();
}

function soare(x, y, d, raze){
    fill(255, 204, 0);
    noStroke();
    ellipse(x, y, d * 2);

    for (let i = 0; i < raze; i++) {
        let angle = map(i, 0, raze, 0, TWO_PI);
        let sx = x + cos(angle) * d;
        let sy = y + sin(angle) * d;
        let ex = x + cos(angle) * d * 3;
        let ey = y + sin(angle) * d * 2;
        stroke(255, 204, 0);
        line(sx, sy, ex, ey);
        noStroke();
        noFill();
    }
}

function planete(x,y,d){
    ellipse(x,y,d*2);
}