// reminder: fix the exit and info buttons to where they dont make any sound when clicked.

const bubbleVars = {
  mousePressedTrue: false,
  firstPoint: false,
  secondPoint: false,
  thirdPoint: false,
  // i: 0,
  bubbles: [],
  numBubbles: 15, // number of bubbles to display
  score: 0,
  generate: true,
  buzz: null,
  winnerSound: null,
  bubblePop: null,
  sadSound: null,
  happySound: null,
  currentScene: null,
  timer: 20,
  radius: 60,
  levelOne: true,
  playOnce: true,
  showInfo: false,
};

let direction = 0;
let translation = -10;
let reverse = false;

function popTheBubbles(buzz, winnerSound) {
  bubbleVars.buzz = buzz;
  bubbleVars.winnerSound = winnerSound;
  bubbleVars.bubblePop = bubblePop;
  bubbleVars.sadSound = sadSound;
  bubbleVars.happySound = happySound;
  bubbleVars.currentScene = currentScene;
  if (bubbleVars.generate) {
    for (let i = 0; i < bubbleVars.numBubbles; i++) {
      let x = random(150, windowWidth - 150);
      let y = random(210, windowHeight - 190);
      bubbleVars.bubbles[i] = new Bubble(x, y, bubbleVars.radius);
    }
    bubbleVars.generate = false;
  }

  noStroke();
  fill("#9AEFFF");
  //Main Bar
  rect(0, 0, windowWidth, windowHeight / 1 / 8);
  //Restart Button
  //rect(10, windowHeight - 120, windowWidth / 1 / 10, windowHeight / 1 / 10, 20);
  fill(250, 254, 255);
  stroke("#1E1B1B");
  strokeWeight(5);
  textAlign(CENTER);
  textSize(45);
  text("Score : " + bubbleVars.score, windowWidth / 2, windowHeight / 1 / 13);
  text("Exit", windowWidth / 1 / 25, windowHeight / 1 / 12);

  //Text Above Play Area
  strokeWeight(1);
  fill("#1E1B1B");
  text("Pop the bubbles", windowWidth / 2, windowHeight / 1 / 5.5);
  if (bubbleVars.timer > 0) {
    textSize(20);
    strokeWeight(0);
    text(
      "(+10 points per bubble, get 150 points in " +
        bubbleVars.timer +
        " second(s) to win!)",
      windowWidth / 2,
      windowHeight / 1 / 8.6
    );
  }

  fill("#9AEFFF");
  strokeWeight(4);
  stroke(69, 63, 252);

  // this code shakes
  if (!reverse) {
    translation++;
    if (translation === 10) {
      reverse = true;
    }
  } else {
    translation--;
    if (translation === -10) {
      reverse = false;
    }
  }
  translate(translation, 0);

  //display bubbles
  for (let i = 0; i < bubbleVars.numBubbles; i++) {
    bubbleVars.bubbles[i].display();
    bubbleVars.bubbles[i].x += random(-0.7, 0.7);
    bubbleVars.bubbles[i].y += random(-0.7, 0.7);
  }
}

function mousePressed() {
  const arr = [];
  let count = 0;
  for (let i = 0; i < bubbleVars.bubbles.length; i++) {
    arr.push(bubbleVars.bubbles[i].mouseClicked());
  }

  if (!hasFalse(arr) && !bubbleVars.generate) {
    background(255, 28, 62, 240);
    if (bubbleVars.buzz.isPlaying()) {
      // .isPlaying() returns a boolean
      bubbleVars.buzz.stop();
      background(255, 28, 62, 240);
      text(
        "You missed the bubble. Keep trying!",
        windowWidth / 2,
        windowHeight / 1.08
      );
      shake = true;
    } else {
      bubbleVars.buzz.play();
      background(255, 28, 62, 240);
      text(
        "You missed the bubble. Keep trying!",
        windowWidth / 2,
        windowHeight / 1.08
      );
    }
  }

  if (hasFalse(arr)) {
    background(240, 250, 255); //refreshes background as white
    count = count + 1;
    bubblePop.setVolume(0.4);
    bubblePop.play();
  }

  if (bubbleVars.score >= bubbleVars.numBubbles * 10) {
    winnerSound.setVolume(0.4);
    winnerSound.play();
    background(0, 255, 154, 100);
    textSize(60);
    text("You popped the bubbles!", windowWidth / 2, windowHeight / 1.22);
  }
  infoButton();
}

//    info button
const infoButton = () => {
  fill("#9AEFFF");
  textAlign(CENTER);
  textSize(40);
  rect(30, windowHeight - 80, 120, 50, 15);
  fill("black");
  text("INFO", 90, windowHeight - 40);
  if (
    mouseX >= 30 &&
    mouseX <= 150 &&
    mouseY >= windowHeight - 80 &&
    mouseY <= windowHeight - 30 &&
    mouseIsPressed
  ) {
    showInfo = true;
  }

  if (showInfo) {
    fill("lightgray");
    rect(windowWidth / 2 - 400, windowHeight / 2 - 200, 800, 400);
    fill("black");
    textAlign(CENTER);
    text("✕", windowWidth / 2 + 350, windowHeight / 2 - 150);
    text("Pop the bubbles.", windowWidth / 2, windowHeight / 22);
    noStroke();
    textSize(35);
    text(
      'Click on a bubble to "pop" it. \n You get 10 points for each bubble popped. \n Get 150 points total to win! \n \n Justin Curtsinger \n FSE 100 (Intro to Engineering) \n spring 2022',
      windowWidth / 2,
      windowHeight / 2 / 1.45
    );

    if (
      mouseIsPressed &&
      mouseX >= windowWidth / 2 + 300 &&
      mouseX <= windowWidth / 2 + 400 &&
      mouseY <= windowHeight / 2 - 100 &&
      mouseY >= windowHeight / 2 - 200
    ) {
      showInfo = false;
    }
    if (
      !(
        mouseX >= windowWidth / 2 - 400 &&
        mouseX <= windowWidth / 2 - 400 + 800 &&
        mouseY >= windowHeight / 2 - 200 &&
        mouseY <= windowHeight / 2 - 200 + 400
      ) &&
      !(
        mouseX >= 30 &&
        mouseX <= 150 &&
        mouseY >= windowHeight - 80 &&
        mouseY <= windowHeight - 30
      ) &&
      mouseIsPressed
    ) {
      showInfo = false;
    }
  }
};

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
      if (
        bubbleVars.score < bubbleVars.numBubbles * 10 &&
        bubbleVars.timer > 0
      ) {
        bubbleVars.score += 10;
      }
      return true;
    }
    return false;
  }
}
