// Injects json data into HTML page
// Code inspired by https://howtocreateapps.com/fetch-and-display-json-html-javascript/
export function displayHomeData(filmsList) {
    // the main container where the films will end up in
    const contentContainer = document.getElementById("starWarsFilms");

    // for each function which loops through the array of all the movies and gets the title and opening crawl out of it
    filmsList.forEach((swFilm) => {
        const toDetailLink = document.createElement("a");
        // give the <a> tag the right href so it will link to the correct route
        toDetailLink.setAttribute("href", "#films/" + swFilm.episode_id);
        // creating the tags necessary 
        const contentTiles = document.createElement("article");
        const movieTitles = document.createElement("h1");
        const openingCrawl = document.createElement("p");

        // giving the elements the right content
        movieTitles.innerHTML = swFilm.title;
        openingCrawl.innerHTML = swFilm.opening_crawl;

        // appending the elements into the right containers which injects in into the html
        contentTiles.appendChild(movieTitles);
        contentTiles.appendChild(openingCrawl);
        toDetailLink.appendChild(contentTiles);
        contentContainer.appendChild(toDetailLink);
    });
};

// handles the display of character elements
export function displayCharacters(element) {
    // selecting the right container for the characters
    const contentContainer = document.getElementById("starWarsCharacters");
    // creating a container for the properties to go into
    const characterContainer = document.createElement("article");

    // creating an <img> tag for a placeholder image because the API doesn't contain any images :(
    const placeholderImage = document.createElement("img");
    // setting the source for the image
    placeholderImage.setAttribute("src", "media/images/character-icon.png")

    // creating the tags necessary
    const textWrapper = document.createElement("div");
    const characterName = document.createElement("h2");
    const characterHeight = document.createElement("p");
    const characterGender = document.createElement("p");
    const characterEyeColor = document.createElement("p");
    const characterHairColor = document.createElement("p");
    const characterBirthYear = document.createElement("p");
    const characterMass = document.createElement("p");

    // giving the elements the right content
    characterName.innerHTML = element.name;
    characterHeight.innerHTML = "Height: " + element.height + "cm";
    characterGender.innerHTML = "Gender: " + element.gender;
    characterEyeColor.innerHTML = "Eye Color: " + element.eye_color;
    characterHairColor.innerHTML = "Hair Color: " + element.hair_color;
    characterBirthYear.innerHTML = "Birth Year: " + element.birth_year;
    characterMass.innerHTML = "Weight: " + element.mass + "kg";

    // appending the elements into the right containers which injects in into the html
    characterContainer.appendChild(characterName);
    characterContainer.appendChild(placeholderImage);
    textWrapper.appendChild(characterHeight);
    textWrapper.appendChild(characterGender);
    textWrapper.appendChild(characterEyeColor);
    textWrapper.appendChild(characterHairColor);
    textWrapper.appendChild(characterBirthYear);
    textWrapper.appendChild(characterMass);
    characterContainer.appendChild(textWrapper);

    // appending the character container into the container where all characters go
    contentContainer.appendChild(characterContainer);
}

// handles the display of starship elements
export function displayStarships(element) {
    // selecting the right container for the starships
    const contentContainer = document.getElementById("starWarsStarships");
    // creating a container for the properties to go into
    const starshipContainer = document.createElement("article");

    // creating an <img> tag for a placeholder image 
    const placeholderImage = document.createElement("img");
    // setting the source for the image
    placeholderImage.setAttribute("src", "media/images/starship-icon.png")

    // creating the tags necessary 
    const textWrapper = document.createElement("div");
    const starshipName = document.createElement("h2");
    const starshipLength = document.createElement("p");
    const starshipCrew = document.createElement("p");
    const starshipPassangers = document.createElement("p");
    const starshipManufacturer = document.createElement("p");
    const starshipModel = document.createElement("p");
    const starshipClass = document.createElement("p");
    const starshipAtmospheringSpeed = document.createElement("p");
    
    // giving the elements the right content
    starshipName.innerHTML = element.name;
    starshipLength.innerHTML = "Lenght: " + element.length + "m";
    starshipCrew.innerHTML = "Crew Size: " + element.crew;
    starshipPassangers.innerHTML = "Passanger Amount: " + element.passangers;
    starshipManufacturer.innerHTML = "Manufacturer: " + element.manufacturer;
    starshipModel.innerHTML = "Model: " + element.model;
    starshipClass.innerHTML = "Class: " + element.class;
    starshipAtmospheringSpeed.innerHTML = "Atmosphere Speed: " + element.max_atmosphering_speed + "km/h";

    // appending the elements into the right containers which injects in into the html
    starshipContainer.appendChild(starshipName);
    starshipContainer.appendChild(placeholderImage);
    textWrapper.appendChild(starshipLength);
    textWrapper.appendChild(starshipCrew);
    textWrapper.appendChild(starshipPassangers);
    textWrapper.appendChild(starshipManufacturer);
    textWrapper.appendChild(starshipModel);
    textWrapper.appendChild(starshipClass);
    textWrapper.appendChild(starshipAtmospheringSpeed);
    starshipContainer.appendChild(textWrapper);

    // appending the character container into the container where all starships go
    contentContainer.appendChild(starshipContainer);
}

// handles the display of planet elements
export function displayPlanets(element) {
    // selecting the right container for the planets
    const contentContainer = document.getElementById("starWarsPlanets");
    // creating a container for the properties to go into
    const planetContainer = document.createElement("article");

    // creating an <img> tag for a placeholder image 
    const placeholderImage = document.createElement("img");
    // setting the source for the image
    placeholderImage.setAttribute("src", "media/images/planet-icon.png")
    
    // creating the tags necessary
    const textWrapper = document.createElement("div");
    const planetName = document.createElement("h2");
    const planetClimate = document.createElement("p");
    const planetPopulation = document.createElement("p");
    const planetGravity = document.createElement("p");
    const planetOrbit = document.createElement("p");
    const planetRotation = document.createElement("p");
    const planetDiameter = document.createElement("p");
    const planetTerrain = document.createElement("p");

    // giving the elements the right content
    planetName.innerHTML = element.name;
    planetClimate.innerHTML = "Climate: " + element.climate;
    planetPopulation.innerHTML = "Population: " + element.population;
    planetGravity.innerHTML = "Gravity: " + element.gravity;
    planetOrbit.innerHTML = "Orbit Period: " + element.orbital_period + " days";
    planetRotation.innerHTML = "Rotation Period: " + element.rotation_period + " hours";
    planetDiameter.innerHTML = "Diameter: " + element.diameter + "km";
    planetTerrain.innerHTML = "Type: " + element.terrain;

    // appending the elements into the right containers which injects in into the html
    planetContainer.appendChild(planetName);
    planetContainer.appendChild(placeholderImage);
    textWrapper.appendChild(planetClimate);
    textWrapper.appendChild(planetPopulation);
    textWrapper.appendChild(planetGravity);
    textWrapper.appendChild(planetOrbit);
    textWrapper.appendChild(planetRotation);
    textWrapper.appendChild(planetDiameter);
    textWrapper.appendChild(planetTerrain);
    planetContainer.appendChild(textWrapper);

    // appending the character container into the container where all planets go
    contentContainer.appendChild(planetContainer);
}