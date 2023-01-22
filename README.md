# Helsinki city bike app (Dev Academy pre-assignment) by hlaineka


## TECHNOLOGIES USED


## RUNNING THE PROJECT

### Start the Hasura/Postgre backend:

Download the datadump (address to datadump added later)

Start the postgres server
```cd backend```

```docker-compose up -d```

copy the dump file to postgres server
```psql -h localhost -U postgres < data/latest.dump```

start the hasura server
```cd hasura```

```docker-compose up -d```

Now you should have the database running with hasura, and you can access the console from http://localhost:8080/console/


