"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}

const displayNumber = function (number) {
    document.querySelector(".number").textContent = number;
}

const displayScore = function (score) {
    document.querySelector(".score").textContent = score;
}


// Handling Click Events
document.querySelector(".check").addEventListener("click", function () {
  const userGuess = Number(document.querySelector(".guess").value);
  console.log(userGuess, typeof userGuess);

  // Implementing Game Logic

  // When there is no input
  if (!userGuess) {
   displayMessage("No Number Entered.");

    // When input is correct
  } else if (userGuess === secretNumber) {
    displayMessage("You Guessed the Correct Number!");
    document.querySelector("body").style.backgroundColor = "#2b9348";
    document.querySelector(".number").style.width = "50rem";
    displayNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When user's guess is wrong 
  } else if (userGuess !== secretNumber) {
    if (score > 1) {
        displayMessage(userGuess > secretNumber ? "Too High!" : "Too Low!");
        score--;
        displayScore(score);
      } else {
        displayMessage("You Lost!");
        displayScore(0);
      }
  } 
});

// Play Again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start Guessing the Number...");
  displayScore(score);
  displayNumber("?");

  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#5390d9";
});
