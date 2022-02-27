# RestApiSql
REST API for SQL db

Tässä olisi nyt toivomanne REST API, joka käyttää relaatiotietokantaa(SQL Server) datan säilömiseen. 

Tietokanta jota tämä API on konfiguroitu käyttämään löytyy osoitteesta https://github.com/papuht/membersDB. Tämä tietokanta pitää asettaa Microsoft SQL Serveriin koneessa jossa apia testataan. 

Itse applikaatio on konfiguroitu starttaamaan localhostista; launchSetting.json -tiedoston launchUrl -rivi täytyy ottaa pois kommenteista 
jos tämä asetetaan pyörimään varsinaiselle serverille. 


--------------------------------------------------------------------------------------

This is the requested REST API for relational database, in this case SQL Server. 

The database that this API is configured to use can be found from the address https://github.com/papuht/membersDB. This database must be set up on Microsoft SQL Server in the computer where the api is to be tested. 

The application itself is configured to launch from the localhost; if you deploy this to actual server the launchUrl -line from the launchSettings.json -file 
must be uncommented.  
