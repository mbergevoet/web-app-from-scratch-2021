# :round_pushpin: Table of contents

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

# :flower_playing_cards: Project poster

<!-- <img src="https://i.imgur.com/LZ7lU3m.png" width="800"/> -->

![Project Poster](https://i.imgur.com/LZ7lU3m.png)
![Project Poster Two](https://i.imgur.com/XGN1nWX.png)

<!-- ☝️ replace this description with a description of your own work -->

# :computer: Demo link

[Go to the live demo of this project](https://mbergevoet.github.io/web-app-from-scratch-2021/#films)

# :black_nib: Project description

For this course I will be making a webapp from scratch with just HTML, CSS and JavaScript. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API of your choice, manipulated and finally shown in the UI of the App. You will learn different ways to structure code and develop your own coding style. With the gained knowledge you will be able to build interactive prototypes, based on real data. Also you will gain a better understanding of how API's, frameworks and libraries work. <br>

# :fax: About the API

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

> https://swapi.dev/api/people/1/

Response example:

```js
{

    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
    	"https://swapi.dev/api/films/2/",
    	"https://swapi.dev/api/films/6/",
    	"https://swapi.dev/api/films/3/",
    	"https://swapi.dev/api/films/1/",
    	"https://swapi.dev/api/films/7/"
    ],
    "species": [
    	"https://swapi.dev/api/species/1/"
    ],
    "vehicles": [
    	"https://swapi.dev/api/vehicles/14/",
    	"https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
    	"https://swapi.dev/api/starships/12/",
    	"https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"

}
```

Each catogory has specific attributes. Because that's a really long list I'll refer to the [documentation](https://swapi.dev/documentation) of the API.

<!-- Add a link to your live demo in Github Pages 🌐-->

# :chart_with_upwards_trend: Actor diagram

<!-- <img src="https://i.imgur.com/VG2wRd1.png" width="800"/> -->

![Actor Diagram](https://i.imgur.com/LvfJWww.png)

# :chart_with_downwards_trend: Interaction diagram

<!-- <img src="https://i.imgur.com/s9Jxvar.png" width="800"/> -->

![Interaction Diagram](https://i.imgur.com/lrlbVI8.png)

<!-- ...but how does one use this project? What are its features 🤔 -->

# :clipboard: Features

My idea currently for this project is to have a Star Wars encyclopedia which lists plantes and characters per episode or movie. The overview page will have all the episodes in there and picking one will take you to a detail page with all the planets, characters and vehicles used in that episode. It's fairly basic bu if I had more time I might have been able to make a search feature where you can look up things from star wars by typing in a search input field.

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

# :memo: Checklist

-   ✅ Fetch data from the API
-   ✅ Style a main page
-   ✅ Inject data into HTML
-   ✅ Add basic routes
-   ✅ Routes actually working
-   ✅ Style a detail page
-   ❌ Add Wookie translate option

<!-- How about a section that describes how to install this project? 🤓 -->

# :electric_plug: Installation

Open your terminal or git client

> cd yourDirectory

> git clone https://github.com/mbergevoet/web-app-from-scratch-2021.git

<!-- What external data source is featured in your project and what are its properties 🌠 -->

# :newspaper: What I've learned in this course

In this course I've learned how to build a single page, client side, web appllication from scratch. <br>
<br>
I've learned there are many open API's to your disposal and how different each one is. In my case the Star Wars API is different because it doesn't give you all the data straight away. For example I van fetch the data about the six star wars films just fine but it only gives me a limited amount, if I want to know more details I have to fetch that detail data from a lot of other endpoints. That cost me a lot of time to figure out in the beginning. But in the end it was worth it and I now know how to handle API's like this one. <br>
<br>
I've learned how to use a mircro router librabry. This turned out to be rather easy. All you have to do is define the routes you have and put the code you want to run on a given route between the brackets of the route. <br>
<br>
I've learned how to write your own render functions. Most of the things to do that I already knew but this time I combined it with the router which made it actually work as a single page webapp. <br>
<br>
Other things like understanding and reading the documentation of an API, fetching data from an API and cleaning the data I and splitting up your code in modules I already learned and experienced more or less in the Tech Track of the Theme Semester Information Design. But eventhough I already knew those things didn't make the course easier per se. I found my self back tracking a lot to what I had done previously because I forgot some things. So this was a creat exercise of remembering the old things and applying them all together in this one assignment.

# :book: External sources

-   [SWAPI](https://swapi.dev/)
-   [Code examples from Joost](https://codepen.io/collection/AyJdPK?grid_type=list)
-   [JS event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
-   [Codepen](https://codepen.io)
-   [MDN](https://developer.mozilla.org/)
-   Special thanks to Wouter & Leonie

# :books: Other resources

[Rubric](https://docs.google.com/spreadsheets/d/1vJJ4EhIqkefWj1nWFp0Pnvy1Kld-S2V3qwZgC6XQO0c/edit?usp=sharing), with learning goals
[Overall planning](https://teams.microsoft.com/l/file/95EAEC95-4AB8-4E62-A810-2445969460B6?tenantId=0907bb1e-21fc-476f-8843-02d09ceb59a7&fileType=xlsx&objectUrl=https%3A%2F%2Ficthva.sharepoint.com%2Fsites%2FFDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt%2FShared%20Documents%2F02%20-%20Web%20App%20From%20Scratch%2FWAFS%202021%20Planning.xlsx&baseUrl=https%3A%2F%2Ficthva.sharepoint.com%2Fsites%2FFDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt&serviceName=teams&threadId=19:9bd8abc7b32c4e0196ddbaae12cf8e79@thread.tacv2&groupId=5d001f9a-0a4b-4768-92b1-0f1768328ba3)

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

# :bookmark_tabs: License

> This repository uses [MIT](https://github.com/mbergevoet/iCOV-redesign/blob/master/LICENSE) license. © Merlijn Bergevoet 2021
