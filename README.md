# Helsinki city bike app (Dev Academy pre-assignment) by hlaineka


## TECHNOLOGIES USED

Backend database created by using postgres server with hasura

Frontend stack:
- Typescript
- Apollo 
- Codegen
- Mui

## RUNNING THE PROJECT

### Start the Hasura/Postgre backend:

Download the datadump https://www.dropbox.com/s/3a9zk0ssde2lc4c/latest.dump?dl=0

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

###Starting the front end:

Go to the folder /frontend and run 

```npm i```
 
and

```npm run start```

The page should open to your browser, if not, you can find it in http://localhost:3000/

## LICENCE

MIT

## Todo -list
- [x] Backend, remove duplicate rows!
= [ ] Backend, data validation
- [x] Not importing journey data with distance shorter than 10m or duration shorter than 10s
- [ ] Fixing station data by importing missing city info
- [x] Single station view
- [ ] Adding new journeys and stations
- [ ] Running the project online
- [ ] Jest tests
- [ ] E2E tests
- [x] Dashboard with statistics
- [ ] Dashboard with more statistics!
- [ ] Language versions
- [x] Responsive layout
- [ ] Accessible layout
- [ ] Documentation
- [x] Ordering per column for journeys and stations
- [ ] Search for journeys and stations
- [ ] Change queries to allow more functionalities
- [x] Code through prettier, commenting
- [x] Single station view to english
- [ ] Timestamp on journeys to more readable format
- [ ] Google maps to singe station view
