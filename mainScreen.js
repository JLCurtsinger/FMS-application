const mainScreen = () => {
  noStroke();
  background("#2CDAFB");
  fill("#9AEFFF");
  triangle(0, -100, 0, height, width / 2, height);

  fill("white");
  triangle(0, -100, width / 3, -100, width / 5.92, 200);

  stroke("black");
  strokeWeight(1.2);
  rect(width / 2 - 150, height / 2 - 230, 200, 50);
  rect(width / 2 - 150, height / 2 - 130, 200, 50);
  rect(width / 2 - 150, height / 2 - 30, 200, 50);
  rect(width / 2 - 150, height / 2 + 70, 200, 50);
  rect(30, height - 80, 100, 50);

  fill("black");
  strokeWeight(0);
  text("Draw A Shape", width / 2 - 50, height / 2 - 200);
  text("Typing", width / 2 - 50, height / 2 - 100);
  text("Click And Drag", width / 2 - 50, height / 2);
  text("Pop The Bubbles", width / 2 - 50, height / 2 + 100);
  text("MENU", 80, height - 50);
  textSize(20);
  textStyle(BOLD);
  textAlign(CENTER);
};
