function popTheBubbles() {
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

  fill("black");
  text("TODO: Pop The Bubbles", width / 2 - 125, height / 2 - 220);
  fill("white");
  stroke("black");
  rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);

  //let circle1 = circle(350, 300, 35);
  // strokeWeight(35);
  // stroke(69, 63, 252);
  // point(mouseX, mouseY);
}
