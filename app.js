var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeCtrl",
        templateUrl: "homepage.html"
    });

	$routeProvider.when("/dashboard", {
		controller: "dashCtrl",
		templateUrl: "dashboard.html"
	});
});

app.controller('dashCtrl', function($scope) {
	
});

app.controller('homeCtrl', function($scope) {
	
});

app.controller('indexController', function($scope) {
});
