// create the module and name it businessCardsApp
    // also include ngRoute to handle single-page view changes (the Angular way)
var businessCardsApp = angular.module('businessCardsApp', ['ngRoute']);

// configure routes
businessCardsApp.config(function($routeProvider){
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller: 'mainController'
        })
        // route for the about page
        .when('/about',{
            templateUrl : 'pages/about.html',
            controller: 'aboutController'
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
    $scope.message = 'Welcome to the home page for the Business Cards App. Please Go to the contacts page to use the business cards.';
});

businessCardsApp.controller('aboutController', function($scope){
    $scope.message = 'Welcome to the about page for the Business Cards App. Go to the contacts page to use the business cards.'
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

    $scope.triggerMClick = function(index) {
        // un-hide the modal
        let card = document.getElementById(`#bizCard_${index}`);
        card.classList.remove('hidden');

        // darken the rest of the page
        let bkgrnd = document.getElementById('page-mask');
        bkgrnd.classList.remove('hidden');

        // // set a listener to close the modal
        // card.onclick = function(){
        //     // hide the modal
        //     card.classList.add('hidden');

        //     // un-darken the rest of the page
        //     bkgrnd.classList.add('hidden');

        // };
        // set a listener on the background
        bkgrnd.onclick = function () {
            // hide the modal
            card.classList.add('hidden');

            // un-darken the rest of the page
            bkgrnd.classList.add('hidden');

        };
    };
    $scope.setModal = function(index, contact){

        let modal = document.createElement('div');
        modal.innerHTML = `<div class="modal-business-card hidden" id="#bizCard_${index}">
            <div class="card contact-index-card">
                <img class="card-img-top photo-big" src="${contact.photo_src}" alt="photo of the person on the business card">

                    <div class="card-body">
                        <ul class="list-group contact-blandify cstm-mdl-list">
                            <li class="list-group-item contact-blandify cstm-mdl-list-i">
                                ${contact.name}
                            </li>
                            <li class="list-group-item contact-blandify cstm-mdl-list-i">
                                ${contact.phone}
                            </li>
                            <li class="list-group-item contact-blandify cstm-mdl-list-i">
                                ${contact.email}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`;

        document.body
          .insertAdjacentElement("afterbegin", modal);
    }



    $scope.editing = [];
    $scope.contacts = [];
    // get the data in the database
    businessCards.then(the_cards => {
        let contacts = the_cards.data;
        $scope.contacts = contacts.map((bc, idx) => {
            bc.phone = formatPhoneNumber(bc.phone ? bc.phone.toString() : '');
            bc.photo_src = bc.photo_src ? bc.photo_src : './profiles/default_profile.jpg'

            $scope.setModal(idx, bc); // set a modal to show the card
            return bc;
        });
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
    }]);


// for setting the number string into a visually appealing format
function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return phoneNumberString;
}