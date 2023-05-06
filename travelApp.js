console.log("travel app works")

fetch("http://localhost:3000/caribbeanCountries").then (res => res.json()).then(json => console.log(json))



