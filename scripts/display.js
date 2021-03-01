// Injects json data into HTML page
// Code inspired by https://howtocreateapps.com/fetch-and-display-json-html-javascript/
export function displayHomeData(array) {
    const contentContainer = document.getElementById("starWarsFilms");

    array.forEach((swFilm) => {
        const toDetailLink = document.createElement("a");
        // toDetailLink.setAttribute("id", swFilm.episode_id);
        toDetailLink.setAttribute("href", "#films/" + swFilm.episode_id);
        const contentTiles = document.createElement("article");
        const movieTitles = document.createElement("h1");
        const openingCrawl = document.createElement("p");
        movieTitles.innerHTML = swFilm.title;
        openingCrawl.innerHTML = swFilm.opening_crawl;
        contentTiles.appendChild(movieTitles);
        contentTiles.appendChild(openingCrawl);
        toDetailLink.appendChild(contentTiles);
        contentContainer.appendChild(toDetailLink);
     })
};

export function displayCharacters(element) {
    const contentContainer = document.getElementById("starWarsCharacters");
    const characterContainer = document.createElement("article");

    const placeholderImage = document.createElement("img");
    placeholderImage.setAttribute("src", "media/images/Character-icon.png")

    const characterName = document.createElement("h2");
    const characterHeight = document.createElement("p");
    const characterGender = document.createElement("p");
    const characterEyeColor = document.createElement("p");
    const characterHairColor = document.createElement("p");
    const characterBirthYear = document.createElement("p");
    const characterMass = document.createElement("p");

    characterName.innerHTML = element.name;
    characterHeight.innerHTML = "Height: " + element.height + "cm";
    characterGender.innerHTML = "Gender: " + element.gender;
    characterEyeColor.innerHTML = "Eye Color: " + element.eye_color;
    characterHairColor.innerHTML = "Hair Color: " + element.hair_color;
    characterBirthYear.innerHTML = "Birth Year: " + element.birth_year;
    characterMass.innerHTML = "Weight: " + element.mass + "kg";

    characterContainer.appendChild(characterName);
    characterContainer.appendChild(placeholderImage);
    characterContainer.appendChild(characterHeight);
    characterContainer.appendChild(characterGender);
    characterContainer.appendChild(characterEyeColor);
    characterContainer.appendChild(characterHairColor);
    characterContainer.appendChild(characterBirthYear);
    characterContainer.appendChild(characterMass);

    contentContainer.appendChild(characterContainer);
}

export function displayStarships(element) {
    const contentContainer = document.getElementById("starWarsStarships");
    const starshipContainer = document.createElement("article");

    const placeholderImage = document.createElement("img");
    placeholderImage.setAttribute("src", "media/images/Starship-icon.png")

    const starshipName = document.createElement("h2");
    const starshipLength = document.createElement("p");
    const starshipCrew = document.createElement("p");
    const starshipPassangers = document.createElement("p");
    const starshipManufacturer = document.createElement("p");
    const starshipModel = document.createElement("p");
    const starshipClass = document.createElement("p");
    const starshipAtmospheringSpeed = document.createElement("p");
    
    starshipName.innerHTML = element.name;
    starshipLength.innerHTML = "Lenght: " + element.length + "m";
    starshipCrew.innerHTML = "Crew Size: " + element.crew;
    starshipPassangers.innerHTML = "Passanger Amount: " + element.passangers;
    starshipManufacturer.innerHTML = "Manufacturer: " + element.manufacturer;
    starshipModel.innerHTML = "Model: " + element.model;
    starshipClass.innerHTML = "Class: " + element.class;
    starshipAtmospheringSpeed.innerHTML = "Atmosphere Speed: " + element.max_atmosphering_speed + "km/h";

    starshipContainer.appendChild(starshipName);
    starshipContainer.appendChild(placeholderImage);
    starshipContainer.appendChild(starshipLength);
    starshipContainer.appendChild(starshipCrew);
    starshipContainer.appendChild(starshipPassangers);
    starshipContainer.appendChild(starshipManufacturer);
    starshipContainer.appendChild(starshipModel);
    starshipContainer.appendChild(starshipClass);
    starshipContainer.appendChild(starshipAtmospheringSpeed);

    contentContainer.appendChild(starshipContainer);
}

export function displayPlanets(element) {
    const contentContainer = document.getElementById("starWarsPlanets");
    const planetContainer = document.createElement("article");

    const placeholderImage = document.createElement("img");
    placeholderImage.setAttribute("src", "media/images/Planet-icon.png")
    
    const planetName = document.createElement("h2");
    const planetClimate = document.createElement("p");
    const planetPopulation = document.createElement("p");
    const planetGravity = document.createElement("p");
    const planetOrbit = document.createElement("p");
    const planetRotation = document.createElement("p");
    const planetDiameter = document.createElement("p");
    const planetTerrain = document.createElement("p");

    planetName.innerHTML = element.name;
    planetClimate.innerHTML = "Climate: " + element.climate;
    planetPopulation.innerHTML = "Population: " + element.population;
    planetGravity.innerHTML = "Gravity: " + element.gravity;
    planetOrbit.innerHTML = "Orbit Period: " + element.orbital_period + " days";
    planetRotation.innerHTML = "Rotation Period: " + element.rotation_period + " hours";
    planetDiameter.innerHTML = "Diameter: " + element.diameter + "km";
    planetTerrain.innerHTML = "Type: " + element.terrain;

    planetContainer.appendChild(planetName);
    planetContainer.appendChild(placeholderImage);
    planetContainer.appendChild(planetClimate);
    planetContainer.appendChild(planetPopulation);
    planetContainer.appendChild(planetGravity);
    planetContainer.appendChild(planetOrbit);
    planetContainer.appendChild(planetRotation);
    planetContainer.appendChild(planetDiameter);
    planetContainer.appendChild(planetTerrain);

    contentContainer.appendChild(planetContainer);
}