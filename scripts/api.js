export function getData(url) {
    return fetch(url);
}

// Code adapted from Roeland
export function getDetailData(array) {
    return array.map(singleEndpoint => {
        // console.log("singleEndpoint:", singleEndpoint);
        return singleEndpoint.map(endpoint => {
            // console.log('single singleEndpoint', endpoint)
            fetch(endpoint)
                .then(response => {
                    return response.json()
                    // console.log(response.json());
                })
                .then(console.log)
        });
    });
};