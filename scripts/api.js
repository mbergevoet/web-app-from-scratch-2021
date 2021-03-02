import { displayCharacters, displayStarships, displayPlanets } from "./display.js";

export function getData(url) {
    return fetch(url);
};

// Code adapted from Roeland and help from Leonie
export function getDetailData(allEndpoints) {
    // check if allEndpoints from previous module are valid urls 
    // console.log(allEndpoints);

    // nested map and for each function to reach all endpoints array items  
    const resultArray = allEndpoints.map(singleEndpoint => {
        return singleEndpoint.forEach(endpoint => {
            // use fetch to request data from endpoints on detail page items
            // the method .json() is called to read the response as data
            // the response goes straight into the seperate display functions
            fetch(endpoint)
                .then(response => {
                    let responseData = response.json()
                    responseData.then(result => {
                        if (result.height) {
                            // checks if object has the property "height", if that is the case it's a character
                            // displayCharacters function is called to handle the rendering of the charcter data
                            displayCharacters(result);
                        } else if (result.model) {
                            // checks if object has the property "model", if that is the case it's a starship
                            // displayStarships function is called to handle the rendering of the charcter data
                            displayStarships(result);
                        } else {
                            // if none of the above apply it most be a planet
                            // displayPlanet function is called to handle the rendering of the charcter data
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