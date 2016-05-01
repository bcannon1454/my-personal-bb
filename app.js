var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when("/", {
        controller: "homeCtrl",
        templateUrl: "home.html"
    });

	$routeProvider.when("/home", {
		controller: "homeCtrl",
		templateUrl: "homepage.html"
	});

});

app.controller('homeCtrl', function($scope) {

});

app.controller('indexController', function($scope) {
});
