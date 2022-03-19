const clickAndDrag = () => {
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

  //Text Above Play Area
  fill("Black");
  text("Follow The Line", windowWidth / 2, windowHeight / 1 / 5);

  // Draw play area
  fill(0, 0, 0, 0);
  stroke("Black");
  rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
  if (mouseIsPressed) {
    fill("red");
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
  }

  // Code for the game
  // If statement on what to do when the user is not the said line
  if (mouseIsPressed) {
    fill("red");
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
  }

  // If statement on what to do when the user is on the said line
  if (mouseIsPressed) {
    if (mouseX >= windowWidth / 4 + 10 && mouseX <= windowWidth / 2 + 70)
      if (mouseY >= windowHeight / 4 + 90 && mouseY <= windowHeight / 1 + 70)
        fill("green");
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    circle(mouseX, mouseY, 50);
    if (mouseX <= windowHeight / 2 - 25 && mouseX >= windowWidth / 4 + 25) {
      fill("black");
      circle(windowWidth / 2, windowHeight / 2, 50);
    }
  }

  //What to do when mouse not pressed
  else {
    fill("blue");
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    strokeWeight(10);
    circle(windowWidth / 2, windowHeight / 2, 50);
    circle(windowWidth / 3, windowHeight / 2, 50);
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
  ); //top line
  line(
    windowWidth / 4.35 + 70,
    windowHeight / 2.75 + 70,
    windowWidth / 2.45 + 85,
    windowHeight / 2.45 + 85
  );
  line(windowWidth / 2, windowHeight / 2, windowWidth / 3.25, windowHeight / 2); // line middle
  line(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 + 70,
    windowHeight / 2 + 70
  ); // line bent down
  line(
    windowWidth / 3.65,
    windowHeight / 2.75,
    windowWidth / 4.35 + 70,
    windowHeight / 2.75 + 70
  ); //line on the left
  line(
    windowWidth / 4.35 + 70,
    windowHeight / 2 + 70,
    windowWidth / 2 + 70,
    windowHeight / 1.75 + 70
  );
};
