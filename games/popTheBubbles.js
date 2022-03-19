let i = 0;
let bubbles = [];
let numBubbles = 20;
let score = 0;
let bubblesCreated = false;

function popTheBubbles() {
  noStroke();
  fill("#9AEFFF");
  //Main Bar
  rect(0, 0, windowWidth, windowHeight / 1 / 8);
  //Restart Button
  rect(10, windowHeight - 120, windowWidth / 1 / 10, windowHeight / 1 / 10, 20);
  fill("white");
  textAlign(CENTER);
  textSize(40);
  text("Score : ", windowWidth / 2 - 10, windowHeight / 1 / 8 - 50);
  text("Exit", windowWidth / 1 / 25, windowHeight / 1 / 8 - 50);

  //create bubbles  (number of bubbles created = numBubbles)
  if (!bubblesCreated) {
    for (let i = 0; i < numBubbles; i++) {
      let x = random(150, windowWidth - 150);
      let y = random(210, windowHeight - 190);
      let radius = 60;
      bubbles[i] = new Bubble(x, y, radius);
    }
    bubblesCreated = true;
  }

  //Text Above Play Area
  strokeWeight(1);
  fill("#1E1B1B");
  text("Pop the bubbles", windowWidth / 2, windowHeight / 1 / 5);

  fill("#9AEFFF");
  strokeWeight(4);
  stroke(69, 63, 252);
  //display bubbles
  for (let i = 0; i < numBubbles; i++) {
    bubbles[i].display();
    bubbles[i].mousePressedTrue();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  display() {
    stroke(80, 7, 245, 90);
    strokeWeight(4);
    fill(154, 239, 255, 200);
    //setAlpha(200);
    ellipse(this.x, this.y, this.r);
  }

  selected() {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < this.r) {
      fill("green");
      //console.log(this.x, this.y);
    }
  }

  mousePressedTrue() {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < this.r) {
      fill("green");
      console.log("Clicked");
    }
  }
}
