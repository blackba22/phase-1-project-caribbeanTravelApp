//Get flag objects loaded to the DOM

/*function showFlags(places) {
    console.log(places)
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/places")
    .then(res => res.json())
    .then(places => {
      showFlags(places);
      selectRandomPlace(places);
    })
})
*/
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/places")
      .then((res) => res.json())
      .then((places) => {
        showFlags(places);
        selectRandomPlace(places);
      });
  });
  
  // Show flags to guess
  function showFlags(places) {
    places.forEach((place) => {
      const card = document.createElement("img");
      card.src = `${place.imageUrl}`;
      card.classList.add("flag-img");
      document.querySelector('#flag-list').appendChild(card);
      
      console.log(card)

    });
document.querySelector
  }
/*
// get references to HTML elements
const imageDiv = document.getElementById("image");
const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const messageDiv = document.getElementById("message");
const restartBtn = document.getElementById("restart-btn");
const clueBtn = document.getElementById("clue-btn");

let selectedPlace = {};
let isGameEnded = false;
let places = [];

// select a random place from the places array
function selectRandomPlace(places) {
  selectedPlace = places[Math.floor(Math.random() * places.length)];
  imageDiv.style.backgroundImage = `url(${selectedPlace.imageUrl})`;
}

// check if the user's guess is correct
function checkGuess() {
  if (isGameEnded) {
    return;
  }

  const guess = guessInput.value.toLowerCase();

  if (guess === `${selectedPlace.location}`.toLowerCase()) {
    messageDiv.innerHTML = "Correct!";
    isGameEnded = true;
  } else {
    messageDiv.innerHTML = "Incorrect. Try again.";
  }
}

// reset the game
function resetGame() {
  isGameEnded = false;
  guessInput.value = "";
  messageDiv.innerHTML = "";
  selectRandomPlace(places);
}

// show clue to user
function showClue() {
  console.log(`${selectedPlace.clue}`)
}

// add event listeners to the guess button and restart button
guessBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", resetGame);
clueBtn.addEventListener("mouseover", showClue);

// initialize the game by selecting a random place
selectRandomPlace(places);
*/