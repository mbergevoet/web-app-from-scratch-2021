export function getData(url) {
    return fetch(url);
}

// Code adapted from Roeland
export function getDetailData(array) {
    // Mapt over de drie arrays heen en stuurt elk array door naar de volgende functie
    return array.map(singleEndpoint => {
        // console.log("singleEndpoint:", singleEndpoint);
    // Loopt over elk array element heen en fetched de data en zet het om naar json
        return singleEndpoint.forEach(endpoint => {
            console.log('single singleEndpoint', endpoint)
            fetch(endpoint)
                .then(response => {
                    return response.json()
                })
                .then(console.log)
                // .then((data) => {
                //     const array = [data];
                //     console.log(array)
                //     // return array
                // })
        });
    });
};