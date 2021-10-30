"use strict";

// get random secret number
// const secretNum = Math.trunc(Math.random() * 20 + 1);
let secretNum = undefined;
const numGenerator = function () {
  secretNum = Math.trunc(Math.random() * 20 + 1);
  return secretNum;
};
numGenerator();
let score = 20;
let highScore = 0;
document.querySelector(".score").textContent = score;

// game mechanics
const checkBtn = document
  .querySelector(".check")
  .addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    // when there is no input
    if (!guess) {
      document.querySelector(".message").textContent = "🔞 No Number";

      //   when player wins
    } else if (guess === secretNum) {
      document.querySelector(".message").textContent = "☄️ Correct Number!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNum;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }

      //   when guess is hight
    } else if (guess > secretNum) {
      if (score > 1) {
        document.querySelector(".message").textContent = "📈 Too High!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "😰 You've Lost the Game";
        document.querySelector(".score").textContent = 0;
      }

      //   when guess is low
    } else if (guess < secretNum) {
      if (score > 1) {
        document.querySelector(".message").textContent = "📉 Too Low";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "😰 You've Lost the Game";
        document.querySelector(".score").textContent = 0;
      }
    }
  });

//   game reset
const again = document
  .querySelector(".again")
  .addEventListener("click", function () {
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    numGenerator();
  });

// document.querySelector(".message").textContent = "Correct Number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value = 100;
// console.log(document.querySelector(".guess").value);
