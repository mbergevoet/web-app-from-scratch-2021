export function getData(url) {
    return fetch(url);
}

// Code adapted from Roeland
export function getDetailData(array) {
    const swDetailData = array.map(singleEndpoint => {
        singleEndpoint.forEach(endpoint => {
            return fetch(endpoint)
        });
    });
    return Promise.all(swDetailData);
};

