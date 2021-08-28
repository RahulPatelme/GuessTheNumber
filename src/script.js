"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// Handling Click Events
document.querySelector(".check").addEventListener("click", function () {
  const userGuess = Number(document.querySelector(".guess").value);
  console.log(userGuess, typeof userGuess);

  // Implementing Game Logic

  // When there is no input
  if (!userGuess) {
    document.querySelector(".message").textContent = "No Number Entered.";

    // When input is correct
  } else if (userGuess === secretNumber) {
    document.querySelector(".message").textContent =
      "You Guessed the Correct Number!";
    document.querySelector("body").style.backgroundColor = "#2b9348";
    document.querySelector(".number").style.width = "50rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When user guess is high
  } else if (userGuess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost!";
      document.querySelector(".score").textContent = 0;
    }

    // When user guess is low
  } else if (userGuess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Play Again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent =
    "Start Guessing the Number...";

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector(".number").style.width = "15rem";

  document.querySelector("body").style.backgroundColor = "#5390d9";
});
