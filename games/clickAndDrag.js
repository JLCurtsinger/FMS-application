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

  if (mouseIsPressed) {
    if (mouseX >= windowWidth / 4 + 10 && mouseX <= windowWidth / 2 + 70)
      if (mouseY >= windowHeight / 4 + 90 && mouseY <= windowHeight / 1 + 70)
        fill("green");
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    if (mouseX <= windowHeight / 2 - 25 && mouseX >= windowWidth / 4 + 25) {
      circle(mouseX, mouseY, 50);
    }
  } else {
    //circle()
    line(
      windowWidth / 4 + 10,
      windowHeight / 4 + 90,
      windowWidth / 2 + 70,
      windowHeight / 2 + 70
    );
    fill("blue");
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    strokeWeight(10);
    stroke("green");
  }

  line(
    windowWidth / 4 + 10,
    windowHeight / 4 + 90,
    windowWidth / 2 + 70,
    windowHeight / 2 + 70
  );
  line(
    windowWidth / 2 + 70,
    windowHeight / 2 + 70,
    windowWidth / -70 + 70,
    windowHeight / 0.25 + 70
  );
};
