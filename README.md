# WDI Hamilton - Project 3
# Halsa Health - David Azaria, Danny Graugnard, & Yanina Tsutieva | December 2017/January 2018

## What is Halsa Health?

Who hasn't had to deal with the archaicly cumbersome and cumbersomely archaic health insurance process in the last decade? And if you have, the chances are pretty high you walked away with a profound sense of disappointment, yearning for (at the very least) a (slightly) better user experience (http://bit.ly/2p1essU). 

Well, have no fear: Halsa Health is here! And by here we mean constantly exploring and continuously integrating on a nifty, common sense JavaScript-powered solution for health insurance buyers both new and advanced.

Building on the experience offered by tech-backed health insurers and marketplace platforms built by tech orgs, we wanted to capitalize on the notion that purchasing health insurance should be a simple experience, stripping away any barriers to insure yourself and your family. 

In this relative-to-market-ready MVP for what we envision could/will be a full-fledged, React-powered solution, we wanted to emphasize and present on a user experience we believe best captures the ethos that better should be achievable. By simply entering a few pieces of information about oneself, and in the future powered by a more robust acturial pricing methodology, the Halsa Health experience is one we hope will influence how insurance and platform tech companies alike will in unison move toward clean, simple solutions for their policyholders. 

## Our wireframe

Wireframe can be found in this project repo in the wireframe folder, with files upload and named by sequential page number.

##Our project plan

Project plan can be found in this project repo under the `Projects` tab. There you will find user stories we have allocated to different team members, with columns for `Bugs` and `Won't Do's` given time-constraints to delivery. 

## Our initial thoughts on app structure


## How it works
Feel free to first fork and clone our repo! 

Next, create a local instance of a Postgres database by running the following command in your terminal. 

`createdb halsa_health`

Next, after navigating into the root directory of this project, let's run our migration and seed files like so.

`psql -f db/migrations/plans-migration.sql` 
`psql -f db/migrations/users-migration.sql`
`psql -f db/seeds/plans-seed.sql` 
`psql -f db/seeds/users-seed.sql` 

Next, open the application in your text editor of choice, and in the root directory, create a `.env` file. Inside of it, copy and edit the following:

`DB_HOST=localhost
DB_PORT=5432
DB_NAME=halsa_health
DB_USER=[enter your username of choice here]`

 Next, in your terminal you will need two tabs both pointed at the root directory. In the first, run the initial `npm install` to bring in all of the necessary packages. Once that's run, run `npm run dev` to start the server. In the second tab, run `npm run watch` to initialize and run our webpack, which powers our React app. 

 Lastly, in your browser of choice, go to http://localhost:3000 to visit our webpage! 

## Technologies used

* 3rd party API Zippopotam.US
* Axios
* Body-Parser
* Command Line
* Dotenv
* ESLint 
* Express
* Github
* Heroku
* HTML/CSS/JSX
* JavaScript (!)
* Morgan
* MVC architecture
* Node.JS
* Nodemon
* Path
* pg-promise
* Postgres/SQL
* Postman
* React 
* React-DOM
* React Router
* Webpack

## Phases to completion

Phase 1: Wireframming and story writing. **Due** **COMPLETED**

Phase 2: Minimum viable product, which will consist of: basic API calls, Heroku Deployment, Routes, SQL table creations, and progress on the word cloud technolocy **Due** **COMPLETED**

Phase 3: Feature writing. **Due** **COMPLETED**

Phase 4: Feature writing. **Due** **COMPLETED**

Phase 5: Feature writing and issues/bugs. **Due** **COMPLETED**

Presentation **Tuesday December 5** **COMPLETED**

## Links and Resources


