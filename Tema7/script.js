function setup() {
    createCanvas(400, 400);
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