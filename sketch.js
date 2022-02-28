let currentScene = "main";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  if (currentScene === "main") {
    mainScreen();
  }
  if (currentScene === "menu") {
    showMenu();
    exitButton();
  }
  if (currentScene === "game_1") {
    text("TODO: Draw A Shape", width / 2 - 125, height / 2 - 200);
    exitButton();
  }
  if (currentScene === "game_2") {
    text("TODO: Typing", width / 2 - 125, height / 2 - 200);
    exitButton();
  }
  if (currentScene === "game_3") {
    text("TODO: Click And Drag", width / 2 - 125, height / 2 - 200);
    exitButton();
  }
  if (currentScene === "game_4") {
    text("TODO: Pop The Bubbles", width / 2 - 125, height / 2 - 200);
    exitButton();
  }

  fill("black");
  text(`${mouseX}, ${mouseY}`, 100, 100);
}

function mouseClicked() {
  mouse = true;

  if (currentScene === "main") {
    if (
      mouseX >= width / 2 - 150 &&
      mouseX <= width / 2 - 150 + 200 &&
      mouseY >= height / 2 - 230 &&
      mouseY <= height / 2 - 230 + 50
    ) {
      currentScene = "game_1";
    }
    if (
      mouseX >= width / 2 - 150 &&
      mouseX <= width / 2 - 150 + 200 &&
      mouseY >= height / 2 - 130 &&
      mouseY <= height / 2 - 130 + 50
    ) {
      currentScene = "game_2";
    }
    if (
      mouseX >= width / 2 - 150 &&
      mouseX <= width / 2 - 150 + 200 &&
      mouseY >= height / 2 - 30 &&
      mouseY <= height / 2 - 30 + 50
    ) {
      currentScene = "game_3";
    }
    if (
      mouseX >= width / 2 - 150 &&
      mouseX <= width / 2 - 150 + 200 &&
      mouseY >= height / 2 + 70 &&
      mouseY <= height / 2 + 70 + 50
    ) {
      currentScene = "game_4";
    }
    if (
      mouseX >= 30 &&
      mouseX <= 30 + 100 &&
      mouseY >= height - 80 &&
      mouseY <= height - 80 + 50
    ) {
      currentScene = "menu";
    }
  }
  if (
    currentScene === "game_1" ||
    currentScene === "game_2" ||
    currentScene === "game_3" ||
    currentScene === "game_4" ||
    currentScene === "menu"
  ) {
    if (
      mouseX >= 30 &&
      mouseX <= 30 + 90 &&
      mouseY >= 25 &&
      mouseY <= 25 + 40
    ) {
      currentScene = "main";
    }
  }
}

const mainScreen = () => {
  noStroke();
  background("#2CDAFB");
  fill("#9AEFFF");
  triangle(0, -100, 0, height, width / 2, height);

  fill("white");
  triangle(0, -100, width / 3, -100, width / 5.92, 200);

  rect(width / 2 - 150, height / 2 - 230, 200, 50);
  rect(width / 2 - 150, height / 2 - 130, 200, 50);
  rect(width / 2 - 150, height / 2 - 30, 200, 50);
  rect(width / 2 - 150, height / 2 + 70, 200, 50);
  rect(30, height - 80, 100, 50);

  fill("black");
  text("Draw A Shape", width / 2 - 50, height / 2 - 200);
  text("Typing", width / 2 - 50, height / 2 - 100);
  text("Click And Drag", width / 2 - 50, height / 2);
  text("Pop The Bubbles", width / 2 - 50, height / 2 + 100);
  text("MENU", 75, height - 50);
  textSize(20);
  textAlign(CENTER);
};

const exitButton = () => {
  fill("white");
  rect(30, 25, 90, 40);
  fill("black");
  text("EXIT", 75, 50);
};

const showMenu = () => {
  text("TODO: Menu", width / 2 - 50, height / 2 - 200);
};
