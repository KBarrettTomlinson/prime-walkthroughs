var omdbApp = angular.module('omdbApp', []);

omdbApp.controller('SearchController', function (OmdbFactory) {
  console.log('SearchController loaded');

  var search = this;
  var favorites = [];

  search.findMovie = function (keywords) {
    console.log('Searching for movie with keywords', keywords);
    OmdbFactory.searchOMDB(keywords) // this is a promise
      .then(function(movies) {
        console.log('Received movies for keywords', keywords, movies);
        search.movies = movies.data.Search;
        search.keyword = '';
      });
  };

  search.addToFavorites =  function(movie) {
    OmdbFactory.addToFavorites(movie);
  };
});

omdbApp.controller('FavoritesController', function (OmdbFactory) {
  console.log('FavoritesController loaded');
  var favorites = this;

  favorites.movies = OmdbFactory.favorites;
});

omdbApp.factory('OmdbFactory', function ($http) {
  var favorites = [];

  // returns a promise
  function searchOMDB(keywords) {
    return $http.get('http://www.omdbapi.com/?s=' + keywords)
      .then(function (movies) {
        return movies; //resolve
      })
      .catch(function (err) {
        console.log('Error getting movies', err);
      });
  }

  function addToFavorites(movie) {
    favorites.push(movie);
  }

  return {
    searchOMDB: searchOMDB,
    favorites: favorites,
    addToFavorites: addToFavorites
  };
});
