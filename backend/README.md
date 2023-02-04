How the database was created:

After creating the tables and importing the csv data to journeys and stations databases, column names were changed to ones with underscores.  

After that journeys with covered distance less than 10 meters were deleted from database with command ```DELETE FROM journeys WHERE covered_distance_m < 10 ;``` and journeys that lasted less than 10 seconds were deleted from database with command ```DELETE FROM journeys WHERE duration_sec < 10;``` Entries in the database was dropped from 3247002 to 3131088.

After that a few extra columns were created to stations table, journey_departures and journey_returns. Data to those fields was created with ```UPDATE stations SET journey_departures = (SELECT COUNT(id) FROM journeys WHERE journeys.departure_station_id = stations.id);``` and ```UPDATE stations SET journey_returns = (SELECT COUNT(id) FROM journeys WHERE journeys.return_station_id = stations.id);```