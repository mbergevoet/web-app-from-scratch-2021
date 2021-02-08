// code adapted from Joost Faber
// https://swapi.dev/api/

(function () {
  
  // TODO chaining multiple API calls to get the information I need
  // maybe use localstorage to store previous API calls

  // const apiStorage = window.localStorage;

  const main = document.querySelector("main"),
        endpoint = "https://swapi.dev/api/",
        query = "films/1",
        url = `${endpoint}${query}`;
  
  const request = new XMLHttpRequest();
  request.open("GET", url, true)
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      
      const data = JSON.parse(request.responseText);
      render(data);
      
    } else {

    }
  };
  request.onerror = function() {
    
  };
  request.send();
  
  function render(item) {
    
      const data = `
      <section class="films">
        <h1>${item.title}</h1>
        <p>${item.opening_crawl}</p>
      </section>`;

      main.insertAdjacentHTML("beforeend", data);
  }

})();

// let element = document.createElement(tagName[, options]);

  
// async function getNasa() {
//   let response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-2-1&api_key=6vA8UNxGma5qV8Q3f6Rr7v3vPOMmUhyxQqVwkmLs')
//   let data = await response.json()
//   return data
// }

// getNasa().then(function (d) {
//   console.log(d)
//   document.getElementById('nasa').src = d.photos[2].img_src
//   document.getElementById('roverName').innerHTML = "Rover name: " + d.photos[0].rover.name
//   document.getElementById('date').innerHTML = "Date: " + d.photos[3].earth_date
// })


