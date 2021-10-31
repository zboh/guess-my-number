"use strict";

// get random secret number
let secretNum = undefined;
const numGenerator = function () {
  secretNum = Math.trunc(Math.random() * 20 + 1);
  return secretNum;
};

numGenerator();
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

displayScore(score);

// game mechanics
const checkBtn = document
  .querySelector(".check")
  .addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    // when there is no input
    if (!guess) {
      displayMessage("🔞 No Number");

      //   when player wins
    } else if (guess === secretNum) {
      displayMessage("☄️ Correct Number!");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNum;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }

      //   when guess is wrong
    } else if (guess !== secretNum) {
      if (score > 1) {
        displayMessage(guess > secretNum ? "📈 Too High!" : "📉 Too Low");
        score--;
        displayScore(score);
      } else {
        displayMessage("😰 You've Lost the Game");
        displayScore(0);
      }
    }
  });

//   game reset
const again = document
  .querySelector(".again")
  .addEventListener("click", function () {
    score = 20;
    displayScore(score);
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";
    numGenerator();
  });
