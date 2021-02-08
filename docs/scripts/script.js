// https://swapi.dev/api/

const baseUrl = "https://swapi.dev/api/";
const query = "films";
const endpoint = `${baseUrl}${query}`; 

// Gets the data with fetch and converts it into json
getData(endpoint)
    .then((response) => {
        const swApiResponse = response.json()
        return swApiResponse;
    })
    .then((swData) => {
        displayData(swData);
        console.log(swData);
    })
    .catch((err) => {
        console.log(err);
    });

// Injects json data in the HTML page
// Code inspired by https://howtocreateapps.com/fetch-and-display-json-html-javascript/
function displayData(data) {
    const container = document.getElementById("starWarsData");
    for (let i = 0; i < data.length; i++) {
        const movieTitles = document.createElement("div");
        movieTitles.innerHTML = data[i].title;
        container.appendChild(movieTitles);
    }
}

// Fetches the data from given url
function getData(url) {
    return fetch(url)
}