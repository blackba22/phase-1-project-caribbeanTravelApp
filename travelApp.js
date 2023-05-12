console.log("travel app works")

fetch("http://localhost:3000/caribbeanCountries")
.then (res => res.json())
.then((caribbeanCountries) => {
    const container = document.querySelector("form#carribeanCountries");
    caribbeanCountries.forEach(caribbeanCountry => {

    })
});

//create a dropdown button where you can select flights or hotels
//create a like button that you can click and it can highlight or not

