// https://swapi.dev/api/
(function(){
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

// TODO chaining multiple API calls to get the information I need
