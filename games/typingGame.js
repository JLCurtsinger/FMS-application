let contents = "";
let scoresTyping = 0;
let nextWord = true;
let word = "";
let shake = false;
let letterCount = 5;
let highScore = 0;

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
  strokeWeight(1);

  fill("#9AEFFF");
  //Main Bar
  rect(0, 0, windowWidth, windowHeight / 1 / 8);
  //Restart Button
  // rect(10, windowHeight - 120, windowWidth / 1 / 10, windowHeight / 1 / 10, 20);
  fill("white");
  textAlign(CENTER);
  textSize(40);
  text("Score: ", windowWidth / 2 - 250, windowHeight / 1 / 8 - 50);

  textAlign(LEFT);
  text(scoresTyping, windowWidth / 2 - 190, windowHeight / 1 / 8 - 50);

  text("Highscore: ", windowWidth / 2 + 100, windowHeight / 1 / 8 - 50);
  textAlign(LEFT);
  text(highScore, windowWidth / 2 + 300, windowHeight / 1 / 8 - 50);

  textAlign(CENTER);
  text("Exit", windowWidth / 1 / 25, windowHeight / 1 / 8 - 50);

  fill("black");
  text("Typing game", width * 2 - 200, height * 2 - 150);
  fill("white");
  stroke("black");
  rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 4);

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

  console.log(keyCode);
  if (contents.length < 9 && key.match(/^[a-zA-Z]+$/) && keyCode != ENTER) {
    contents += key.toLowerCase();
    keyboardKeys[key] = "#8BE78A";
  }
}

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
