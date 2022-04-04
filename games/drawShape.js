let cordX;
let cordY;

const myVars = {
  game1: true,
  game2: false,
  drawOnce: true,
  drawOnce1: true,
  firstPoint: false,
  secondPoint: false,
  thirdPoint: false,
  fourthPoint: false,
  wipeScreenOne: true,
  scoreTraceTriangle: 0,
  wipeScreen2true: true,
  soundPlayOnce: true,
  playSoundSelect: true,
  soundPlayOnce1: true,
  soundPlayOnce2: true,
  soundPlayOnce3: true,
};

const drawShape = (ding, win, selectSound, drawSound) => {
  mainScreenSetup();
  playArea();
  //getCords();
  if (myVars.game1 == true) {
    if (myVars.drawOnce == true) {
      triangle1();
      myVars.drawOnce = false;
    }
    drawing();
    checkForDrawing1();
  }
  if (myVars.game1 == false) {
    wipeScreen();
    gameTwoButton1();
    if (myVars.game2 == true) {
      if (myVars.playSoundSelect == true) {
        selectSound.play();
        myVars.playSoundSelect = false;
      }
      wipeScreen2();
      if (myVars.drawOnce1 == true) {
        circle1();
        myVars.drawOnce1 = false;
      }
      drawing();
    }
  }
};

function mainScreenSetup() {
  noStroke();
  fill("#9AEFFF");
  //Main Bar
  rect(0, 0, windowWidth, windowHeight / 1 / 8);
  //Restart Button
  fill("white");
  textAlign(CENTER);
  textSize(40);
  text("Score : ", windowWidth / 2 - 10, windowHeight / 1 / 8 - 50);
  text(
    str(myVars.scoreTraceTriangle),
    windowWidth / 1.82,
    windowHeight / 1 / 14
  );
  text("Exit", windowWidth / 1 / 25, windowHeight / 1 / 8 - 50);
}
function triangle1() {
  fill(0, 0, 0, 0);
  stroke(0, 200, 0);
  strokeWeight(17);
  triangle(
    windowWidth / 2,
    windowHeight / 2.8,
    windowWidth / 2.3,
    windowHeight / 1.5,
    windowWidth / 1.76,
    windowHeight / 1.5
  );
}
function circle1() {
  fill(0, 0, 0, 0);
  stroke(0, 200, 0);
  strokeWeight(17);
  circle(windowWidth / 2, windowHeight / 2, windowHeight / 3);
}
function playArea() {
  //Text Above Play Area
  fill("Black");
  text("Trace The Shape", windowWidth / 2, windowHeight / 1 / 5);
  // Draw play area
  fill(0, 0, 0, 0);
  strokeWeight(5);
  stroke("Black");
  noFill();
  rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
}
function drawing() {
  if (
    mouseX <= windowWidth / 1.38 &&
    mouseX >= windowWidth - windowWidth / 1.36 &&
    mouseY <= windowHeight / 1.38 &&
    mouseY >= windowHeight - windowHeight / 1.38 &&
    mouseIsPressed
  ) {
    fill("Black");
    stroke("Black");
    noStroke();
    ellipse(mouseX, mouseY, 30, 30);
  }
}
function checkForDrawing1() {
  if (
    mouseX >= windowWidth / 2 - 10 &&
    mouseX <= windowWidth / 2 + 10 &&
    mouseY >= windowHeight / 2.8 - 10 &&
    mouseY <= windowHeight / 2.8 + 10 &&
    mouseIsPressed
  ) {
    myVars.firstPoint = true;
    if (myVars.soundPlayOnce == true) {
      ding.play();
      myVars.soundPlayOnce = false;
    }
  }
  if (
    mouseX >= windowWidth / 2.3 - 10 &&
    mouseX <= windowWidth / 2.3 + 10 &&
    mouseY >= windowHeight / 1.5 - 10 &&
    mouseY <= windowHeight / 1.5 + 10 &&
    mouseIsPressed
  ) {
    myVars.secondPoint = true;
    if (myVars.soundPlayOnce1 == true) {
      ding.play();
      myVars.soundPlayOnce1 = false;
    }
  }
  if (
    mouseX >= windowWidth / 1.76 - 10 &&
    mouseX <= windowWidth / 1.76 + 10 &&
    mouseY >= windowHeight / 1.5 - 10 &&
    mouseY <= windowHeight / 1.5 + 10 &&
    mouseIsPressed
  ) {
    myVars.thirdPoint = true;
    if (myVars.soundPlayOnce2 == true) {
      ding.play();
      myVars.soundPlayOnce2 = false;
    }
  }
  if (
    mouseX >= windowWidth / 2.31 + 60 &&
    mouseX <= windowWidth / 2.3 + 70 &&
    mouseY >= windowHeight / 1.5 - 10 &&
    mouseY <= windowHeight / 1.5 + 10 &&
    mouseIsPressed
  ) {
    myVars.fourthPoint = true;
    if (myVars.soundPlayOnce3 == true) {
      ding.play();
      myVars.soundPlayOnce3 = false;
    }
  }
  if (
    myVars.firstPoint == true &&
    myVars.secondPoint == true &&
    myVars.thirdPoint == true &&
    myVars.fourthPoint == true
  ) {
    myVars.game1 = false;
  }
}
function wipeScreen() {
  if (myVars.wipeScreenOne == true) {
    fill("White");
    stroke("Black");
    strokeWeight(3);
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    fill("Black");
    noStroke();
    text("You Win!!", windowWidth / 2, windowHeight / 2.3);
    fill("#9AEFFF");
    rect(
      windowWidth / 2.15,
      windowHeight / 1.3,
      windowWidth / 1 / 15,
      windowHeight / 1 / 20,
      20
    );
    fill("White");
    textSize(20);
    text("Next Round", windowWidth / 2.011, windowHeight / 1.245);
    win.play();
    myVars.scoreTraceTriangle = 100;
    myVars.wipeScreenOne = false;
  }
}
function wipeScreen2() {
  if (myVars.wipeScreen2true == true && myVars.wipeScreenOne == false) {
    fill("White");
    stroke("Black");
    strokeWeight(3);
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    noStroke();
    rect(
      windowWidth / 2.15,
      windowHeight / 1.3,
      windowWidth / 1 / 15,
      windowHeight / 1 / 20,
      20
    );
    myVars.wipeScreen2true = false;
  }
}
function gameTwoButton1() {
  if (mouseIsPressed && mouseY > windowHeight / 1.3) {
    myVars.game2 = true;
  }
}
function getCords() {
  cordX = windowWidth / mouseX;
  cordY = windowHeight / mouseY;
  fill("White");
  stroke("Black");
  strokeWeight(5);
  text(cordX, mouseX + 30, mouseY + 30);
}
