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
        .when('/contacts', {
            templateUrl : 'pages/contacts.html',
            controller : 'contactsController'
        })
        .when('/contacts/:id', {
            templateUrl: 'pages/contactDetails.html',
            controller: 'contactDetailCtrl'
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






businessCardsApp
        .factory('businessCards', ['$http', function($http){
            return $http.get('business_cards');
        }])
        .factory('businessCardDetails', ['$resource', function ($resource) {
            return $resource('business_cards/:id', null, {
                'update': { method: 'PUT' }
            });
        }])
.controller('contactsController', ['$scope', 'businessCards', function ($scope, businessCards) {
    $scope.message = 'Here is some info about your associates';
    $scope.editing = [];
    $scope.contacts = [];
    businessCards.then(the_cards => {
        console.log(the_cards.data);
        $scope.contacts = the_cards.data;
    });

    $scope.save = function () {
        if (!$scope.newbusinessCard || $scope.newbusinessCard.length < 1) return;
        var businessCard = new businessCards({ name: $scope.newbusinessCard });
        businessCard.$save(function () {
            $scope.businessCards.push(businessCard);
            $scope.newbusinessCard = ''; // clear textbox
        });
    }
    $scope.update = function (index) {
        var businessCard = $scope.businessCards[index];
        businessCards.update({ id: businessCard._id }, businessCard);
        $scope.editing[index] = false;
    }
    $scope.edit = function (index) {
        $scope.editing[index] = angular.copy($scope.businessCards[index]);
    }
    $scope.cancel = function (index) {
        $scope.businessCards[index] = angular.copy($scope.editing[index]);
        $scope.editing[index] = false;
    }
    $scope.remove = function (index) {
        var businessCard = $scope.businessCards[index];
        businessCards.remove({ id: businessCard._id }, function () {
            $scope.businessCards.splice(index, 1);
        });
    }
}])
    .controller('contactDetailCtrl', ['$scope', '$routeParams', 'businessCards', '$location', function ($scope, $routeParams, businessCards, $location) {
        $scope.businessCard = businessCards.get({ id: $routeParams.id });
        $scope.remove = function () {
            businessCards.remove({ id: $scope.businessCard._id }, function () {
                $location.url('/');
            });
        }
    }])