# Chi Weekend 5 Challenge Live Solve

## TODO

- [ ] Use Angular, Express, Node, Bootstrap

**View 1**
- [x] Search for movie information from OMDB
  - [x] Create a form that takes search input
  - [x] Make request to OMDB API using search input data
- [x] Display information about found movies
  - [x] Search information must appear as soon as the response is received from the API
- [x] Each movie should have a button for favoriting the movie
    - [x] Favorites to be stored in an array

**View 2**
- [x] Display favorites selected by user
- [x] Use an Angular factory for the API requests

### Hard Mode

- [ ] Store favorites in a Mongo database

### Pro Mode

- [ ] Add ability to delete a favorite

### Master Mode

- [ ] Host on Heroku and mLabs

## Files and and Folders

File/Folder | Purpose
--- | ---
*server.js* | The entry point for our application; where the server starts, our Express app is initialized, routing middleware is mounted, etc.
**public** | **Directory for the static files we will serve to the client**
*public/scripts* | Angular script files
*public/styles* | CSS files
*public/views* | HTML files
*public/views/index.html* | Display search form, results
*public/vendors* | Third-party client-side libraries
**routes** | **Server-side routes respond to HTTP requests to the server**
