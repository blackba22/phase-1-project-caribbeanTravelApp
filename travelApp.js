document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/places")
    .then(res => res.json())
    .then(places => places.forEach(place  => showCountries(place)))
    
})

function showCountries(places) {
    let card = document.createElement("li")
    card.className = 'card'
    card.textContent = `
      <fieldset>
      <legend>Travel to Beautiful ${places.location}!</legend>
      <p>${places.description}</p>
      <img src="${places.imageUrl}">
      </fieldset>
    `
document.querySelector('#places-list').appendChild(card)
}

    