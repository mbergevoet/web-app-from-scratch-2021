import { displayCharacters, displayStarships, displayPlanets } from "./display.js";

export function getData(url) {
    return fetch(url);
};

// Code adapted from Roeland and help from Leonie
export function getDetailData(allEndpoints) {
    // check if allEndpoints from previous module are valid urls 
    // console.log(allEndpoints);
    // empty array to later store all fetched objects of later use

    // nested forEach function to reach all endpoints array items  
    const resultArray = allEndpoints.map(singleEndpoint => {
        return singleEndpoint.forEach(endpoint => {
            // use fetch to request data from endpoints on detail page items
            // the method .json() is called to read the response as data
            // the response is stored and pushed to the above empty array
            // calling .then on the promise captures the results regardless of the state, catching the data
            fetch(endpoint)
                .then(response => {
                    let responseData = response.json()
                    responseData.then(result => {
                        if (result.height) {
                            //display character
                            displayCharacters(result);
                        } else if (result.model) {
                            //display starship
                            displayStarships(result);
                        } else {
                            // display planet
                            displayPlanets(result);
                        }
                    });
                });
        });
    });
    // resultArray should now show fetched data as objects in an array
    console.log(resultArray);
    return resultArray;
};