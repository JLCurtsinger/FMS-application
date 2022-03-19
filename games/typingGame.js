let contents = "";
let scoreTyping = 0;

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

const words = {
  easy: ["cat", "dog", "owl"],
  medium: ["lunch", "towel", "space"],
  hard: ["absolute", "activity", "aircraft"],
};

const typingGame = () => {
  if (frameCount % 60 == 0) {
    for (const val in keyboardKeys) {
      keyboardKeys[val] = "white";
    }
  }

  const width = windowWidth / 2;
  const height = windowHeight / 1.8;

  noStroke();
  fill("#9AEFFF");
  //Main Bar
  rect(0, 0, windowWidth, windowHeight / 1 / 8);
  //Restart Button
  rect(10, windowHeight - 120, windowWidth / 1 / 10, windowHeight / 1 / 10, 20);
  fill("white");
  textAlign(CENTER);
  textSize(40);
  text("Typing: ", windowWidth / 2 - 10, windowHeight / 1 / 8 - 50);
  text(score, windowWidth / 2 + 70, windowHeight / 1 / 8 - 50);
  text("Exit", windowWidth / 1 / 25, windowHeight / 1 / 8 - 50);

  fill("black");
  text("TODO: Typing", width * 2 - 200, height * 2 - 150);
  fill("white");
  stroke("black");
  rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 4);

  fill("black");
  textAlign(CENTER);
  text(words.easy[0], windowWidth / 2, windowHeight / 4 + 70);

  if (words.easy[0].slice(0, contents.length) === contents) {
    fill("green");
  } else {
    fill("red");
  }

  text(contents, windowWidth / 2, windowHeight / 4 + 150);

  displayKeyboard(width, height);
};

function keyTyped() {
  if (keyCode === ENTER) {
    console.log("Pressed enter");
  }
  console.log(keyCode);
  if (contents.length < 9 && key.match(/^[a-zA-Z]+$/) && keyCode != ENTER) {
    contents += key.toLowerCase();
    keyboardKeys[key] = "#8BE78A";
  }
}

function keyReleased() {
  if (keyCode == BACKSPACE) {
    contents = contents.substring(0, contents.length - 1);
  }
}

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
