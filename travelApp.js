//Get flag objects loaded to the DOM

function showFlags(places) {
    console.log(places)
}
showFlags();

document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/places")
    .then(res => res.json())
    .then(places => places.forEach(place  => showFlags(place)))
    
})


  // get references to HTML elements
  const imageDiv = document.getElementById("image");
  const guessInput = document.getElementById("guess-input");
  const guessBtn = document.getElementById("guess-btn");
  const messageDiv = document.getElementById("message");
  const restartBtn = document.getElementById("restart-btn");
  
  let selectedPlace = {};
  let isGameEnded = false;
  
  // select a random place from the places array
  function selectRandomPlace() {
    const placesArr = places.places;
    selectedPlace = placesArr[Math.floor(Math.random() * placesArr.length)];
    imageDiv.style.backgroundImage = `url(${selectedPlace.imageUrl})`;
  }
  
  // check if the user's guess is correct
  function checkGuess() {
    if (isGameEnded) {
      return;
    }
  
    const guess = guessInput.value.toLowerCase();
  
    if (guess === selectedPlace.location.toLowerCase()) {
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
    selectRandomPlace();
  }
  
  // add event listeners to the guess button and restart button
  guessBtn.addEventListener("click", checkGuess);
  restartBtn.addEventListener("click", resetGame);
  
  // initialize the game by selecting a random place
  selectRandomPlace();
  


    