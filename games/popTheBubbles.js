const bubbleVars = {
  mousePressedTrue: false,
  firstPoint: false,
  secondPoint: false,
  thirdPoint: false,
  // i: 0,
  bubbles: [],
  numBubbles: 12, // number of bubbles to display
  score: 0,
  generate: true,
};

function popTheBubbles(bell, wrongInput) {
  if (bubbleVars.generate) {
    for (let i = 0; i < bubbleVars.numBubbles; i++) {
      let x = random(150, windowWidth - 150);
      let y = random(210, windowHeight - 190);
      let radius = 60;
      bubbleVars.bubbles[i] = new Bubble(x, y, radius);
    }
    bubbleVars.generate = false;
  }
  noStroke();
  fill("#9AEFFF");
  //Main Bar
  rect(0, 0, windowWidth, windowHeight / 1 / 8);
  //Restart Button
  rect(10, windowHeight - 120, windowWidth / 1 / 10, windowHeight / 1 / 10, 20);
  fill(250, 254, 255);
  stroke("#1E1B1B");
  strokeWeight(5);
  textAlign(CENTER);
  textSize(40);
  text("Score : " + bubbleVars.score, windowWidth / 2.1, windowHeight / 1 / 12);
  text("Exit", windowWidth / 1 / 25, windowHeight / 1 / 12);

  //Text Above Play Area
  strokeWeight(1);
  fill("#1E1B1B");
  text("Pop the bubbles", windowWidth / 2, windowHeight / 1 / 5);

  fill("#9AEFFF");
  strokeWeight(4);
  stroke(69, 63, 252);

  //display bubbles
  for (let i = 0; i < bubbleVars.numBubbles; i++) {
    bubbleVars.bubbles[i].display();
  }
}

function mousePressed() {
  const arr = [];
  let count = 0;
  for (let i = 0; i < bubbleVars.bubbles.length; i++) {
    arr.push(bubbleVars.bubbles[i].mouseClicked());
  }

  if(!hasFalse(arr)){
    background(255, 28, 62, 240);
    if (buzz.isPlaying()) {
      // .isPlaying() returns a boolean
      buzz.stop();
      background(255, 28, 62, 240);
      text('You missed the bubble. Keep trying!', windowWidth / 2, windowHeight / 1.08);
    } else {
      buzz.play();
      background(255, 28, 62, 240);
      text('You missed the bubble. Keep trying!', windowWidth / 2, windowHeight / 1.08);
    }

  }

  if (hasFalse(arr)) {
    background(240, 250, 255); //refreshes background as white
    count = count + 1;
  }

  if(bubbleVars.score >= bubbleVars.numBubbles) {
    if (winnerSound.isPlaying()) {
      // .isPlaying() returns a boolean
      winnerSound.stop();
      background(0, 255, 154, 100);
      text('Congratulations, you popped the bubbles!', windowWidth / 2, windowHeight / 1.22);
    } else {
      winnerSound.play();
      background(0, 255, 154, 100);
      text('Congratulations, you popped the bubbles!', windowWidth / 2, windowHeight / 1.22);
    }
  }
}

// This function looks through an array of boolean values and returns true if at least one value is false
function findTruth(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === false) {
      return true;
    }
  }
  return false;
}

// This function looks through an array of boolean values and returns true if at least one value is true
function hasFalse(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      return true;
    }
  }
  return false;
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
    if (distance < 30) {
      // 30 is half the radius of a bubble
      this.col = color("#00FF9A");
      bubbleVars.score += 1;
      return true;
    }
    return false;
  }
}
