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
  bubbleFont: null,
};


function popTheBubbles(buzz, winnerSound, bubblePop, sadSound, happySound, bubbleFont) {
  bubbleVars.buzz = buzz;
  bubbleVars.winnerSound = winnerSound;
  bubbleVars.bubblePop = bubblePop;
  bubbleVars.sadSound = sadSound;
  bubbleVars.happySound = happySound;
  bubbleVars.bubbleFont = bubbleFont;
  bubbleVars.currentScene = currentScene;
  if (bubbleVars.generate) {
    for (let i = 0; i < bubbleVars.numBubbles; i++) {
      let x = random(150, windowWidth - 150);
      let y = random(210, windowHeight - 190);
      bubbleVars.bubbles[i] = new Bubble(x, y, bubbleVars.radius,);
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
  textFont(bubbleFont, 70);
  text("Score : " + bubbleVars.score, windowWidth / 2, windowHeight / 1 / 13.5);
  textSize(60);
  text("Exit", windowWidth / 1 / 23, windowHeight / 1 / 11.3);

  //Text Above Play Area
  strokeWeight(6);
  stroke(87, 92, 255, 150);
  fill(59, 224, 255, 150);
  textSize(80);
  text("Pop the bubbles!", windowWidth / 2, windowHeight / 1 / 4.65);
  if (bubbleVars.timer > 0) {
    textSize(30);
    strokeWeight(0);
    fill('black')
    text(")+10 points per bubble, get 150 points in " + bubbleVars.timer + " second)s( to win!(", windowWidth / 2, windowHeight / 1 / 8.9);
  }

  fill("#9AEFFF");
  strokeWeight(4);
  stroke(69, 63, 252);

  fill("black");
  textSize(70);
  text(bubbleVars.timer, windowWidth / 1.05, windowHeight / 1 / 11);
  if (frameCount % 60 == 0 && bubbleVars.timer > 0) {     // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    bubbleVars.timer --;
  }
  if (bubbleVars.timer == 0) {
    textSize(125);

    if (bubbleVars.score < bubbleVars.numBubbles * 10) {
      background(255, 28, 62, 80);
      fill(28, 29, 31, 200);
      text("GAME OVER \n You lost. Try again!", width/2, height / 2);

    }
    else {
      background(0, 255, 154, 80);
      fill(28, 29, 31, 200);
      text("GAME OVER \n You won!", width/2, height / 2);
    }
  }

  if (bubbleVars.score < bubbleVars.numBubbles * 10 && bubbleVars.timer == 0) {
    if(bubbleVars.playOnce){
      bubbleVars.sadSound.setVolume(0.4);
      bubbleVars.sadSound.play();
      bubbleVars.playOnce = false;
    }
  }
  else if (bubbleVars.score >= bubbleVars.numBubbles * 10 && bubbleVars.timer == 0) {
    if (bubbleVars.playOnce) {
      bubbleVars.happySound.play();
      bubbleVars.playOnce = false;
    }
  }
  if (bubbleVars.timer % 2 == 1 && bubbleVars.timer <= 5) {
    textSize(42);
    strokeWeight(1);
    fill(255, 28, 62);
    stroke(255, 28, 62);
    text("Timer:", windowWidth / 1.125, windowHeight / 12.5);
  }
  else {
    textSize(45);
    strokeWeight(1);
    text("Timer:", windowWidth / 1.125, windowHeight / 12.5);
  };

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
    // && !mouseX >= 30 && !mouseX <= 150 && !mouseY >= windowHeight - 80 && !mouseY <= windowHeight - 30
    background(255, 28, 62, 240);
    background(255, 28, 62, 240);
    textSize(70);
    if (!(mouseX >= 30 && mouseX <= 150 && mouseY >= windowHeight - 80 && mouseY <= windowHeight - 30 || mouseX >= windowWidth / 1 / 15 && mouseX <= windowWidth / 1 / 60 && mouseY >= windowHeight / 1 / 10 && mouseY <= windowHeight / 1 / 17)){
    //if
    bubbleVars.buzz.play();
    fill(28, 29, 31, 225);
    text(
      "You missed. Keep trying!",
      windowWidth / 2,
      windowHeight / 1.062
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
    textSize(70);
    fill(0, 255, 154, 235);
    text(
      "You popped the bubbles!",
      windowWidth / 2,
      windowHeight / 1.158
    );
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
    textFont('arial', 38);
    textStyle(BOLD);
    text("Click on a bubble to \"pop\" it. \n You get 10 points for each bubble popped. \n Get 150 points total to win! \n \n Justin Curtsinger \n FSE 100 (Intro to Engineering) \n spring 2022", windowWidth / 2, windowHeight / 2 / 1.6);

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
  constructor(x, y, r,) {
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
    if (distance < 30) {          // 30 is half the radius of a bubble
      this.col = color("#00FF9A");
      if (bubbleVars.score < bubbleVars.numBubbles * 10 && bubbleVars.timer > 0) {
        bubbleVars.score += 10;
      }
      return true;
    }
    return false;
  }
}