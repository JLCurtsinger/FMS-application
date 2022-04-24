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
  fifthPoint: false,
  sixthPoint: false,
  seventhPoint: false,
  eigthPoint: false,
  wipeScreenOne: true,
  scoreTraceTriangle: 0,
  wipeScreen2true: true,
  soundPlayOnce: true,
  playSoundSelect: true,
  soundPlayOnce1: true,
  soundPlayOnce2: true,
  soundPlayOnce3: true,
  soundPlayOnce4: true,
  soundPlayOnce5: true,
  soundPlayOnce6: true,
  soundPlayOnce7: true,
  soundPlayOnce8: true,
  soundPlayOnce9: true,
  soundPlayOnce10:true,
  soundPlayOnce11:true,
  soundPlayOnce12:true,
  soundPlayOnce13:true,
  soundPlayOnce14: true,
  soundPlayOnce15: true,
  showInfo: false,
  wipeInfoScreen: true,
  animationX: 400,
  animationY: 10,
  animationSpeed: 1,
  animationRotation: 90,
  topPoint: false,
  bottomPoint: false,
  leftPoint: false,
  rightPoint: false,
  bottomRight: false,
  bottomLeft: false,
  topRight: false,
  topLeft: false,
  wipeScreenFinal1: true,
  traceShapeText: "Trace The Shape",
  i: 1,
  texta: "",
  timer: 0,
  timer1On: true,
  timer2On: false,
};

const drawShape = (ding, win, selectSound, drawSound) => {
  mainScreenSetup();
  playArea();
  textOne();
  if(myVars.game1 == true){
    infoButtonTrace();
  } else {
    noStroke();
    fill("White");
    rect(20, windowHeight - 90, 300, 100, 15);
  }
  //getCords();
  if (myVars.game1 == true && myVars.showInfo == false) {
    
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
      checkForDrawing2();
    }
  }
  if(myVars.game2 == false && myVars.game1 == false && myVars.bottomPoint == true) {
    wipeScreenFinal();
  }
};

function mainScreenSetup() {
  
  noStroke();
  fill("#9AEFFF");
  //Main Bar
  rect(0, 0, windowWidth, windowHeight / 1 / 8);
  //Restart Button
  fill("white");
  rect(0,windowHeight / 1 / 8,windowWidth/4, windowHeight);
  textAlign(CENTER);
  textSize(40);
  text("Score: ", windowWidth / 2 - 10, windowHeight / 1 / 8 - 50);
  text(
    str(myVars.scoreTraceTriangle),
    windowWidth / 1.82,
    windowHeight / 1 / 14.5
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

function textOne(){
    if (frameCount % 5 == 0 && myVars.timer <= 16 && myVars.timer1On == true) { 
      myVars.texta = myVars.traceShapeText.substring(0,myVars.timer)
      myVars.timer ++;
    }
  noStroke();
  fill("white");
  rect(windowWidth / 3, windowHeight / 6.5, windowWidth / 2, windowHeight / 12)
  fill("Black");
  
  text(myVars.texta, windowWidth / 2, windowHeight / 1 / 5);

}
function playArea() {
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
    mouseX >= windowWidth / 2.31 + 160 &&
    mouseX <= windowWidth / 2.3 + 170 &&
    mouseY >= windowHeight / 1.5 - 10 &&
    mouseY <= windowHeight / 1.5 + 10 &&
    mouseIsPressed
  ) {
    myVars.fifthPoint = true;
    if (myVars.soundPlayOnce4 == true) {
      ding.play();
      myVars.soundPlayOnce4 = false;
    }
  }
  if (
    mouseX >= windowWidth / 2.31 + 160 &&
    mouseX <= windowWidth / 2.3 + 170 &&
    mouseY >= windowHeight / 1.5 - 150 &&
    mouseY <= windowHeight / 1.5 - 120 &&
    mouseIsPressed
  ) {
    myVars.sixthPoint = true;
    if (myVars.soundPlayOnce5 == true){
      ding.play();
      myVars.soundPlayOnce5 = false;
    }
  }
  if (
    mouseX >= windowWidth / 2.1 - 20 &&
    mouseX <= windowWidth / 2.1 + 10&&
    mouseY >= windowHeight / 2 - 20&&
    mouseY <= windowHeight / 2 + 10&&
    mouseIsPressed
  ) {
    myVars.seventhPoint = true;
    if (myVars.soundPlayOnce14 == true){
      ding.play();
      myVars.soundPlayOnce14 = false;
    }
  }
  if (
    mouseX >= windowWidth / 1.9 - 20 &&
    mouseX <= windowWidth / 1.9 + 10&&
    mouseY >= windowHeight / 2 - 20&&
    mouseY <= windowHeight / 2 + 10&&
    mouseIsPressed
  ) {
    myVars.eigthPoint = true;
    if (myVars.soundPlayOnce15 == true){
      ding.play();
      myVars.soundPlayOnce15 = false;
    }
  }
  if (
    myVars.firstPoint == true &&
    myVars.secondPoint == true &&
    myVars.thirdPoint == true &&
    myVars.fourthPoint == true &&
    myVars.fifthPoint == true &&
    myVars.sixthPoint == true &&
    myVars.seventhPoint == true &&
    myVars.eigthPoint == true
  ) {
    myVars.game1 = false;
  }
}
function checkForDrawing2(){
  if(
    mouseX >= windowWidth / 2 - 10 &&
    mouseX <= windowWidth / 2 + 20 &&
    mouseY <= windowHeight / 3 + 20 &&
    mouseY >= windowHeight / 3 - 10 &&

    mouseIsPressed
  ){
    myVars.topPoint = true;
    if(myVars.soundPlayOnce6 == true){
      ding.play();
      myVars.soundPlayOnce6 = false;
    }
  }
  if(
    mouseX >= windowWidth / 2 - 10 &&
    mouseX <= windowWidth / 2 + 30 &&
    mouseY <= windowHeight / 1.5 + 30 &&
    mouseY >= windowHeight / 1.5 - 10 &&
    mouseIsPressed
  ){
    myVars.bottomPoint = true;
    if(myVars.soundPlayOnce7 == true){
      ding.play();
      myVars.soundPlayOnce7 = false;
    }
  }
  if(
    mouseX >= windowWidth / 2.4 - 10 &&
    mouseX <= windowWidth / 2.4 + 30 &&
    mouseY <= windowHeight / 2 + 30 &&
    mouseY >= windowHeight / 2 - 10 &&
    mouseIsPressed
  ){
    myVars.leftPoint = true;
    if(myVars.soundPlayOnce8 == true){
      ding.play();
      myVars.soundPlayOnce8 = false;
    }
  }
  if(
    mouseX >= windowWidth / 1.75 - 10 &&
    mouseX <= windowWidth / 1.75 + 30 &&
    mouseY <= windowHeight / 2 + 30 &&
    mouseY >= windowHeight / 2 - 10 &&
    mouseIsPressed
  ){
    myVars.rightPoint = true;
    if(myVars.soundPlayOnce9 == true){
      ding.play();
      myVars.soundPlayOnce9 = false;
    }
  }
  if(
    mouseX >= windowWidth / 1.8 - 10 &&
    mouseX <= windowWidth / 1.8 + 30 &&
    mouseY <= windowHeight / 1.6 + 30 &&
    mouseY >= windowHeight / 1.6 - 10 &&
    mouseIsPressed
  ){
    myVars.bottomRight = true;
    if(myVars.soundPlayOnce10 == true){
      ding.play();
      myVars.soundPlayOnce10 = false;
    }
  }
  if(
    mouseX >= windowWidth / 2.2 - 10 &&
    mouseX <= windowWidth / 2.2 + 30 &&
    mouseY <= windowHeight / 1.6 + 30 &&
    mouseY >= windowHeight / 1.6 - 10 &&
    mouseIsPressed
  ){
    myVars.bottomLeft = true;
    if(myVars.soundPlayOnce11 == true){
      ding.play();
      myVars.soundPlayOnce11 = false;
    }
  }
  if(
    mouseX >= windowWidth / 2.2 - 20 &&
    mouseX <= windowWidth / 2.2 + 30 &&
    mouseY <= windowHeight / 2.6 + 30 &&
    mouseY >= windowHeight / 2.6 - 10 &&
    mouseIsPressed
  ){
    myVars.topLeft = true;
    if(myVars.soundPlayOnce12 == true){
      ding.play();
      myVars.soundPlayOnce12 = false;
    }
  }
  if(
    mouseX >= windowWidth / 1.8 - 10 &&
    mouseX <= windowWidth / 1.8 + 30 &&
    mouseY <= windowHeight / 2.6 + 30 &&
    mouseY >= windowHeight / 2.6 - 10 &&
    mouseIsPressed
  ){
    myVars.topRight = true;
    if(myVars.soundPlayOnce13 == true){
      ding.play();
      myVars.soundPlayOnce13 = false;
    }
  }
  if(
    myVars.bottomPoint == true &&
    myVars.topPoint == true &&
    myVars.leftPoint == true &&
    myVars.rightPoint == true &&
    myVars.bottomRight == true &&
    myVars.bottomLeft == true &&
    myVars.topLeft == true &&
    myVars.topRight == true
  ){
    myVars.game2 = false;
    myVars.scoreTraceTriangle = 200
  }
  
}
function wipeScreen() {
  if (myVars.wipeScreenOne == true) {

    fill("White");
    stroke("Black");
    strokeWeight(3);
    rect(30, windowHeight - 80, 120, 50, 15);
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    fill("Black");
    noStroke();
    text("You Win!!", windowWidth / 2, windowHeight / 2.3);
    fill("#9AEFFF");
    stroke("Black")
    rect(
      windowWidth / 2.15,
      windowHeight / 1.3,
      windowWidth / 1 / 15,
      windowHeight / 1 / 20,
      20
    );
    fill("White");
    textSize(16);
    text("Next Round", windowWidth / 2.010, windowHeight / 1.245);
    win.play();
    myVars.scoreTraceTriangle = 100;
    myVars.wipeScreenOne = false;
  }
}
function wipeScreenFinal() {
  if (myVars.wipeScreenFinal1 == true) {

    fill("White");
    stroke("Black");
    strokeWeight(3);
    rect(30, windowHeight - 80, 120, 50, 15);
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    fill("Green");
    noStroke();
    text("You Win!!", windowWidth / 2, windowHeight / 2.3);
    fill("Black")
    text("Click Exit To Play More Games", windowWidth / 2, windowHeight / 1.9)
    win.play();
    myVars.wipeScreenFinal1 = false;
  }
}
  function wipeInfoScreen() {
    if (myVars.wipeInfoScreen == true) {
      fill("White");
      stroke("Black");
      strokeWeight(3);
      rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
      triangle1();
      myVars.scoreTraceTriangle = myVars.scoreTraceTriangle + 25;
      myVars.wipeInfoScreen = false;
    }
}
function wipeScreen2() {
  if (myVars.wipeScreen2true == true && myVars.wipeScreenOne == false) {
    fill("White");
    stroke("Black");
    strokeWeight(3);
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    stroke("white")
    strokeWeight(5)
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

function infoButtonTrace() {
  noStroke();
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
    myVars.showInfo = true;
  }

  if (myVars.showInfo) {
    noStroke();
    fill("lightgray");
    rect(windowWidth / 2 - 400, windowHeight / 2 - 200, 800, 400);
    fill("black");
    textAlign(CENTER);
    text("✕", windowWidth / 2 + 350, windowHeight / 2 - 150);
    textSize(25);
    text("How To Play", windowWidth / 2, windowHeight / 2 - 150);
    textAlign(LEFT);
    text("Click and Hold Inside The Play Area", windowWidth / 4 + 50, windowHeight / 2 - 100);

    textParser(windowWidth / 4 + 50, windowHeight / 2 - 50, [
      ["Trace around the entire shape ", "black"],
      
    ]);
    textParser(windowWidth / 4 + 50, windowHeight / 2, [
      ["Get 100 Points Per Filled In Shape ", "black"],
      
    ]);
    textParser(windowWidth / 4 + 50, windowHeight / 2 + 50, [
      ['Once first round is completed click on next round button', "black"],
    ]);
    textParser(windowWidth / 4 + 50, windowHeight / 2 + 100, [
      ["Have Fun!", "black"],
    ]);

    textParser(windowWidth / 4 + 500, windowHeight / 2 + 185, [
      ["Author: Nicholas Quam", "black"],
    ]);

    if (
      mouseIsPressed &&
      mouseX >= windowWidth / 2 + 300 &&
      mouseX <= windowWidth / 2 + 400 &&
      mouseY <= windowHeight / 2 - 100 &&
      mouseY >= windowHeight / 2 - 200
    ) {
      myVars.showInfo = false;
      wipeInfoScreen();
      wipeInfoScreen = true;
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
      myVars.showInfo = false;
      wipeInfoScreen();
      myVars.wipeInfoScreen = true;
    }
  }
}

function animation(){
  noFill();
  stroke(0, 200, 0);
  strokeWeight(10);
  circle(myVars.animationX,myVars.animationY,40);
  myVars.animationY += myVars.animationSpeed;
}