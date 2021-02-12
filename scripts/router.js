import { getData } from './api.js';
import { displayData } from './display.js';

// https://swapi.dev/api/

// Global constants
const baseUrl = "https://swapi.dev/api/";
const queryFilms = "films";
const queryCharacters = "people";
const queryVehicles = "vehicles";
const queryPlanets = "planets";
const querySpecies = "species";
const queryStarships = "starships";

export function handleRoutes() {
    routie({
      films: () => {
            getData(baseUrl + queryFilms)
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
      },
      'films/:id': id => {
          getData(baseUrl + queryFilms + id).then(data => {
            //TODO
        });
      }
    });
  }