
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
    let legend = document.createElement("legend");
legend.textContent = `Travel to Beautiful ${places}`
let description = document.createElement("p");
p.textContent = caribbeanCountries.description
let image = document.createElement("img");
image.src = caribbeanCountries.image
let likes = document.createElement("p");
p.textContent = "Is this the vacation of your dreams?? Let us know by clicking like below!"
let button = document.createElement("button");
button.classList.add("like-button")
button.textContent = "Like ❤️"

card.appendChild(legend, p, img, p, button)

}
