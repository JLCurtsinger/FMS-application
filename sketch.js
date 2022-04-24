let currentScene = "main";
let changeToWhiteBG = true;
let bell;
let buzz;
let wrongInput;
let winnerSound;
let ding;
let win;
let selectSound;
let drawSound;
let sadSound;
let happySound;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bell = loadSound("games/assets/bell.mp3");
  wrongInput = loadSound("games/assets/wrong.wav");
  buzz = loadSound("games/assets/buzzSound.mp3");
  winnerSound = loadSound("games/assets/successSound.wav");
  bubblePop = loadSound("games/assets/popSound.ogg");
  // draw shape sounds
  ding = loadSound("games/assets/ding.mp3");
  win = loadSound("games/assets/win.mp3");
  selectSound = loadSound("games/assets/select.mp3");
  drawSound = loadSound("games/assets/draw.mp3");
  sadSound = loadSound("games/assets/loserSound.wav");
  happySound = loadSound("games/assets/gameOverWinner.wav");
  // Click and drag sounds
  sound_3 = loadSound("games/assets/gameOverWinner.wav");
  bubbleFont = loadFont("games/assets/bubbleFont.ttf");
}

function draw() {
  if (currentScene === "main") {
    mainScreen();
  }
  // if (currentScene === "menu") {
  //   if (changeToWhiteBG) {
  //     background(255, 255, 255);
  //     changeToWhiteBG = false;
  //   }
  //   showMenu();
  // }
  if (currentScene === "game_1") {
    if (changeToWhiteBG) {
      background("White");
      changeToWhiteBG = false;
    }
    drawShape(ding, win, selectSound, drawSound);
  }
  if (currentScene === "game_2") {
    if (changeToWhiteBG) {
      background(240, 250, 255);
      changeToWhiteBG = false;
    }
    typingGame(bell, wrongInput);
  }
  if (currentScene === "game_3") {
    if (changeToWhiteBG) {
      background(240, 250, 255);
      changeToWhiteBG = false;
    }
    clickAndDrag(bell, buzz, sound_3);
  }
  if (currentScene === "game_4") {
    if (changeToWhiteBG) {
      background(240, 250, 255);
      changeToWhiteBG = false;
    }
    popTheBubbles(
      buzz,
      winnerSound,
      bubblePop,
      sadSound,
      happySound,
      bubbleFont
    );
  }

  // fill("black");
  // text(`${mouseX}, ${mouseY}`, 100, 100);
}

function mouseClicked() {
  mouse = true;

  if (currentScene === "main") {
    if (
      mouseX >= width / 2 - 100 &&
      mouseX <= width / 2 - 100 + 200 &&
      mouseY >= height / 2 - 230 &&
      mouseY <= height / 2 - 230 + 50
    ) {
      currentScene = "game_1";
    }
    if (
      mouseX >= width / 2 - 100 &&
      mouseX <= width / 2 - 100 + 200 &&
      mouseY >= height / 2 - 130 &&
      mouseY <= height / 2 - 130 + 50
    ) {
      currentScene = "game_2";
    }
    if (
      mouseX >= width / 2 - 100 &&
      mouseX <= width / 2 - 100 + 200 &&
      mouseY >= height / 2 - 30 &&
      mouseY <= height / 2 - 30 + 50
    ) {
      currentScene = "game_3";
    }
    if (
      mouseX >= width / 2 - 100 &&
      mouseX <= width / 2 - 100 + 200 &&
      mouseY >= height / 2 + 70 &&
      mouseY <= height / 2 + 70 + 50
    ) {
      currentScene = "game_4";
    }
    // if (
    //   mouseX >= 30 &&
    //   mouseX <= 30 + 100 &&
    //   mouseY >= height - 80 &&
    //   mouseY <= height - 80 + 50
    // ) {
    //   currentScene = "menu";
    // }
  }
  if (
    currentScene === "game_1" ||
    currentScene === "game_2" ||
    currentScene === "game_3" ||
    currentScene === "game_4"
    // ||currentScene === "menu"
  ) {
    if (
      mouseX >= 30 &&
      mouseX <= 30 + 90 &&
      mouseY >= 25 &&
      mouseY <= 25 + 40
    ) {
      currentScene = "main";
      changeToWhiteBG = true;
      window.location.reload(true);
    }
  }
}

const exitButton = () => {
  fill("white");
  rect(30, 25, 90, 40);
  fill("black");
  text("EXIT", 75, 50);
};
