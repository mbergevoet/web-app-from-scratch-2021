// Injects json data into HTML page
// Code inspired by https://howtocreateapps.com/fetch-and-display-json-html-javascript/
export function displayHomeData(data) {
    const contentContainer = document.getElementById("starWarsData");

    data.forEach((film) => {
        const toDetailLink = document.createElement("a");
        // toDetailLink.setAttribute("id", film.episode_id);
        toDetailLink.setAttribute("href", "#films/" + film.episode_id);
        const contentTiles = document.createElement("article");
        const movieTitles = document.createElement("h1");
        const openingCrawl = document.createElement("p");
        movieTitles.innerHTML = film.title;
        openingCrawl.innerHTML = film.opening_crawl;
        contentTiles.appendChild(movieTitles);
        contentTiles.appendChild(openingCrawl);
        toDetailLink.appendChild(contentTiles);
        contentContainer.appendChild(toDetailLink);
     })
}

export function displayDetailData(data) {
    const contentContainer = document.getElementById("starWarsData");
}