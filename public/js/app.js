var app = angular.module('beerList', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

// To control the Homepage functionality of loading beers from database and uploading them
// use MainCtrl

  $stateProvider
	.state('home', {
	url: '/',
	controller: 'AuthCtrl',
	templateUrl: 'index.html'
	})
	.state('beer', {
  	url: '/beers/:id', 
    controller: 'BeersCtrl',
	templateUrl: '../templates/beer.html',
	})
	.state('register', {
	  url: '/register',
	  templateUrl: '/templates/register.html',
	  controller: 'AuthCtrl'
	})
	.state('login', {
	  url: '/login',
	  templateUrl: '/templates/login.html',
	  controller: 'AuthCtrl'
	});

  $urlRouterProvider.otherwise('home');
}]);