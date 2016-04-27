/**
 * Created by dan.clarke on 27/04/2016.
 */
eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location) {
        $scope.createEvent = function() {
            $location.url('/newEvent');
        }
    });