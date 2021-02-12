// https://swapi.dev/api/

// Global constants
const baseUrl = "https://swapi.dev/api/";
const queryFilms = "films";
const queryCharacters = "people";
const queryVehicles = "vehicles";
const queryPlanets = "planets";
const querySpecies = "species";
const queryStarships = "starships";
const endpoint = `${baseUrl}${queryFilms}`; 

// Gets the data with fetch and converts it to json
getData(endpoint)
    .then((response) => {
        const swApiResponse = response.json()
        return swApiResponse;
    })
    .then((swData) => {
        displayData(swData.results);
        console.log(swData);
    })
    .catch((err) => {
        console.log(err);
    });

// Injects json data into HTML page
// Code inspired by https://howtocreateapps.com/fetch-and-display-json-html-javascript/
function displayData(data) {
    console.log(data);
    const contentContainer = document.getElementById("starWarsData");
    for (let i = 0; i < data.length; i++) {
        const contentTiles = document.createElement("section");
        const movieTitles = document.createElement("h1");
        const openingCrawl = document.createElement("p");
        movieTitles.innerHTML = data[i].title;
        openingCrawl.innerHTML = data[i].opening_crawl;
        contentTiles.appendChild(movieTitles)
        contentTiles.appendChild(openingCrawl)
        contentContainer.appendChild(contentTiles);
    }
}

// Fetches the data from given url
function getData(url) {
    return fetch(url)
}