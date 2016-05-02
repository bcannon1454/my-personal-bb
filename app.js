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

var assignments = (function() { 
	
	var todo = [{name: "Lab 03", course: "201", duedate: "March 15"},
				{name: "HW 02", course: "311", duedate: "March 12"},
				{name: "Javascript", course: "315", duedate: "March 11"},
				{name: "Frameworks", course: "214", duedate: "March 1"},
				{name: "Lab 04", course: "324", duedate: "March 5"},
				{name: "HW 04", course: "102", duedate: "March 25"},
				{name: "Quiz 04", course: "307", duedate: "March 18"}];
		
	return {
		
		getAssignments : function() {
			return todo;
		},

		addAssignment : function(n, c, d) {
			todo.push({name: n, course: c, duedate: d});
		}
	}
})();

var notes = (function() { 
	
	var items = [{note: "We can use notes for the quiz on Wednesday"},
				 {note: "Class was canceled Monday, March 2nd"}];
		
	return {
		
		getNotes : function() {
			return items;
		},

		addNote : function(n) {
			items.push({note: n});
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
	
	$routeProvider.when("/assignments", {
		controller: "assignCtrl",
		templateUrl: "assignments.html"
	});
	
	$routeProvider.when("/notes", {
		controller: "notesCtrl",
		templateUrl: "notes.html"
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

app.controller('assignCtrl', function($scope) {
	
	$scope.entries = assignments.getAssignments();
	
	//Simulate storing information in a database
	$scope.submit = function(n, c, d) {
		assignments.addAssignment(n, c, d);
		alert("You added an assignment: " + n  + " Course: " + c + " due on " + d);
	}
});

app.controller('notesCtrl', function($scope) {
	$scope.entries = notes.getNotes();
	
	//Simulate storing information in a database
	$scope.submit = function(n) {
		notes.addNote(n);
	}
});

app.controller('homeCtrl', function($scope) {
	
});

app.controller('indexController', function($scope) {
});
