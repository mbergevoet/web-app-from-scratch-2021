// Injects json data into HTML page
// Code inspired by https://howtocreateapps.com/fetch-and-display-json-html-javascript/
export function displayData(data) {
    console.log(data);
    const contentContainer = document.getElementById("starWarsData");
    for (let i = 0; i < data.length; i++) {
        const contentTiles = document.createElement("section");
        const movieTitles = document.createElement("h1");
        const openingCrawl = document.createElement("p");
        movieTitles.innerHTML = data[i].title;
        openingCrawl.innerHTML = data[i].opening_crawl;
        contentTiles.appendChild(movieTitles)
        contentTiles.appendChild(openingCrawl)
        contentContainer.appendChild(contentTiles);
    }
}