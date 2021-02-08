# Table of contents

-   Project poster
-   Project description
-   Demo link
-   Features
-   Checklist
-   Installation
-   External sources
-   Other resources
-   License

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

# Project poster

> //TODO

<!-- ☝️ replace this description with a description of your own work -->

# Project description

For this course I will be making a webapp from scratch with just HTML, CSS and JavaScript. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API of your choice, manipulated and finally shown in the UI of the App. You will learn different ways to structure code and develop your own coding style. With the gained knowledge you will be able to build interactive prototypes, based on real data. Also you will gain a better understanding of how API's, frameworks and libraries work. <br>

# About the API

For this course I'm using the [Star Wars API](https://swapi.dev/). This API is and open REST API which means you don't need a key to access it. But because it's free you only get 10.000 requests per day. That's still a lot of requests but there is a limit. <br>
Obiously the API returns JSON String data which I can use to inject it into a HTML page. <br>
Unfortunatly for me, the API hasn't been updated since 2014. Because of that the newer Star Wars movies aren't available so there isn't as much content. <br>
<br>
Down below I've written examples of possible endpoints and URL's. <br>

Base URL:

> https://swapi.dev/api/

Example requests:

> https://swapi.dev/api/films/
> https://swapi.dev/api/people/
> https://swapi.dev/api/planets/
> https://swapi.dev/api/species/
> https://swapi.dev/api/starships/
> https://swapi.dev/api/vehicles/

Example single request:

> http https://swapi.dev/api/people/1/

Each catogory has specific attributes. Because that's a really long list I'll refer to the [documentation](https://swapi.dev/documentation) of the API

<!-- Add a link to your live demo in Github Pages 🌐-->

# Actor diagram

1. The purpose of my app is to get information about the six original star wars films.
1. The functionalities of the app are: <br>
   fetching the data when the user first lands on the homepage. <br>
   generating HTML to display the six films, clicking one of the six films.
   routing to the correct page, fetch the data from the api about the film that was clicked. <br>
   generating HTML to display detailed information about the chosen film.
1. The actors that will handle these functionalities are: <br>
   a DOM handler (for the clicking event) <br>
   an API handler (to fetch the data from the API) <br>
   a Route handler (to route to the correct chosen film) <br>
   a Data display handler (to display the fetched data on the page)

<img src="https://i.imgur.com/VG2wRd1.png" width="800"/>

# Interaction diagram

> TODO

# Demo link

[Go to the live demo of this project](https://mbergevoet.github.io/kickoff-2021/)

<!-- ...but how does one use this project? What are its features 🤔 -->

# Features

My idea currently for this project is to have a Star Wars encyclopedia which lists plantes and characters per episode or movie. The overview page will have my favorite episodes in there and picking one will take you to a detail page with all the planets, characters and vehicles used in that episode. There will also be an option to translate a page into Wookie language. This isn't very usefull but the API offers this feature so I might as well use it for some extra functionality.

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

# Checklist

-   Fetch data from the API
-   Style a main page
-   Inject data into HTML
-   Style a detail page
-   Add Wookie translate option

<!-- How about a section that describes how to install this project? 🤓 -->

# Installation

> git clone https://github.com/mbergevoet/web-app-from-scratch-2021.git

<!-- What external data source is featured in your project and what are its properties 🌠 -->

# External sources

-   [Code examples from Joost](https://codepen.io/collection/AyJdPK?grid_type=list)
-   [JS event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
-   More things will be added as I go along

# Other resources

[Rubric](https://docs.google.com/spreadsheets/d/1vJJ4EhIqkefWj1nWFp0Pnvy1Kld-S2V3qwZgC6XQO0c/edit?usp=sharing), with learning goals
[Overall plaaning](https://teams.microsoft.com/l/file/95EAEC95-4AB8-4E62-A810-2445969460B6?tenantId=0907bb1e-21fc-476f-8843-02d09ceb59a7&fileType=xlsx&objectUrl=https%3A%2F%2Ficthva.sharepoint.com%2Fsites%2FFDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt%2FShared%20Documents%2F02%20-%20Web%20App%20From%20Scratch%2FWAFS%202021%20Planning.xlsx&baseUrl=https%3A%2F%2Ficthva.sharepoint.com%2Fsites%2FFDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt&serviceName=teams&threadId=19:9bd8abc7b32c4e0196ddbaae12cf8e79@thread.tacv2&groupId=5d001f9a-0a4b-4768-92b1-0f1768328ba3)

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

# License

> This repository uses [MIT](https://github.com/mbergevoet/iCOV-redesign/blob/master/LICENSE) license. © Merlijn Bergevoet 2021
