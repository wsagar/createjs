"use strict";

const player0E1 = document.querySelector(".player--0");
const player1E1 = document.querySelector(".player--1");
const score0E1 = document.querySelector("#score--0");
const score1E1 = document.getElementById("score--1");
const current0E1 = document.getElementById("current--0");
const current1E1 = document.getElementById("current--1");

const diceE1 = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0E1.textContent = 0;
  score1E1.textContent = 0;
  current0E1.textContent = 0;
  current1E1.textContent = 0;
  diceE1.classList.add("hidden");
};

init();

function switchplayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  currentScore = 0;
}

btnRoll.addEventListener("click", function () {
  if (playing) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    diceE1.classList.remove("hidden");
    diceE1.src = `dice-${randomNumber}.png`;
    if (randomNumber != 6) {
      currentScore = currentScore + randomNumber;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchplayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] = currentScore + scores[activePlayer];
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] > 20) {
      playing = false;
      diceE1.classList.add("hidden");
    } else {
      switchplayer();
    }
  }
});

btnNew.addEventListener("click", init);
