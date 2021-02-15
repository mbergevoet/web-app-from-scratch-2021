// Injects json data into HTML page
// Code inspired by https://howtocreateapps.com/fetch-and-display-json-html-javascript/
export function displayData(data) {
    console.log(data);
    const contentContainer = document.getElementById("starWarsData");
    data.forEach((film) => {
        const contentTiles = document.createElement("section");
        const movieTitles = document.createElement("h1");
        const openingCrawl = document.createElement("p");
        movieTitles.innerHTML = film.title;
        openingCrawl.innerHTML = film.opening_crawl;
        contentTiles.appendChild(movieTitles)
        contentTiles.appendChild(openingCrawl)
        contentContainer.appendChild(contentTiles);
     })
}