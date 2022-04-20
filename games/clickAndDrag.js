// Global Variables
let score = 0;
let score_lvl_1 = 0;
let score_lvl_1pt5 = 0;
let Score_lvl_2 = 0;
let high_score = 0;
let message = "Start from the yellow circle and follow the line";
var level1pt5on = false; //This is technically level two
var level2on = false; //This is technically level three
var level1on = true;
var outro_on = false;
var showInfoClickAndDrag;
let x = 0; //Loop variable for the sound
let sound_1;
let sound_2;
let sound_3;

const clickAndDrag = (sound_1p, sound_2p, sound_3p) => {
  sound_1 = sound_1p;
  sound_2 = sound_2p;
  sound_3 = sound_3p;
  Back_ground();

  if (level1on == true) {
    lvl_1();
  }

  if (level2on == true) {
    lvl_2();
  }

  if (level1pt5on == true) {
    level1pt5();
  }
  if (outro_on == true) {
    outro();
  }

  infoButtonClickAndDrag();
};

function Back_ground() {
  background("white");
  noStroke();
  fill("#9AEFFF");
  //Main Bar
  rect(0, 0, windowWidth, windowHeight / 1 / 8);
  //Restart Button

  fill("white");
  textAlign(CENTER);
  // stroke("black");
  textSize(40);

  stroke("black");
  text("Score : " + score, windowWidth / 2, windowHeight / 1 / 12);
  text("Exit", windowWidth / 1 / 25, windowHeight / 1 / 12);
  noStroke();
  //Text Above Play Area
  fill("Black");
  text("Click And Drag", windowWidth / 2, windowHeight / 1 / 5);

  // Intro Text
  text(message, windowWidth / 2, windowHeight / 1.22);
  text("High Score: " + high_score, windowWidth / 2, windowHeight / 1.08);

  // Draw play area
  fill(0, 0, 0, 0);
  stroke("Black");
  rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
}

function lvl_1() {
  // Code for the game for the level 1
  // If statement on what to do when the user is not the said line
  if (mouseIsPressed) {
    strokeWeight(10);
    fill("red");
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    circle(mouseX, mouseY, 50);
  }

  //Checkpoints
  //Checkpoint 3
  if (mouseIsPressed) {
    message = "Out of Bounds";
    strokeWeight(10);
    if (
      mouseX <= windowWidth / 1.8 + 8 &&
      mouseX >= windowWidth / 1.8 - 8 &&
      mouseX >= windowWidth / 2 + 8
    ) {
      if (mouseY <= windowHeight / 2 + 8 && mouseY >= windowHeight / 2 - 8) {
        fill("#3EB489");
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (score_lvl_1 <= 6 && score_lvl_1 >= 5) {
          score_lvl_1 = score_lvl_1 + 1;
          score = score_lvl_1;
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
        }
      }
    }

    //Checkpoint 2
    if (mouseIsPressed) {
      strokeWeight(10);
      if (
        mouseX <= windowWidth / 1.8 + 8 &&
        mouseX >= windowWidth / 3.5 - 8 &&
        mouseX >= windowWidth / 2 + 8
      ) {
        if (mouseY <= windowHeight / 2 + 8 && mouseY >= windowHeight / 2 - 8) {
          message = "Keep Going";
          fill("#3EB489");
          rect(
            windowWidth / 4,
            windowHeight / 4,
            windowWidth / 2,
            windowHeight / 2
          );
          fill("white");
          circle(mouseX, mouseY, 50);
          while (score_lvl_1 <= 5 && score_lvl_1 >= 1) {
            score_lvl_1 = score_lvl_1 + 1;
            score = score_lvl_1;
            if (!sound_1.isPlaying()) {
              sound_1.play();
            }
          }
        }
      }
    }
    //Checkpoint 1
    if (mouseIsPressed) {
      if (mouseX <= windowWidth / 2 + 8 && mouseX >= windowWidth / 3.5 - 8) {
        if (mouseY <= windowHeight / 2 + 8 && mouseY >= windowHeight / 2 - 8) {
          message = "Keep Going";
          fill("#3EB489");
          rect(
            windowWidth / 4,
            windowHeight / 4,
            windowWidth / 2,
            windowHeight / 2
          );
          fill("white");
          circle(mouseX, mouseY, 50);
          while (score_lvl_1 <= 1) {
            score_lvl_1 = score_lvl_1 + 1;
            score = score_lvl_1;
          }
        }
      }
    }
  }

  //What to do when not pressed
  else {
    strokeWeight(10);
    fill(19, 111, 209);
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    fill(207, 230, 39);
    circle(windowWidth / 3.5, windowHeight / 2, 50);
    stroke("red");
    message = "Start from the yellow circle and follow the line";
  }

  // Lines
  line(windowWidth / 2, windowHeight / 2, windowWidth / 3.5, windowHeight / 2);
  line(windowWidth / 2, windowHeight / 2, windowWidth / 1.8, windowHeight / 2);

  //Outro scene
  if (score_lvl_1 >= 7) {
    fill("#FDFD96");
    stroke("black");
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    fill("white");
    text("You Did It!!!!", windowWidth / 2, windowHeight / 2);
    message = "Click Next to go to the next level";
    strokeWeight(10);
    fill("white");
    high_score = score_lvl_1;
    rect(windowWidth / 2 - 100, windowHeight / 2 + 50, 200, 100);
    noStroke();
    fill("black");
    textAlign(CENTER);
    score = score_lvl_1;
    text("Next Level", windowWidth / 2 - 100, windowHeight / 2 + 60, 200, 100);
    if (mouseIsPressed) {
      if (mouseX >= windowWidth / 2 - 100 && mouseX <= windowWidth / 2 + 200) {
        if (
          mouseY >= windowHeight / 2 + 50 &&
          mouseY <= windowHeight / 2 + 50 + 100
        ) {
          level1pt5on = true;
          level1on = false;
        }
      }
    }
  }
}

function lvl_2() {
  // Code for the game
  // If statement on what to do when the user is not the said line
  strokeWeight(10);
  if (mouseIsPressed) {
    fill("red");
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    circle(mouseX, mouseY, 50);
    message = "Keep Going";
  }

  // If statement on what to do when the user is on the said line
  if (mouseIsPressed) {
    if (
      mouseX >= windowWidth / 4.35 + 70 &&
      mouseX <= windowWidth / 2 + 70 &&
      mouseY >= windowHeight / 4 + 90 &&
      mouseY <= windowHeight / 1.75 + 70
    ) {
      fill("#3EB489");
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
        fill("#3EB489");
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (Score_lvl_2 <= 25) {
          Score_lvl_2 = Score_lvl_2 + 1;
          score = Score_lvl_2;
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
        }
      }
    }
  }

  if (mouseIsPressed) {
    // line bent down
    if (mouseX >= windowWidth / 2 && mouseX <= windowWidth / 2 + 70) {
      if (mouseY >= windowHeight / 2 && mouseY <= windowHeight / 2 + 70) {
        fill("#3EB489");
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (Score_lvl_2 <= 50 && Score_lvl_2 >= 25) {
          Score_lvl_2 = Score_lvl_2 + 1;
          score = Score_lvl_2;
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
        }
      }
    }
  }

  if (mouseIsPressed) {
    // line on the right
    if (
      mouseX <= windowWidth / 2 + 70 + 5 &&
      mouseX >= windowWidth / 2 + 70 - 5
    ) {
      if (
        mouseY <= windowHeight / 2 + 70 + 5 &&
        mouseY >= windowHeight / 3.5 + 70 - 5
      ) {
        fill("#3EB489");
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (Score_lvl_2 <= 75 && Score_lvl_2 >= 50) {
          Score_lvl_2 = Score_lvl_2 + 1;
          score = Score_lvl_2;
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
        fill("#3EB489");
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (Score_lvl_2 <= 100 && Score_lvl_2 >= 75) {
          Score_lvl_2 = Score_lvl_2 + 1;
          score = Score_lvl_2;
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
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
        fill("#3EB489");
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (Score_lvl_2 <= 125 && Score_lvl_2 >= 100) {
          Score_lvl_2 = Score_lvl_2 + 1;
          score = Score_lvl_2;
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
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
        fill("#3EB489");
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (Score_lvl_2 <= 150 && Score_lvl_2 >= 125) {
          Score_lvl_2 = Score_lvl_2 + 1;
          score = Score_lvl_2;
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
        }
      }
    }
  }

  if (mouseIsPressed) {
    // line on the left
    if (mouseX <= windowWidth / 3.5 + 5 && mouseX >= windowWidth / 3.5 - 5) {
      if (
        mouseY >= windowHeight / 2.17 + 5 &&
        mouseY <= windowHeight / 1.55 - 5
      ) {
        fill("#3EB489");
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (Score_lvl_2 <= 200 && Score_lvl_2 >= 150) {
          Score_lvl_2 = Score_lvl_2 + 1;
          score = Score_lvl_2;
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
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
        fill("#3EB489");
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (Score_lvl_2 <= 225 && Score_lvl_2 >= 200) {
          Score_lvl_2 = Score_lvl_2 + 1;
          score = Score_lvl_2;
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
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
        fill("#3EB489");
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (Score_lvl_2 <= 250 && Score_lvl_2 >= 225) {
          Score_lvl_2 = Score_lvl_2 + 1;
          score = Score_lvl_2;
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
        }
      }
    }
  }

  if (mouseIsPressed) {
    // line 5
    if (mouseX <= windowWidth / 2 + 5 && mouseX >= windowWidth / 3.3 - 5) {
      if (
        mouseY <= windowHeight / 1.85 + 5 &&
        mouseY >= windowHeight / 1.85 - 5
      ) {
        fill("#3EB489");
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (Score_lvl_2 <= 275 && Score_lvl_2 >= 250) {
          Score_lvl_2 = Score_lvl_2 + 1;
          score = Score_lvl_2;
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
        }
      }
    }
  }

  if (mouseIsPressed) {
    // Final Checkpoint
    if (mouseX <= windowWidth / 2 + 5 && mouseX >= windowWidth / 2 - 5) {
      if (
        mouseY <= windowHeight / 1.85 + 5 &&
        mouseY >= windowHeight / 1.85 - 5
      ) {
        fill("#3EB489");
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        while (Score_lvl_2 <= 300 && Score_lvl_2 >= 275) {
          Score_lvl_2 = Score_lvl_2 + 1;
          score = Score_lvl_2;
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
        }
      }
    }
  }
  //What to do when mouse not pressed
  else {
    fill(19, 111, 209);
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    strokeWeight(10);
    fill("yellow");
    circle(windowWidth / 3.25, windowHeight / 2, 50);
    stroke("red");
    message = "Start from the yellow circle and folow the line";
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
  line(windowWidth / 2, windowHeight / 2, windowWidth / 3.25, windowHeight / 2);
  // line 4
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
  if (Score_lvl_2 >= 300) {
    outro_on = true;
  }
}

function level1pt5() {
  // Code for the game for the level 2
  // If statement on what to do when the user is not the said line
  if (mouseIsPressed) {
    message = "You are out of bounds";
    strokeWeight(10);
    fill("red");
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    circle(mouseX, mouseY, 50);
  }

  //Checkpoints

  if (mouseIsPressed) {
    //Correct
    if (mouseX <= windowWidth / 2 + 8 && mouseX >= windowWidth / 3.5 - 8) {
      if (mouseY <= windowHeight / 2 + 8 && mouseY >= windowHeight / 2 - 8) {
        fill("#3EB489");
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        message = "Keep Going";
        while (score_lvl_1pt5 <= 25) {
          score_lvl_1pt5 = score_lvl_1pt5 + 1;
          score = score_lvl_1pt5;
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
        }
      }
    }
  }

  if (mouseIsPressed) {
    strokeWeight(10);
    if (
      mouseX <= windowWidth / 1.8 + 8 &&
      mouseX >= windowWidth / 3.5 - 8 &&
      mouseX >= windowWidth / 2 + 8
    ) {
      if (mouseY <= windowHeight / 2 + 8 && mouseY >= windowHeight / 2 - 8) {
        fill("#3EB489");
        rect(
          windowWidth / 4,
          windowHeight / 4,
          windowWidth / 2,
          windowHeight / 2
        );
        fill("white");
        circle(mouseX, mouseY, 50);
        message = "Keep Going";
        while (score_lvl_1pt5 <= 49 && score_lvl_1pt5 >= 25) {
          score_lvl_1pt5 = score_lvl_1pt5 + 1;
          score = score_lvl_1pt5;
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
        }
      }
    }

    if (mouseIsPressed) {
      //Correct
      if (mouseX >= windowWidth / 2 - 5 && mouseX <= windowWidth / 1.8 + 5) {
        if (
          mouseY >= windowHeight / 2 - 5 &&
          mouseY <= windowHeight / 1.5 + 5
        ) {
          fill("#3EB489");
          rect(
            windowWidth / 4,
            windowHeight / 4,
            windowWidth / 2,
            windowHeight / 2
          );
          fill("white");
          circle(mouseX, mouseY, 50);
          message = "Keep Going";
          if (!sound_1.isPlaying()) {
            sound_1.play();
          }
        }
      }
    }

    if (mouseIsPressed) {
      if (mouseX >= windowWidth / 2 - 5 && mouseX <= windowWidth / 1.8 + 5) {
        if (
          mouseY >= windowHeight / 1.6 - 5 &&
          mouseY <= windowHeight / 1.5 + 5
        ) {
          fill("#3EB489");
          rect(
            windowWidth / 4,
            windowHeight / 4,
            windowWidth / 2,
            windowHeight / 2
          );
          fill("white");
          circle(mouseX, mouseY, 50);
          message = "Keep Going";
          while (score_lvl_1pt5 <= 74 && score_lvl_1pt5 >= 49) {
            score_lvl_1pt5 = score_lvl_1pt5 + 1;
            score = score_lvl_1pt5;
            if (!sound_1.isPlaying()) {
              sound_1.play();
            }
          }
        }
      }
    }

    if (mouseIsPressed) {
      if (mouseX >= windowWidth / 3 - 6 && mouseX <= windowWidth / 2 + 6) {
        if (
          mouseY >= windowHeight / 1.5 - 6 &&
          mouseY <= windowHeight / 1.5 + 6
        ) {
          fill("#3EB489");
          rect(
            windowWidth / 4,
            windowHeight / 4,
            windowWidth / 2,
            windowHeight / 2
          );
          fill("white");
          circle(mouseX, mouseY, 50);
          message = "Keep Going";
          while (score_lvl_1pt5 <= 100 && score_lvl_1pt5 >= 74) {
            score_lvl_1pt5 = score_lvl_1pt5 + 1;
            score = score_lvl_1pt5;
            if (!sound_1.isPlaying()) {
              sound_1.play();
            }
          }
        }
      }
    }

    if (mouseIsPressed) {
      //Correct
      if (mouseX >= windowWidth / 3.5 - 6 && mouseX <= windowWidth / 3 + 6) {
        if (
          mouseY >= windowHeight / 1.5 - 6 &&
          mouseY <= windowHeight / 1.5 + 6
        ) {
          fill("#3EB489");
          rect(
            windowWidth / 4,
            windowHeight / 4,
            windowWidth / 2,
            windowHeight / 2
          );
          fill("white");
          circle(mouseX, mouseY, 50);
          message = "Keep Going";
          while (score_lvl_1pt5 <= 124 && score_lvl_1pt5 >= 100) {
            score_lvl_1pt5 = score_lvl_1pt5 + 1;
            score = score_lvl_1pt5;
            if (!sound_1.isPlaying()) {
              sound_1.play();
            }
          }
        }
      }
    }
  }

  //What to do when not pressed
  else {
    strokeWeight(10);
    fill("blue");
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    fill("yellow");
    circle(windowWidth / 3.5, windowHeight / 2, 50);
    stroke("red");
    message = "Start from the Yellow Circle";
  }

  // Lines
  line(windowWidth / 2, windowHeight / 2, windowWidth / 3.5, windowHeight / 2); //Top line pt 1
  line(windowWidth / 2, windowHeight / 2, windowWidth / 1.8, windowHeight / 2); //Top line pt 2
  line(
    windowWidth / 1.8,
    windowHeight / 2,
    windowWidth / 2,
    windowHeight / 1.5
  ); //Line bend down //change checkpoint value to 1.6
  line(
    windowWidth / 2,
    windowHeight / 1.5,
    windowWidth / 3,
    windowHeight / 1.5
  );
  line(
    windowWidth / 3,
    windowHeight / 1.5,
    windowWidth / 3.5,
    windowHeight / 1.5
  );

  if (score_lvl_1pt5 >= 120) {
    fill("#FDFD96");
    stroke("black");
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    fill("white");
    text("You Did It!!!!", windowWidth / 2, windowHeight / 2);
    message = "Click Next to go to the next level";
    strokeWeight(10);
    fill("white");
    high_score = score_lvl_1 + score_lvl_1pt5;
    rect(windowWidth / 2 - 100, windowHeight / 2 + 50, 200, 100);
    noStroke();
    fill("black");
    textAlign(CENTER);
    score = score_lvl_1pt5;
    text("Next Level", windowWidth / 2 - 100, windowHeight / 2 + 60, 200, 100);
    if (mouseIsPressed) {
      if (mouseX >= windowWidth / 2 - 100 && mouseX <= windowWidth / 2 + 200) {
        if (
          mouseY >= windowHeight / 2 + 50 &&
          mouseY <= windowHeight / 2 + 50 + 100
        ) {
          level1pt5on = false;
          level2on = true;
        }
      }
    }
  }
}

function outro() {
  sound_1.stop();
  sound_2.stop();
  while (x < 100) {
    if (!sound_3.isPlaying()) {
      sound_3.play();
    }
    x++;
  }
  fill("purple");
  stroke("black");
  rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
  fill("white");
  text("You Did It!!!!", windowWidth / 2, windowHeight / 2);
  message = "Great Job On Completing Three levels";
  high_score = score_lvl_1 + score_lvl_1pt5 + Score_lvl_2;
}

const infoButtonClickAndDrag = () => {
  stroke("black");
  strokeWeight(4);
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
    showInfoClickAndDrag = true;
  }

  if (showInfoClickAndDrag) {
    fill("lightgray");
    rect(windowWidth / 2 - 400, windowHeight / 2 - 200, 800, 400);
    fill("black");
    textAlign(CENTER);
    text("✕", windowWidth / 2 + 350, windowHeight / 2 - 150);
    textSize(21);
    noStroke();
    text(
      "Start from the Yellow Circle and go all the way to the end.",
      windowWidth / 2,
      windowHeight / 3
    );
    text(
      "If the circle is white then you are going in the right direction.",
      windowWidth / 2,
      windowHeight / 3 + 35
    );
    text(
      "If the rectangle goes red then it means you are at the wrong spot.",
      windowWidth / 2,
      windowHeight / 3 + 70
    );
    text(
      "Total Score is the score from all the levels.",
      windowWidth / 2,
      windowHeight / 3 + 105
    );
    text(
      "Score is just the score that you get from that individual level that you are in right now",
      windowWidth / 2,
      windowHeight / 3 + 140
    );
    text(
      "Good Luck in finishing all the levels",
      windowWidth / 2,
      windowHeight / 3 + 200
    );

    text("Lead Dev: Patrick Premkumar", windowWidth / 2, windowHeight / 1.5);

    if (
      mouseIsPressed &&
      mouseX >= windowWidth / 2 + 300 &&
      mouseX <= windowWidth / 2 + 400 &&
      mouseY <= windowHeight / 2 - 100 &&
      mouseY >= windowHeight / 2 - 200
    ) {
      showInfoClickAndDrag = false;
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
      showInfoClickAndDrag = false;
    }
  }
};
