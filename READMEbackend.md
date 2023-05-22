# HOW THE DATABASE WAS CREATED

After creating the tables and importing the csv data to journeys and stations databases, column names were changed to ones with underscores. 

```psql -h localhost -p 5432 -d postgres -U postgres```

```create table journeys (id serial, "Departure" timestamp, "Return" timestamp, departure_station_id integer, departure_station_name text, return_station_id integer, return_station_name text, covered_distance_m real, duration_sec integer);```

```\COPY journeys ("Departure", "Return", departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance_m, duration_sec) FROM 'journeys.csv' WITH DELIMITER ',' CSV HEADER;``

## REMOVAL OF NEAR ZERO DATA

After that journeys with covered distance less than 10 meters were deleted from database with command 
```DELETE FROM journeys WHERE covered_distance_m < 10 ;``` 
and journeys that lasted less than 10 seconds were deleted from database with command 
```DELETE FROM journeys WHERE duration_sec < 10;``` 
Entries in the database was dropped from 3247002 to 3131088. After running test on the app, also rows where covered distance was null were removed with command 
```DELETE FROM journeys WHERE covered_distance_m IS NULL;```, 2330 rows were deleted.

## REMOVAL OF DOUBLE ENTRIES

Double entries from the journeys database were removed by creating a temporary secondary table and adding only distinct data to it with 
```INSERT INTO journeys_distinct (departure, return, departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance_m, duration_sec) SELECT DISTINCT "Departure", "Return", departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance_m, duration_sec FROM journeys;``` 

This procedure removed half of the over 3 000 000 entries making the database significantly lighter. After that, the old database was dropper and the new one renamed.

## EXTRA CONTENT TO STATIONS

After that a few extra columns were created to stations table, journey_departures and journey_returns. Data to those fields was created with 
```UPDATE stations SET journey_departures = (SELECT COUNT(id) FROM journeys WHERE journeys.departure_station_id = stations.id);``` 
and 
```UPDATE stations SET journey_returns = (SELECT COUNT(id) FROM journeys WHERE journeys.return_station_id = stations.id);```

In retrospect, it might have been a better idea to learn how to make queries for these, but you need to have goals for the future too! Fetching this data with queries would have given a good base for adding a lot more customable information to station view, and allowed things like showing usage by month or year.

## DATA VALIDATION

Going through data validation I teached myself more about hasura and hasura mutations. I used the hasura web-interface to create proper datatypes for columns, foreign key pairs and check constraits.  

All fields for journey were changes to non-nullable to force type checking. On stations, fid and id were created to be non-nullable.

On journeys table foreign key pairs were made between departure_station_id and station_id and return_station_id and station_id. This way only valid id:s with matching pair in stations table can be added. Because of this, journeys starting or ending in three stations not listed in stations table were removed: Lintumetsä, Helsinki Workshop and Bike Production. 

Distance and duration limits were added to check constraints of journey table to be forced on any new data imported to the database.

I would have loved to add also a constraint about departure time being before return time, but that is something I am looking forward to learning in the future!

## TESTING THE DATABASE

For testing purposes, I created a mock dataset, shown in test_data folder of the project. The original set is in test_journeys_original.csv, which I tried to import to the database with

```psql -h localhost -p 5432 -d postgres -U postgres```

```create table test_journeys (id serial, "Departure" timestamp, "Return" timestamp, departure_station_id integer, departure_station_name text, return_station_id integer, return_station_name text, covered_distance_m real, duration_sec integer);```

```\COPY test_journeys ("Departure", "Return", departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance_m, duration_sec) FROM './test_data/test_journeys.csv' WITH DELIMITER ',' CSV HEADER;```

The datatypes of columns are identical to the real database and trying to insert the mock data to database failed for copy errors. I deleted all the lines that created errors, and what was left to test you can find in test_journeys.csv. Data with incorrect datatype can not be inserted to postgres database, so incorrect datatypes were removed when populating the database. 

The test data turned out to be too much for my skillset-availabe time ratio, so not all of the test data is passed properly by the app.
