// Function getting imported from external modules
import { getData, getDetailData } from "./api.js";
import { displayDetailData, displayHomeData } from "./display.js";
import { removeAllChildNodes } from "./remove.js";

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
            getData(baseUrl + queryFilms)
                .then((response) => {
                  const swApiResponse = response.json();
                  return swApiResponse;
                })
                .then((swData) => {
                  displayHomeData(swData.results);
                  // console.log(swData);
                })
                .catch((err) => {
                  console.log(err);
                 });
      },
      'films/:id': (id) => {
        console.log(id);
        removeAllChildNodes(document.getElementById("starWarsData"));
        getData(baseUrl + queryFilms + movieIdFix[id])
          .then(response => {
            // detailData = response;
            return response.json();
          })
          .then((data) => {
            console.log(data);
            const detailEndpoints = [data.characters, data.planets, data.starships];
            getDetailData(detailEndpoints);
          })
            
            // return getDetailData(detailEndpoints);
            // getData(baseUrl + queryFilms + id)
            //   .then((response) => {
            //     const swApiResponse = response.json();
            //     return swApiResponse;
            //   })
            //   .then((detailData) => {
            //     const detailEndpoints = [detailData.characters, detailData.planets, detailData.starships];
            //     getDetailData(detailEndpoints);
            //     console.log(detailEndpoints);
            //   })
            // .then((allFilmData) => {
            //   get 
            // });
      }
    });
};