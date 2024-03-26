function setup() {
    createCanvas(400, 400);
  }
  
function draw() {
background(220);
fill(50, 100, 150);
rect(130, 240, 150, 150);
fill(255, 100, 100);
triangle(110, 250, 300, 250, 200, 150);
fill(100, 200, 250);
ellipse(200, 180, 20, 20);
line(200, 170, 200, 190);
line(190, 180, 210, 180);
fill(50, 100, 150);
rect(230, 170, 20, 40);
fill('white');
text('Casa de vis', 140, 240);
fill('brown');
rect(150, 320, 40, 70);
fill(100, 200, 250);
rect(200, 280, 30, 50);
rect(240, 280, 30, 50);
soare(120, 150, 20, 20);
}

function soare(x, y, d, raze) {
    fill(255, 204, 0);
    noStroke();
    ellipse(x, y, d * 2);
  
    for (let i = 0; i < raze; i++) {
      let angle = map(i, 0, raze, 0, TWO_PI);
      let sx = x + cos(angle) * d;
      let sy = y + sin(angle) * d;
      let ex = x + cos(angle) * d * 1.5;
      let ey = y + sin(angle) * d * 1.5;
      stroke(255, 204, 0);
      line(sx, sy, ex, ey);
      noStroke();
    }
  }
  