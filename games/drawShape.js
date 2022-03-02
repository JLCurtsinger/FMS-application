let x;
let y;
let xSpeed = 3;
let ySpeed = 5;
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

const drawShape = () => {
  middleX = windowWidth / 2;
  middleY = windowHeight / 2;
  gameAreaYClose = windowWidth / 4;
  gameAreaYFar = windowWidth / 3 / 4;
  gameAreaXClose = windowHeight / 4;
  gameAreaXFar = windowHeight / 3 / 4;
  noStroke();
  fill("#9AEFFF");
  //Main Bar
  rect(0, 0, windowWidth, windowHeight / 1 / 8);
  //Restart Button
  rect(10, windowHeight - 120, windowWidth / 1 / 10, windowHeight / 1 / 10, 20);
  fill("white");
  textAlign(CENTER);
  textSize(40);
  text("Score : ", windowWidth / 2.1, windowHeight / 1 / 12);
  text("Exit", windowWidth / 1 / 25, windowHeight / 1 / 12);

  //Text Above Play Area
  fill("Black");
  text("Trace The Shape", windowWidth / 2, windowHeight / 1 / 5);

  // Draw play area
  fill(0, 0, 0, 0);
  stroke("Black");
  rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);

  if (firstPoint == false && secondPoint == false && thirdPoint == false) {
    traceTriangle();

    if (mouseX == windowWidth / 2 && mouseY == windowHeight / 2.8) {
      firstPoint = true;
    }
    if (mouseX == windowWidth / 2.3 && mouseY == windowHeight / 1.5) {
      secondPoint = true;
    }
    if (mouseX == windowWidth / 1.76 && mouseY == windowHeight / 1.5) {
      thirdPoint = true;
    }
  } else {
    fill("White");
    stroke("Black");
    strokeWeight(5);
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    text("You Win", windowWidth / 2, windowHeight / 2);
  }
};

function mousePressed() {
  mousePressedTrue = true;
}

function mouseReleased() {
  mousePressedTrue = false;
}

function ball() {
  middleX += xSpeed;
  middleY += ySpeed;
  if (middleX >= windowWidth / 1.38) {
    xSpeed = xSpeed * -1;
  }
  if (middleX <= windowWidth - windowWidth / 1.36) {
    xSpeed = xSpeed * -1;
  }
  if (middleY >= windowHeight / 1.38) {
    ySpeed = ySpeed * -1;
  }
  if (middleY <= windowHeight - windowHeight / 1.38) {
    ySpeed = ySpeed * -1;
  }
  fill("Black");
  noStroke();
  ellipse(middleX, middleY, 50, 50);
}

//Mouse cordinates
function getCords() {
  textSize(25);
  let xString = String(mouseX);
  let yString = String(mouseY);
  stroke("Black");
  fill("White");
  text("X : " + xString, mouseX, mouseY);
  text("Y : " + yString, mouseX + 100, mouseY);
}

function traceTriangle() {
  if (mousePressedTrue == true) {
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
  } else {
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

  if (
    mouseX <= windowWidth / 1.38 &&
    mouseX >= windowWidth - windowWidth / 1.36 &&
    mouseY <= windowHeight / 1.38 &&
    mouseY >= windowHeight - windowHeight / 1.38 &&
    mousePressedTrue == true
  ) {
    fill("Black");
    stroke("Black");
    noStroke();
    ellipse(mouseX, mouseY, 30, 30);
  }
}

// function traceCircle() {
//   if (mousePressedTrue == true) {
//     fill(0, 0, 0, 0);
//     stroke(0, 200, 0);
//     strokeWeight(17);
//     circle();
//   }
// }
