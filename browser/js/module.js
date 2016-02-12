'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('/', '/albums');

  $stateProvider.state('allAlbums', {
    url: '/albums',
    templateUrl: '/templates/allAlbums.html',
    resolve: {
      albums: function(AlbumFactory) {
        return AlbumFactory.fetchAll();
      }
    },
    controller: 'AlbumsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('oneAlbum', {
    url: '/albums/:id',
    templateUrl: '/templates/oneAlbum.html',
    resolve: {
      album: function(AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.id);
      }
    },
    controller: 'AlbumCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('allArtists', {
    url: '/artists',
    templateUrl: '/templates/allArtists.html',
    resolve: {
      artists: function(ArtistFactory) {
        return ArtistFactory.fetchAll();
      }
    },
    controller: 'ArtistsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('oneArtist', {
    url: '/artists/:id',
    templateUrl: '/templates/oneArtist.html',
    resolve: {
      artist: function(ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.id);
      }
    },
    controller: 'ArtistCtrl'
  }).state('oneArtist.Albums', {
    url: '/albums',
    templateUrl: '/templates/ArtistAlbums.html',
  }).state('oneArtist.Songs',{
    url: '/songs',
    templateUrl: '/templates/ArtistSongs.html'
  })
});