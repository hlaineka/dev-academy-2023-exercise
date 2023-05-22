# Helsinki city bike app (Dev Academy pre-assignment) by hlaineka

## RUNNING THE PROJECT

### Start the Hasura/Postgre backend (not necessary, by default uses cloud hasura server):

Download the datadump https://www.dropbox.com/s/z8hpz0xlj3povdx/latest.dump?dl=0

Start the postgres server
```cd backend```

```docker-compose up -d```

copy the dump file to postgres server
```psql -h localhost -U postgres < data/latest.dump```
default password is postgrespassword

start the hasura server
```cd hasura```

```docker-compose up -d```

Now you should have the database running with hasura, and you can access the console from http://localhost:8080/console/

### Starting the front end:

If you want to run the project with the local hasura server, change the uri in src/App.tsx to http://localhost:8080/v1/graphql, and remove headers.

Go to the folder /frontend and run 

```npm i```
 
and

```npm run start```

The page should open to your browser, if not, you can find it in http://localhost:3000/

## ABOUT THE PROJECT

### Stack
This project uses postgreSQL database with Hasura/GraphQL. Postgres- and hasura servers both run on docker. Frontend accesses the database over Apollo, and Codegen was uset to help with query typing. Frontend uses React/Typescript. Localisations were made with the help of i18next. Mui library with themes was used to save time in implementing frontend elements. Jest and Prettier help with writing quality code, and they are added also to githooks to ensure committed code follows the rules. 

### Features:
- Three pages, Dashboard for showing general data, Journeys and Stations
- Localisations in English and Finnish
- Mui elements
- Journeys page implemented with collapsible rows to allow better responsivity
- Data paginated and can be ordered on journeys and stations
- Githooks with prettier and lint
- Tests with Jest
- Backend with postgreSQL and hasura, datadump to help build backend. Docker containers for both servers for easy setup
- Accessible, responsive layout


### Tests:
The project has githooks to check lint and prettier every time code is committed. 
Lint and prettier can be run also with ```npm run prettier``` and ```npm run lint```

Jest/jsdom tests are written for components and can be run with ```npm run jest```.
When developing, tests were run with ```npm run test:watch``` to make sure no
breaking changes were made.

Responsivity was tested manually with developer tools. Accessibility was tested with lighthouse to make sure all the pages get 100%. Wawe tool generated some possible improvements, that were out of the timeframe of this project, but would be extremely educational to go through in detail.

Database was created with hasura, and a lot of the requirements are integrated in the database. You can read more about how the database was created and tested from [the backend documentation](https://github.com/hlaineka/dev-academy-2023-exercise/blob/5de3199bf74cd3bbb684fe69a426176bf6eee009/READMEbackend.md)

Unfortunately I did not have time to learn about E2E tests for this project, but I am really looking forward on mastering that subject in the future.

### Version control:
New features and bigger changes were made in a separate branch and merged to main.
Because of time management reasons and working alone in the project, there were no
merge request base, as I would have done in any other project to make it easier for
others to see what kind of changes were made, how they were tested etc.

### Easily readable code:
Time and energy was put in refactoring the code in a way that helps reading and understand the underlyind logic. Functions and variables have descriptive names and parts that may not be easily understandable have been commented. There are not many comments in the code - I work towards making the code self explanatory.

### Separate frontend and backend, database:
The project uses one folder for frontend and backend, but they are separated. Backend runs with postgreSQL database operated with hasura/graphQL and accessed with Apollo from the frontend. More on backend can be read from READMEbackend.md.

### Error handling is addressed 
Backend dataqueries handle error and loading states. Error and loading messages are at this point printed to console.

### User interface is responsive and easy to use
Responsive tables are difficult to create - the project was planned using figma to make data presentation as responsive as possible. The endproduct does differ from the figma plannin, but having a planning step helped me to grasp what and how I wanted to display in the application. The figma layout for the page can be found in [Figma](https://www.figma.com/file/i2VfpJVUpLSdv9xD7nVvhY/bikeapp?node-id=12%3A201&t=3c3n3ywpxyxJJ5Sv-1).

### The source code and application structure complies to general coding conventions
To ensure good coding practices, I have asked for feedback from some more senior coders than me. I see this app as a possibility to develop my skills, and getting feedback is an important part of that!

## What I wanted to focus on
- Good documentation e.g. building and testing instructions in README-file
- Version control is nicely utilized
- Easily readable code
- Separate frontend and backend, database
- Testing
- Application is presenting relevant data and shows the data correctly
- Error handling is addressed 
- Application is deployed e.g. in Heroku deployment (most likely will not happen for lack of server for hasura server)
- The source code and application structure complies to general coding conventions

## would be nice to add -list
- [ ] Backend, more data validation
- [ ] Fixing station data by importing missing city info
- [ ] Station view: 
	- [ ] The average distance of a journey starting from the station
	- [ ] The average distance of a journey ending at the station
	- [ ] Top 5 most popular return stations for journeys starting from the station
	- [ ] Top 5 most popular departure stations for journeys ending at the station
	- [ ] Ability to filter all the calculations per month
	- [ ] Google maps to singe station view
- [ ] Adding new journeys and stations
- [ ] Running the project online
- [ ] Lots and lots more Jest tests
- [ ] E2E tests
- [ ] Dashboard with more statistics!
- [ ] Accessible layout improvements from WAVE or other tools
- [ ] Search for journeys and stations
- [ ] Change queries to allow more functionalities
- [ ] Fix packages so that there is no vulnerabilities

## LICENCE

MIT
