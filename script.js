let randomNumber = Math.floor(Math.random() * 50 + 1);
let attempts = 0;
let guessedNumbers = [];

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptText = document.getElementById("attempt");
const playAgainContainer = document.getElementById("playAgainContainer");
const guessedNumbersList = document.getElementById("guessedNumbersList");

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
  guessedNumbers.push(guess.value);
  guessedNumberHistory();
  if (userValue === randomNumber) {
    hint.textContent = "Congratulations! You guessed the correct number.";
    hint.style.color = "green";
    submit.disabled = true;
    createPlayAgainButton();
  } else if (userValue < randomNumber) {
    hint.textContent = "Too low! Try again.";
    hint.style.color = "red";
    guess.value = "";
    guess.focus();
  } else if (userValue > randomNumber) {
    hint.textContent = "Too high! Try again.";
    hint.style.color = "red";
    guess.value = "";
    guess.focus();
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
  guessedNumbersList.innerHTML = "";
  guessedNumbers = [];
}

function guessedNumberHistory() {
  guessedNumbersList.innerHTML = "";
  guessedNumbers.forEach((userValue, index) => {
    let listItem = document.createElement("li");
    listItem.textContent = ` ${userValue}`;
    guessedNumbersList.appendChild(listItem);
    listItem.style.listStyle = "none";
    listItem.style.padding = "10px";
  });
}
