let middleX;
let middleY;
let gameAreaXClose;
let gameAreaXFar;
let gameAreaYClose;
let gameAreaYFar;
let mousePressedTrue = false;
let firstPoint = false;
let secondPoint = false;
let thirdPoint = false;
let i = 0;
let bubbles = [];
let numBubbles = 20;    // number of bubbles to display
let score = 0;
 
function setup() {
 createCanvas(windowWidth, windowHeight);
 middleX = windowWidth / 2;
 middleY = windowHeight / 2;
 gameAreaYClose = windowWidth / 4;
 gameAreaYFar = windowWidth / 3/4;
 gameAreaXClose = windowHeight / 4;
 gameAreaXFar = windowHeight / 3/4;

 //create bubbles  (number of bubbles created = numBubbles)
 for (let i = 0; i < numBubbles; i++) {
   let x = random(150, windowWidth - 150);
   let y = random(210, windowHeight - 190);
   let radius = 60;
   bubbles[i] = new Bubble(x, y, radius);
 }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].mouseClicked();
  }
}

function draw() {
  noStroke();
  fill("#9AEFFF");
  //Main Bar
  rect(0,0, windowWidth, windowHeight / 1/8);
  //Restart Button
  rect(10, windowHeight - 120, windowWidth / 1/10, windowHeight / 1/10, 20);
  fill(250, 254, 255);
  stroke("#1E1B1B");
  strokeWeight(5);
  textAlign(CENTER);
  textSize(40);
  text("Score : " + score, windowWidth / 2.1, windowHeight / 1/12);
  text("Exit", windowWidth / 1/25, windowHeight / 1/12);
  
  //Text Above Play Area
  strokeWeight(1);
  fill("#1E1B1B");
  text("Pop the bubbles", windowWidth / 2,windowHeight / 1/5 );

  fill("#9AEFFF");
  strokeWeight(4);
  stroke(69, 63,252);

  //display bubbles
  for (let i = 0; i < numBubbles; i++) {
    bubbles[i].display();
  }
  }

function traceTriangle() {
if (mousePressedTrue == true && mouseX <=  windowWidth / 1.38 & mouseX >= windowWidth - (windowWidth / 1.36) & mouseY <= windowHeight / 1.38 & mouseY >= windowHeight - (windowHeight / 1.38) && mousePressedTrue == true) {
  
  fill("Black");
  stroke("Black");
  noStroke();
  ellipse(mouseX, mouseY, 30, 30);
  }

  else {}
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = color(154, 239, 255, 90);
  }

  display() {
    stroke(87, 92, 255, 90);
    strokeWeight(4);
    fill(this.col);
    ellipse(this.x, this.y, this.r);
  } 

  mouseClicked() {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < 30) {    // 30 is half the radius of a bubble
      this.col = color("#00FF9A");
      score += 1;
    }  
  }
}