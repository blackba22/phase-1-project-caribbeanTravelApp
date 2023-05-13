document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/places")
    .then(res => res.json())
    .then(places => places.forEach(place  => showCountries(place)))
    
})

function showCountries(places) {
    let card = document.createElement("div")
    card.className = 'card'
    card.textContent = `
      <div class="information">
      <h2>Travel to Beautiful ${places.location}!</h2>
      <p>${places.description}</p>
      <img src="${places.imageUrl}">
      </div>
    `
document.querySelector('#places-list').appendChild(card)
}

    