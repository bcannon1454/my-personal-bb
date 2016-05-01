var app = angular.module('myApp', ['ngRoute']);

var data = (function() { 
	
	var courses = [{semester: "Fall", course: "Calculus"},
				{semester: "Fall", course: "Algorithms"},
				{semester: "Fall", course: "Operating Systems"},
				{semester: "Fall", course: "English"},
				{semester: "Spring", course: "Programming"},
				{semester: "Spring", course: "Dog Walking"},
				{semester: "Spring", course: "Business"}];
		
	return {
		
		getClasses : function() {
			return courses;
		},

		addClass : function(s, c) {
			courses.push({semester: s, course: c});
		}
	}
})();

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
	$scope.entries = data.getClasses();
	
	//Simulate storing information in a database
	$scope.submit = function(s,c) {
		data.addClass(s,c);
		alert("You added a course! Semester: " + s  + " Course: " + c);
	}
});

app.controller('homeCtrl', function($scope) {
	
});

app.controller('indexController', function($scope) {
});
