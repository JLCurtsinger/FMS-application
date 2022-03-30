// Global Variables
var sound_1;
var sound_2;
let score = 0;
let message = "Start from the yellow circle and folow the line";

const clickAndDrag = (sound_1, sound_2) => {
  background("white");
  noStroke();
  fill("#9AEFFF");
  //Main Bar
  rect(0, 0, windowWidth, windowHeight / 1 / 8);
  //Restart Button
  rect(10, windowHeight - 120, windowWidth / 1 / 10, windowHeight / 1 / 10, 20);
  fill("white");
  textAlign(CENTER);
  textSize(40);
  text("Score : " + score, windowWidth / 2.1, windowHeight / 1 / 12);
  text("Exit", windowWidth / 1 / 25, windowHeight / 1 / 12);

  //Text Above Play Area
  fill("Black");
  text("Click And Drag", windowWidth / 2, windowHeight / 1 / 5);

  // Intro Text
  text(message, windowWidth / 2, windowHeight / 1.22);

  // Draw play area
  fill(0, 0, 0, 0);
  stroke("Black");
  rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);

  // Code for the game
  // If statement on what to do when the user is not the said line
  if (mouseIsPressed) {
    fill("red");
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    circle(mouseX, mouseY, 50);
  }

  // If statement on what to do when the user is on the said line
  if (mouseIsPressed) {
    if (
      mouseX >= windowWidth / 4.35 + 70 &&
      mouseX <= windowWidth / 2 + 70 &&
      mouseY >= windowHeight / 4 + 90 &&
      mouseY <= windowHeight / 1.75 + 70
    ) {
      fill("green");
      rect(
        windowWidth / 4,
        windowHeight / 4,
        windowWidth / 2,
        windowHeight / 2
      );
      circle(mouseX, mouseY, 50);
      if (mouseX <= windowHeight / 2 - 25 && mouseX >= windowWidth / 4 + 25) {
        fill("black");
        circle(windowWidth / 2, windowHeight / 2, 50);
      }
    } else {
      if (!sound_2.isPlaying()) {
        sound_2.play();
      }
      message = "You are out of bounds";
    }
  }

  //Checkpoints
  if (mouseIsPressed) {
    // line 4
    if (mouseX <= windowWidth / 2 + 5 && mouseX >= windowWidth / 3.25 - 5) {
      if (mouseY <= windowHeight / 2 + 5 && mouseY >= windowHeight / 2 - 5) {
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (score <= 25) {
          score = score + 1;
        }
      }
    }
  }

  if (mouseIsPressed) {
    // line bent down
    if (mouseX >= windowWidth / 2 && mouseX <= windowWidth / 2 + 70) {
      if (mouseY >= windowHeight / 2 && mouseY <= windowHeight / 2 + 70) {
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (score <= 49 && score >= 25) {
          score = score + 1;
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
        }
      }
    }
  }

  if (mouseIsPressed) {
    // line 1
    if (
      mouseX <= windowWidth / 2 + 70 + 5 &&
      mouseX >= windowWidth / 3.65 - 5
    ) {
      if (
        mouseY >= windowHeight / 2.75 - 5 &&
        mouseY <= windowHeight / 3.5 + 70 + 5
      ) {
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (score <= 74 && score >= 50) {
          score = score + 1;
        }
      }
    }
  }

  if (mouseIsPressed) {
    // line 2
    if (
      mouseX >= windowWidth / 4.35 + 69 - 5 &&
      mouseX <= windowWidth / 2.45 + 200 + 5
    ) {
      if (
        mouseY >= windowHeight / 2.75 + 50 - 5 &&
        mouseY <= windowHeight / 2.35 + 5
      ) {
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (score <= 99 && score >= 74) {
          score = score + 1;
        }
      }
    }
  }

  if (mouseIsPressed) {
    // line 3
    if (mouseX <= windowWidth / 2 + 7 + 5 && mouseX >= windowWidth / 3.5 - 5) {
      if (
        mouseY <= windowHeight / 2.155 + 5 &&
        mouseY >= windowHeight / 2.17 - 5
      ) {
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (score <= 124 && score >= 99) {
          score = score + 1;
        }
      }
    }
  }

  if (mouseIsPressed) {
    // bottom line
    if (mouseX >= windowWidth / 3.5 + 5 && mouseX <= windowWidth / 2 + 70 - 5) {
      if (
        mouseY >= windowHeight / 1.55 &&
        mouseY <= windowHeight / 2 + 140 - 5
      ) {
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (score <= 149 && score >= 124) {
          score = score + 1;
        }
      }
    }
  }

  if (mouseIsPressed) {
    // line 6
    if (
      mouseX <= windowWidth / 2 + 70 + 5 &&
      mouseX >= windowWidth / 3.75 + 70 - 5
    ) {
      if (
        mouseY <= windowHeight / 1.6 + 5 &&
        mouseY >= windowHeight / 1.7 - 5
      ) {
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (score <= 149 && score >= 124) {
          score = score + 1;
        }
      }
    }
  }

  if (mouseIsPressed) {
    // line 5
    if (mouseX >= windowWidth / 3.3 + 5 && mouseX <= windowWidth / 2) {
      if (
        mouseY >= windowHeight / 1.85 + 5 &&
        mouseY <= windowHeight / 1.85 - 5
      ) {
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (score <= 175 && score >= 149) {
          score = score + 1;
        }
      }
    }
  }

  //What to do when mouse not pressed
  else {
    fill("blue");
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    strokeWeight(10);
    fill("yellow");
    // circle(windowWidth / 2  , windowHeight /2, 25 )
    circle(windowWidth / 3.25, windowHeight / 2, 50);
    stroke("red");
  }

  //Line measurements
  line(
    windowWidth / 2 + 70,
    windowHeight / 2 + 70,
    windowWidth / 2 + 70,
    windowHeight / 3.5 + 70
  ); //line on the right
  line(
    windowWidth / 2 + 70,
    windowHeight / 3.5 + 70,
    windowWidth / 3.65,
    windowHeight / 2.75
  ); //line 1
  line(
    windowWidth / 4.35 + 69,
    windowHeight / 2.75 + 50,
    windowWidth / 2.45 + 200,
    windowHeight / 2.35
  ); //line 2
  line(
    windowWidth / 2.45 + 200,
    windowHeight / 2.35,
    windowWidth / 2 + 7,
    windowHeight / 2.155
  ); //line inside right
  line(
    windowWidth / 2 + 7,
    windowHeight / 2.155,
    windowWidth / 3.5,
    windowHeight / 2.17
  ); // line 3
  line(windowWidth / 2, windowHeight / 2, windowWidth / 3.25, windowHeight / 2); // line 4
  line(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 + 70,
    windowHeight / 2 + 70
  ); // line bent down
  line(
    windowWidth / 3.65,
    windowHeight / 2.75,
    windowWidth / 4.35 + 69,
    windowHeight / 2.75 + 50
  ); //line on the left
  line(
    windowWidth / 3.5,
    windowHeight / 2.17,
    windowWidth / 3.5,
    windowHeight / 1.55
  ); // line on the left part 2
  line(
    windowWidth / 3.5,
    windowHeight / 1.55,
    windowWidth / 2 + 70,
    windowHeight / 2 + 140
  ); // bottom line
  line(
    windowWidth / 2 + 70,
    windowHeight / 2 + 140,
    windowWidth / 2 + 70,
    windowHeight / 1.6
  ); // right line part 2
  line(
    windowWidth / 2 + 70,
    windowHeight / 1.6,
    windowWidth / 3.75 + 70,
    windowHeight / 1.7
  ); // line 6
  line(
    windowWidth / 3.75 + 70,
    windowHeight / 1.7,
    windowWidth / 3.3,
    windowHeight / 1.85
  ); // inner left
  line(
    windowWidth / 3.3,
    windowHeight / 1.85,
    windowWidth / 2,
    windowHeight / 1.85
  ); // line 5

  //Outro scene
  if (score >= 100) {
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    fill("white");
    text("Good Job", windowWidth / 2, windowHeight / 2);
  }
};

message = "Start from the yellow circle and folow the line";
