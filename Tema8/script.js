function setup() {
    createCanvas(400, 400);
    a = new Array(7);
    for (i = 0; i < 7; i++) {
      b = new Array(4);
      for (j = 0; j < 4; j++) {
        b[j] = {
          x: i,
          y: j,
          r: int(random(0, 255)),
          g: int(random(0, 255)),
          b: int(random(0, 255)),
          afiseaza: function afiseaza() {
            stroke(0, 0, 0);
            strokeWeight(1);
            fill(this.r, this.g, this.b);
            square(20 + this.x * 30, 20 + this.y * 30, 25);
            textSize(5);
            text(this.x + 1 + this.y * 7, 30 + this.x * 30, 35 + this.y * 30);
          },
        };
      }
      a[i] = b;
    }
  }
  
  function draw() {
    background(220);
    boxes();
  }
  
  function boxes() {
    for (i = 0; i < 7; i++) {
      for (j = 0; j < 4; j++) {
        a[i][j].afiseaza();
      }
    }
  }
  