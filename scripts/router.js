// Function getting imported from external modules
import { getData, getDetailData } from "./api.js";
import { displayDetailData, displayHomeData } from "./display.js";
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
        removeAllChildElements(document.getElementById("starWarsData"));
        getData(baseUrl + queryFilms + movieIdFix[id])
          .then(response => {
            return response.json();
          })
          .then((data) => {
            // console.log(data);
            const detailEndpoints = [data.characters, data.planets, data.starships];
            // console.log(detailEndpoints)
            return getDetailData(detailEndpoints);
          })
          // .then((allEndpoints) => {
          //   allEndpoints.map(response => {
          //     console.log(response);
          //     response.map(testResponse => {
          //       // return singleEndpoint.json();
          //       console.log(testResponse.json());
          //     });
          //   });
          // })
          .then(console.log)
      }
    });
};