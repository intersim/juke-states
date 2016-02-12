'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function ($stateProvider) {
  $stateProvider.state('allAlbums', {
    url: '/albums',
    templateUrl: '/templates/allAlbums.html',
    controller: 'AlbumsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('oneAlbum', {
    url: '/albums/:id',
    templateUrl: '/templates/oneAlbum.html',
    controller: 'AlbumCtrl'
  });
});


juke.config(function ($stateProvider) {
  $stateProvider.state('allArtists', {
    url: '/artists',
    templateUrl: '/templates/allArtists.html',
    controller: 'ArtistsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('oneArtist', {
    url: '/artists/:id',
    templateUrl: '/templates/oneArtist.html',
    controller: 'ArtistCtrl'
  });
});