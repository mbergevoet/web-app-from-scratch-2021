// functions getting imported from external modules
import { getData, getDetailData } from "./api.js";
import { displayHomeData } from "./display.js";
import { removeAllChildElements } from "./remove.js";

// https://swapi.dev/api/
// http://127.0.0.1:5500/#films

// global constants
const baseUrl = "https://swapi.dev/api/";
const queryFilms = "films/";
const movieIdFix = [0, 4, 5, 6, 1, 2, 3];

// Hhndles main and detail routes
export function handleRoutes() {
    routie({
      films: () => {
        // emptying the containers for the characters, starships and the planets
        removeAllChildElements(document.getElementById("starWarsCharacters"));
        removeAllChildElements(document.getElementById("starWarsStarships"));
        removeAllChildElements(document.getElementById("starWarsPlanets"));
        // fetching the data from the correct endpoint
        getData(baseUrl + queryFilms)
          .then((response) => {
            // converts the data into json
            const swApiResponse = response.json();
            return swApiResponse;
          })
          .then((swData) => {
            // handeling the json data to be displayed by calling the displayHomeData function
            displayHomeData(swData.results);
          })
          .catch((err) => {
            // if errors occur log them in the console
            console.log(err);
          });
      },
      'films/:id': (id) => {
        // emptying the container for all the sicx films
        removeAllChildElements(document.getElementById("starWarsFilms"));
        // fetching the data from the right endpoint and the right movie
        getData(baseUrl + queryFilms + movieIdFix[id])
          .then(response => {
            // converts the data into json
            return response.json();
          })
          .then((json) => {
            // making an array to only get the characters, planets and starships in this movie
            const detailEndpoints = [json.characters, json.planets, json.starships];
            // fetching the data form all the endpoints and displaying them
            getDetailData(detailEndpoints);
          })
          .catch((err) => {
            // if errors occur log them in the console
            console.log(err);
           });
      }
    });
};