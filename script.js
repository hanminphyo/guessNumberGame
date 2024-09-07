let randomNumber = Math.floor(Math.random() * 50 + 1);
let attempts = 0;

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptText = document.getElementById("attempt");
const playAgainContainer = document.getElementById("playAgainContainer");

function createPlayAgainButton() {
  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "Play Again";
  playAgainButton.addEventListener("click", resetGame);
  playAgainContainer.appendChild(playAgainButton);
  playAgainButton.style.color = "black";
  playAgainButton.style.backgroundColor = "#1496f3";
}

submit.addEventListener("click", (checkGuess) => {
  let userValue = Number(guess.value);
  attempts++;
  if (userValue === randomNumber) {
    hint.textContent = "Congratulations! You guessed the correct number.";
    hint.style.color = "red";
    submit.disabled = true;
    createPlayAgainButton();
  } else if (userValue < randomNumber) {
    hint.textContent = "Too low! Try again.";
  } else if (userValue > randomNumber) {
    hint.textContent = "Too high! Try again.";
  }
  attemptText.textContent = "Attempts: " + attempts;
});
function resetGame() {
  randomNumber = Math.floor(Math.random() * 50 + 1);
  attempts = 0;
  hint.textContent = "";
  attemptText.textContent = "Attempts: " + attempts;
  guess.value = "";
  submit.disabled = false;
  playAgainContainer.innerHTML = "";
  hint.style.color = "";
}
