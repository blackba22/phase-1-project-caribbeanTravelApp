
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/places")
    .then(res => res.json())
    .then(places => places.forEach(place  => createCardElement(place)))
    console.log(places)
})
function createCardElement(places) {
    let card = document.createElement("div")
    card.classList.add("card") 
    console.log(places)
}
