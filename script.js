const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game");
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

// Create a function that gets a random word
// function getRandomWord() {
//   return words(Math.floor(Math.random() * words.length));
// }

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

addWordToDOM();

// Event listeners
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === word.innerHTML) {
    addWordToDOM();

    updateScore();

    // Clear
    e.target.value = "";
  }
});
