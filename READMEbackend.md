# HOW THE DATABASE WAS CREATED

After creating the tables and importing the csv data to journeys and stations databases, column names were changed to ones with underscores. 

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