// create the module and name it businessCardsApp
    // also include ngRoute to handle single-page view changes (the Angular way)
var businessCardsApp = angular.module('businessCardsApp', ['ngRoute']);

// configure routes
businessCardsApp.config(function($routeProvider){
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller : 'mainController'
        })
        // route for the about page
        .when('/about',{
            templateUrl : 'pages/about.html',
            controller : 'aboutController'
        })
        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contacts.html',
            controller : 'contactsController'
        });
});


// create the controller and inject Angular's $scope
businessCardsApp.controller('mainController', function ($scope) {

    // create a message to display in our view
    $scope.message = 'Here are my cool friends!';
});

businessCardsApp.controller('aboutController', function($scope){
    $scope.message = 'Welcome to the about page for the Business Cards App.'
});

businessCardsApp.controller('contactsController', function($scope){
    $scope.message = 'Here is some info about your associates';
});