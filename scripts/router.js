// Function getting imported from external modules
import { getData, getDetailData } from "./api.js";
import { displayHomeData } from "./display.js";
import { removeAllChildElements } from "./remove.js";

// https://swapi.dev/api/
// http://127.0.0.1:5500/#films

// Global constants
const baseUrl = "https://swapi.dev/api/";
const queryFilms = "films/";
const movieIdFix = [0, 4, 5, 6, 1, 2, 3];

// Handles main and detail routes
export function handleRoutes() {
    routie({
      films: () => {
        removeAllChildElements(document.getElementById("starWarsCharacters"));
        removeAllChildElements(document.getElementById("starWarsStarships"));
        removeAllChildElements(document.getElementById("starWarsPlanets"));
        getData(baseUrl + queryFilms)
          .then((response) => {
                  const swApiResponse = response.json();
                  return swApiResponse;
                })
                .then((swData) => {
                  displayHomeData(swData.results);
                })
                .catch((err) => {
                  console.log(err);
                 });
      },
      'films/:id': (id) => {
        removeAllChildElements(document.getElementById("starWarsFilms"));
        getData(baseUrl + queryFilms + movieIdFix[id])
          .then(response => {
            return response.json();
          })
          .then((json) => {
            const detailEndpoints = [json.characters, json.planets, json.starships];
            return getDetailData(detailEndpoints);
          })
          .catch((err) => {
            console.log(err);
           });
      }
    });
};