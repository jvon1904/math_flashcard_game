const body = document.getElementById("body");
const timerDisp = document.getElementById("time");
const scoreDisp = document.getElementById("score");
const incorrectDisp = document.getElementById("incorrect");
const totalScoreDisp = document.getElementById("total-score");
const resultDisp = document.getElementById("result");

let timer = 60;

let incorrect = 0;

let correct = 0;

let score = 0;
let highScore = 0;
let result;
const topDigDisp = document.getElementById("top-digit");
const btmDigDisp = document.getElementById("bottom-digit");
let topDig;
let btmDig;
let randNum = 0;
const ans1Disp = document.getElementById("answer-1");
const ans2Disp = document.getElementById("answer-2");
const ans3Disp = document.getElementById("answer-3");
const ans4Disp = document.getElementById("answer-4");
const ans5Disp = document.getElementById("answer-5");
const ans6Disp = document.getElementById("answer-6");

let ans1 = {};
let ans2 = {};
let ans3 = {};
let ans4 = {};
let incorAns;
let corAns;

let ansArr = [ans1Disp, ans2Disp, ans3Disp, ans4Disp];

let inCorAnsArr = [, ,];

const settings = document.querySelector(".settings");

const statistics = document.querySelector(".statistics");

const announce = document.querySelector(".announce");

const title = document.querySelector(".title");

const highScoreDisp = document.getElementById("highscore");

const btnStart = document.getElementById("start-button");
const btnStatsStart = document.getElementById("stats-start-button");

const btnStats = document.getElementById("stats-button");

const highScoreAud = new Audio("high-score.wav");

const correctAnsAud = new Audio("correct-answer.wav");

const incorrectAnsAud = new Audio("wrong.wav");

let ans1Bord = 1;
let ans2Bord = 0;
let ans3Bord = 0;
let ans4Bord = 0;

btnStart.addEventListener("click", function () {
  ans1Bord = 1;
  ans2Bord = 0;
  ans3Bord = 0;
  ans4Bord = 0;
  correct = 0;
  incorrect = 0;
  score = 0;
  getMathEquat();
  let count = 60;

  let timer = setInterval(() => {
    count--;
    timerDisp.textContent = count;
    if (count <= 0) {
      clearInterval(timer);
      newGame();
    }
  }, 1000);
  hideSettings();
});

btnStatsStart.addEventListener("click", function () {
  ans1Bord = 1;
  ans2Bord = 0;
  ans3Bord = 0;
  ans4Bord = 0;
  correct = 0;
  incorrect = 0;
  score = 0;
  getMathEquat();
  let count = 60;

  let timer = setInterval(() => {
    count--;
    timerDisp.textContent = count;
    if (count <= 0) {
      clearInterval(timer);
      newGame();
    }
  }, 100);
  hideSettings();
});

btnStats.addEventListener("click", function () {
  statistics.classList.remove("hidden");
});

ans1Disp.classList.add("border");

function ans1Border() {
  ans2Bord = false;
  ans2Disp.classList.remove("border");
  ans3Bord = false;
  ans3Disp.classList.remove("border");
  ans4Bord = false;
  ans4Disp.classList.remove("border");
  ans1Bord = true;
  ans1Disp.classList.add("border");
}
function ans2Border() {
  ans1Bord = false;
  ans1Disp.classList.remove("border");
  ans3Bord = false;
  ans3Disp.classList.remove("border");
  ans4Bord = false;
  ans4Disp.classList.remove("border");
  ans2Bord = true;
  ans2Disp.classList.add("border");
}
function ans3Border() {
  ans2Bord = false;
  ans2Disp.classList.remove("border");
  ans1Bord = false;
  ans1Disp.classList.remove("border");
  ans4Bord = false;
  ans4Disp.classList.remove("border");
  ans3Bord = true;
  ans3Disp.classList.add("border");
}
function ans4Border() {
  ans2Bord = false;
  ans2Disp.classList.remove("border");
  ans3Bord = false;
  ans3Disp.classList.remove("border");
  ans1Bord = false;
  ans1Disp.classList.remove("border");
  ans4Bord = true;
  ans4Disp.classList.add("border");
}

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    if (ans1Bord) {
      ans2Border();
    } else if (ans2Bord) {
      ans3Border();
    } else if (ans3Bord) {
      ans4Border();
    } else if (ans4Bord) {
      ans1Border();
    }
  } else if (e.key === "ArrowLeft") {
    if (ans1Bord) {
      ans4Border();
    } else if (ans2Bord) {
      ans1Border();
    } else if (ans3Bord) {
      ans2Border();
    } else if (ans4Bord) {
      ans3Border();
    }
  } else if (e.key === " ") {
    if (ans1Bord) {
      if (ansArr[0].textContent === String(corAns)) {
        rightAns();
      } else {
        wrongAns(0);
      }
    } else if (ans2Bord) {
      if (ansArr[1].textContent === String(corAns)) {
        rightAns();
      } else {
        wrongAns(1);
      }
    } else if (ans3Bord) {
      if (ansArr[2].textContent === String(corAns)) {
        rightAns();
      } else {
        wrongAns(2);
      }
    } else if (ans4Bord) {
      if (ansArr[3].textContent === String(corAns)) {
        rightAns();
      } else {
        wrongAns(3);
      }
    }
  }
});
ans1Disp.addEventListener("hover", function () {
  ans1Border();
});
ans2Disp.addEventListener("hover", function () {
  ans2Border();
});
ans3Disp.addEventListener("hover", function () {
  ans3Border();
});
ans4Disp.addEventListener("hover", function () {
  ans4Border();
});

ans1Disp.addEventListener("click", function () {
  if (ansArr[0].textContent === String(corAns)) {
    rightAns();
  } else {
    wrongAns(0);
  }
});

ans2Disp.addEventListener("click", function () {
  if (ansArr[1].textContent === String(corAns)) {
    rightAns();
  } else {
    wrongAns(1);
  }
});
ans3Disp.addEventListener("click", function () {
  if (ansArr[2].textContent === String(corAns)) {
    rightAns();
  } else {
    wrongAns(2);
  }
});
ans4Disp.addEventListener("click", function () {
  if (ansArr[3].textContent === String(corAns)) {
    rightAns();
  } else {
    wrongAns(3);
  }
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function red(e) {
  e.classList.add("red");
}

function rightAns() {
  correct++;
  scoreDisp.textContent = correct;
  correctAnsAud.play();
  score++;
  totalScoreDisp.textContent = score;
  getMathEquat();
}
function wrongAns(i) {
  incorrectAnsAud.play();
  red(ansArr[i]);
  incorrect++;
  incorrectDisp.textContent = incorrect;
  score--;
  totalScoreDisp.textContent = score;
}

function newGame() {
  timerDisp.textContent = 60;
  scoreDisp.textContent = 0;
  settings.classList.remove("hidden");
  body.classList.add("blur");
  announce.textContent = score;
  if (score > highScore) {
    highScoreAud.play();
    title.textContent = "New highscore!";
    highScore = score;
    highScoreDisp.textContent = highScore;
  } else {
    title.textContent = "Start Game";
  }
}

function getRandNum(n) {
  n = Math.trunc(Math.random() * 13);
  console.log(n);
  return n;
}

function hideSettings() {
  settings.classList.add("hidden");
  body.classList.remove("blur");
  statistics.classList.add("hidden");
}

function getMathEquat() {
  btnStats.classList.remove("hidden");
  ansArr = [ans1Disp, ans2Disp, ans3Disp, ans4Disp];
  ansArr.forEach((element) => {
    element.classList.remove("red");
    element.classList.remove("hidden");
  });

  topDig = getRandNum();
  topDigDisp.textContent = topDig;
  btmDig = getRandNum();
  btmDigDisp.textContent = btmDig;
  corAns = topDig + btmDig;
  console.log(corAns);

  let ansOptions = [];
  ansOptions.push(corAns);
  console.log(ansOptions);

  for (let i = 0; i < 100; i++) {
    let j = Math.trunc(Math.random() * 24 + 1);
    if (j !== corAns && Math.abs(corAns - j) < 10 && j > 0) {
      ansOptions.push(j);
      break;
    }
  }
  for (let i = 0; i < 100; i++) {
    let j = Math.trunc(Math.random() * 24 + 1);
    if (
      j !== corAns &&
      j !== ansOptions[1] &&
      Math.abs(corAns - j) < 10 &&
      j > 0
    ) {
      ansOptions.push(j);
      break;
    }
  }
  for (let i = 0; i < 100; i++) {
    let j = Math.trunc(Math.random() * 24 + 1);
    if (
      j !== corAns &&
      j !== ansOptions[1] &&
      j !== ansOptions[2] &&
      Math.abs(corAns - j) < 10 &&
      j > 0
    ) {
      ansOptions.push(j);
      break;
    }
  }

  let newAnsOptions = shuffleArray(ansOptions);

  ansArr.forEach((element) => {
    element.textContent = newAnsOptions.pop();
  });
}
