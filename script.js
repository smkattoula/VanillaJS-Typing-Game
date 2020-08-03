const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// const words = [
//   "hello",
//   "banana",
//   "airplane",
//   "mushroom",
//   "grass",
//   "sunlight",
//   "alligator",
//   "tree",
//   "firefly",
//   "blitz",
//   "oranges",
//   "watermelon",
//   "fantasy",
//   "compassion",
//   "apple",
//   "independent",
//   "formulator",
//   "radiohead",
//   "istanbul",
//   "radiant",
//   "desert",
//   "mixolydian",
//   "warpig",
// ];

// Init word

let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Focus cursor on input at start
text.focus();

// Start count down
const timeInterval = setInterval(updateTime, 1000);

// Create a function that gets a random word
function getWordsAPI() {
  fetch("https://random-word-api.herokuapp.com/word?number=1")
    .then((res) => res.json())
    .then((data) => {
      word.innerHTML = data;
    });
}

// Create a function that adds a word to the DOM
function addWordToDOM() {
  randomWord = getWordsAPI();
}

// Create a function that updates the score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Create a function that updates the time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);

    // end game
    gameOver();
  }
}

// Create a function that ends the game and shows the end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out!</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>`;

  endgameEl.style.display = "flex";
}

addWordToDOM();

// Event listeners
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === word.innerHTML) {
    addWordToDOM();

    updateScore();

    // Clear
    e.target.value = "";

    time += 5;
    updateTime();
  }
});
