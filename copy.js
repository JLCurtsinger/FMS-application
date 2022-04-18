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
    currentScene: null,
    timer: 10,
    radius: 60,
    gameCount: 0,
  };
  
  function popTheBubbles(buzz, winnerSound, bubblePop, sadViolin) {
    bubbleVars.buzz = buzz;
    bubbleVars.winnerSound = winnerSound;
    bubbleVars.bubblePop = bubblePop;
    bubbleVars.sadSound = sadSound;
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
    rect(10, windowHeight - 120, windowWidth / 1 / 10, windowHeight / 1 / 10, 20);
    fill(250, 254, 255);
    stroke("#1E1B1B");
    strokeWeight(5);
    textAlign(CENTER);
    textSize(45);
    text("Score : " + bubbleVars.score, windowWidth / 2, windowHeight / 1 / 12);
    text("Exit", windowWidth / 1 / 25, windowHeight / 1 / 12);
  
    //Text Above Play Area
    strokeWeight(1);
    fill("#1E1B1B");
    text("Pop the bubbles", windowWidth / 2, windowHeight / 1 / 5.5);
    if (bubbleVars.timer > 0) {
      textSize(20);
      strokeWeight(0);
      text("(+10 points per bubble, 150 points to win!)", windowWidth / 2, windowHeight / 1 / 4.5);
    }
  
    fill("#9AEFFF");
    strokeWeight(4);
    stroke(69, 63, 252);
  
    fill("black");
    textSize(50);
    text(bubbleVars.timer, windowWidth / 1.05, windowHeight / 1 / 12);
    if (frameCount % 60 == 0 && bubbleVars.timer > 0) {     // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      bubbleVars.timer --;
    }
    if (bubbleVars.timer == 0) {
      textSize(100);
  
      if (bubbleVars.score < bubbleVars.numBubbles * 10) {
        background(255, 28, 62, 80);
        text("GAME OVER \n You lost. Try again!", width/2, height / 1.8);
      }
      else {
        background(0, 255, 154, 80);
        text("GAME OVER \n You won!", width/2, height / 1.8);
      }
    }
    if (bubbleVars.timer % 2 == 1 && bubbleVars.timer <= 5) {
      textSize(33);
      strokeWeight(1);
      fill(255, 28, 62);
      stroke(255, 28, 62);
      text("Timer:", windowWidth / 1.105, windowHeight / 13.4);
    }
    else {
      textSize(30);
      strokeWeight(1);
      text("Timer:", windowWidth / 1.105, windowHeight / 13.4);
    }
  
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
      bubbleVars.buzz.play();
      background(255, 28, 62, 240);
      textSize(50);
      text(
        "You missed the bubble. Keep trying!",
        windowWidth / 2,
        windowHeight / 1.08
      );
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
      text(
        "Congratulations, you popped the bubbles!",
        windowWidth / 2,
        windowHeight / 1.22
      );
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