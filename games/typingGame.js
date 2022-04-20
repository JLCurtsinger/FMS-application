let contents = "";
let scoresTyping = 0;
let nextWord = true;
let word = "";
let shake = false;
let letterCount = 5;
let highScore = 0;
let showInfo = false;
let infoWindowSize = 0;
let translateX = 0;
let translateY = 0;
// can't type more than 9 letters
let keyboardKeys = {
  q: "white",
  w: "white",
  e: "white",
  r: "white",
  t: "white",
  y: "white",
  u: "white",
  i: "white",
  o: "white",
  p: "white",
  a: "white",
  s: "white",
  d: "white",
  f: "white",
  g: "white",
  h: "white",
  j: "white",
  k: "white",
  l: "white",
  z: "white",
  x: "white",
  c: "white",
  v: "white",
  b: "white",
  n: "white",
  m: "white",
};
let gameName = "Typing Game";
let gameNameLimit = 0;
let typingGameName = true;

const typingGame = (bell, wrongInput) => {
  // Retrieves high score form local storage
  let highScore_fromStorage = localStorage.getItem("highScore_typing");

  // Check if value from local storage exists
  if (highScore_fromStorage != null) {
    highScore = highScore_fromStorage;
  }

  background(255, 255, 255);

  if (frameCount % 60 === 0) {
    for (const val in keyboardKeys) {
      keyboardKeys[val] = "white";
    }
    shake = false;
  }

  const width = windowWidth / 2;
  const height = windowHeight / 1.8;

  if (nextWord) {
    word = randomLettersFunc(letterCount);
    nextWord = false;
  }

  noStroke();
  // default values for text
  textSize(12);
  strokeWeight(3);

  //Main Bar
  fill("#9AEFFF");
  rect(0, 0, windowWidth, windowHeight / 1 / 8);

  fill("white");
  stroke("black");
  textAlign(CENTER);
  textSize(40);
  text("Score: ", windowWidth / 2 - 250, windowHeight / 1 / 8 - 50);

  textAlign(LEFT);
  text(scoresTyping, windowWidth / 2 - 190, windowHeight / 1 / 8 - 50);

  text("Highscore: ", windowWidth / 2 + 100, windowHeight / 1 / 8 - 50);
  textAlign(LEFT);
  text(highScore, windowWidth / 2 + 320, windowHeight / 1 / 8 - 50);

  textAlign(CENTER);
  text("Exit", windowWidth / 1 / 25, windowHeight / 1 / 8 - 50);

  text(gameName.substring(0, gameNameLimit), windowWidth / 2, windowHeight / 5);
  if (
    gameName.length > gameNameLimit &&
    frameCount % 20 == 0 &&
    typingGameName
  ) {
    gameNameLimit++;
  } else if (gameName.length === gameNameLimit) {
    typingGameName = false;
  }

  if (gameNameLimit > 0 && frameCount % 20 == 0 && !typingGameName) {
    gameNameLimit--;
  } else if (gameNameLimit === 0) {
    typingGameName = true;
  }

  fill("white");
  stroke("black");
  rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 4);
  strokeWeight(1);
  fill("black");

  textAlign(CENTER);

  text(word, windowWidth / 2, windowHeight / 4 + 70);

  difficultyButtons(letterCount);

  displayKeyboard(width, height);

  if (word.slice(0, contents.length) === contents) {
    fill("green");
  } else {
    fill("red");
  }

  if (shake) {
    translate(random(-5, 5), 0);
  }

  text(contents, windowWidth / 2, windowHeight / 4 + 150);

  if (mouseIsPressed && frameCount % 7 === 0) {
    if (
      mouseX >= windowWidth / 5 - 30 &&
      mouseX <= windowWidth / 5 + 30 &&
      mouseY <= windowHeight / 3.4 &&
      mouseY >= windowHeight / 3.4 - 30
    ) {
      if (letterCount < 10) {
        letterCount++;
        word = randomLettersFunc(letterCount);
      }
    }

    if (
      mouseX >= windowWidth / 5 - 30 &&
      mouseX <= windowWidth / 5 + 30 &&
      mouseY <= windowHeight / 2.2 + 30 &&
      mouseY >= windowHeight / 2.2
    ) {
      if (letterCount > 3) {
        letterCount--;
        word = randomLettersFunc(letterCount);
      }
    }
  }

  //Info button
  infoButtonTyping();
};

function keyTyped() {
  if (keyCode === ENTER) {
    // console.log("Pressed enter");

    if (
      word.slice(0, contents.length) === contents &&
      contents != "" &&
      word.length === contents.length
    ) {
      contents = "";
      nextWord = true;
      scoresTyping += 10 * letterCount * 2;
      // play bell sound defined in sketch.js
      if (!bell.isPlaying()) {
        bell.play();
      }

      if (highScore < scoresTyping) {
        localStorage.setItem("highScore_typing", scoresTyping);
      }
    } else {
      shake = true;
      if (scoresTyping > 0) {
        scoresTyping -= 50;
      }
      // sound effect when user input doesn't match the prompt
      if (!wrongInput.isPlaying() && contents !== "") {
        wrongInput.play();
      }
    }
  }

  if (
    contents.length < letterCount + 1 &&
    key.match(/^[a-zA-Z]+$/) &&
    keyCode != ENTER
  ) {
    contents += key.toLowerCase();
    keyboardKeys[key] = "#8BE78A";
  }
}

// Difficulty option
function keyPressed() {
  if (keyCode === UP_ARROW) {
    console.log("Up arrow");
    if (letterCount < 10) {
      letterCount++;
      word = randomLettersFunc(letterCount);
    }
  }
  if (keyCode === DOWN_ARROW) {
    if (letterCount > 3) {
      letterCount--;
      word = randomLettersFunc(letterCount);
    }
  }
}

function keyReleased() {
  if (keyCode == BACKSPACE) {
    contents = contents.substring(0, contents.length - 1);
  }
}

// Function returns a string of randomized letter with a desired length passed as argument
const randomLettersFunc = (lengthOfString) => {
  let randomLetters = "";

  for (let i = 0; i < lengthOfString; i++) {
    randomLetters += String.fromCharCode(random(97, 123));
  }
  nextWord = false;
  return randomLetters;
};

// Displays on screen keyboard
const displayKeyboard = (width, height) => {
  for (let i = 0; i < Object.keys(keyboardKeys).length; i++) {
    if (i < 10) {
      fill(Object.values(keyboardKeys)[i]);
      rect(width - 300 + i * 60, height, 50, 50, 5);
      fill("black");
      text(
        Object.keys(keyboardKeys)[i],
        width - 300 + i * 60 + 25,
        height + 35
      );
    }
    if (i >= 10 && i < 19) {
      fill(Object.values(keyboardKeys)[i]);
      rect(width - 865 + i * 60, height + 60, 50, 50, 5);
      fill("black");
      text(
        Object.keys(keyboardKeys)[i],
        width - 865 + i * 60 + 25,
        height + 35 + 60
      );
    }
    if (i >= 19 && i < 26) {
      fill(Object.values(keyboardKeys)[i]);
      rect(width - 1345 + i * 60, height + 120, 50, 50, 5);
      fill("black");
      text(
        Object.keys(keyboardKeys)[i],
        width - 1345 + i * 60 + 25,
        height + 35 + 120
      );
    }
  }
};

const difficultyButtons = (initialDif) => {
  const size = 30;
  triangle(
    windowWidth / 5 - size,
    windowHeight / 3.4,
    windowWidth / 5 + size,
    windowHeight / 3.4,
    windowWidth / 5,
    windowHeight / 3.4 - size
  );

  stroke("black");
  noFill();
  circle(windowWidth / 5, windowHeight / 2.7, 60);

  fill("black");

  text(initialDif, windowWidth / 5, windowHeight / 2.59);

  triangle(
    windowWidth / 5 - size,
    windowHeight / 2.2,
    windowWidth / 5 + size,
    windowHeight / 2.2,
    windowWidth / 5,
    windowHeight / 2.2 + size
  );

  fill("white");
  text("+", windowWidth / 5, windowHeight / 3.43);
  text("-", windowWidth / 5, windowHeight / 2.08);

  fill("black");
};

const infoButtonTyping = () => {
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
    showInfo = true;
  }

  if (showInfo) {
    fill("lightgray");
    rect(windowWidth / 2 - 400, windowHeight / 2 - 200, 800, 400);
    fill("black");
    textAlign(CENTER);
    text("✕", windowWidth / 2 + 350, windowHeight / 2 - 150);
    textSize(25);
    text("How To Play", windowWidth / 2, windowHeight / 2 - 150);
    textAlign(LEFT);
    text("Match given prompt", windowWidth / 4, windowHeight / 2 - 100);

    textParser(windowWidth / 4, windowHeight / 2 - 50, [
      ["Correctly typed letters will be in ", "black"],
      ["green", "green"],
    ]);
    textParser(windowWidth / 4, windowHeight / 2, [
      ["Incorrectly typed letters will be in ", "black"],
      ["red ", "red"],
    ]);
    textParser(windowWidth / 4, windowHeight / 2 + 50, [
      ['After you finish typing, press "Enter" to submit', "black"],
    ]);
    textParser(windowWidth / 4, windowHeight / 2 + 100, [
      ["You will be awarded points for each successful prompt", "black"],
    ]);
    textParser(windowWidth / 4, windowHeight / 2 + 150, [
      ["You will lose points if prompt is not matched", "black"],
    ]);

    textParser(windowWidth / 4 + 500, windowHeight / 2 + 185, [
      ["Author: Nikolay Kim", "black"],
    ]);

    if (
      mouseIsPressed &&
      mouseX >= windowWidth / 2 + 300 &&
      mouseX <= windowWidth / 2 + 400 &&
      mouseY <= windowHeight / 2 - 100 &&
      mouseY >= windowHeight / 2 - 200
    ) {
      showInfo = false;
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
      showInfo = false;
    }
  }
};

const textParser = (posX, posY, textArr) => {
  /*
    This function takes starting position for the text in the form of posX and posY
    textArr is an array that contains an array with text and color
  */
  let x = posX;
  for (let words of textArr) {
    fill(words[1]);
    text(words[0], x, posY);
    x += textWidth(words[0]);
    console.log(textWidth(words[0]));
  }
};
