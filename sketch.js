let currentScene = "main";
let changeToWhiteBG = true;
let bell;
let buzz;
let wrongInput;
let winnerSound;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bell = loadSound("games/assets/bell.mp3");
  wrongInput = loadSound("games/assets/wrong.wav");
  buzz = loadSound("games/assets/buzzSound.mp3");
  winnerSound = loadSound("games/assets/successSound.wav");
}

function draw() {
  if (currentScene === "main") {
    mainScreen();
  }
  if (currentScene === "menu") {
    if (changeToWhiteBG) {
      background(255, 255, 255);
      changeToWhiteBG = false;
    }
    showMenu();
  }
  if (currentScene === "game_1") {
    if (changeToWhiteBG) {
      background(255, 255, 255);
      changeToWhiteBG = false;
    }
    drawShape();
  }
  if (currentScene === "game_2") {
    if (changeToWhiteBG) {
      background(255, 255, 255);
      changeToWhiteBG = false;
    }
    typingGame(bell, wrongInput);
  }
  if (currentScene === "game_3") {
    if (changeToWhiteBG) {
      background(255, 255, 255);
      changeToWhiteBG = false;
    }
    clickAndDrag();
  }
  if (currentScene === "game_4") {
    if (changeToWhiteBG) {
      background(255, 255, 255);
      changeToWhiteBG = false;
    }
    popTheBubbles(buzz, winnerSound);
  }

  // fill("black");
  // text(`${mouseX}, ${mouseY}`, 100, 100);
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
      changeToWhiteBG = true;
    }
  }
}

const exitButton = () => {
  fill("white");
  rect(30, 25, 90, 40);
  fill("black");
  text("EXIT", 75, 50);
};
