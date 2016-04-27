'use strict';

eventsApp.controller('EventController', 
    function EventController($scope, eventData, $anchorScroll, $routeParams, $route) {
        $scope.sortorder = 'name';
        /*$route.current.locals.event()
            .then(function(event) { $scope.event = event; })
            .catch(function(response) { console.log(response);});*/
        $scope.event = $route.current.locals.event;

        $scope.upVoteSession = function(session) {
          session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
          session.upVoteCount--;
        }

        $scope.scrollToSession = function() {
            $anchorScroll();
        }
    }
);