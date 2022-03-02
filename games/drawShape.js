const drawShape = () => {
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

  text("TODO: Draw a Shape", width / 2 - 125, height / 2 - 200);
};
