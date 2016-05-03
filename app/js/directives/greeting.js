'use strict';

eventsApp
    .directive('greeting', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            priority: 1,
            template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
            controller: function GreetingController($scope) {
                var greetings = ['hello'];
                $scope.sayHello = function() {
                    alert(greetings.join());
                }
                this.addGreeting = function(greeting) {
                    greetings.push(greeting);
                }
            }
        };
    })
    .directive('finnish', function() { 
        return {
            restrict: 'A', // as this is an attribute (and uses require) you'll see you can combine this with the greeting element directive e.g. <greeting finnish/> 
            priority: 1, // the order for this attribute to be applied (effect is this will be run first)
            //terminal: true // can set this so that no directives with a lower priority than this one will be executed
            require: '^greeting', // share controller found in greeting directive
            link: function(scope, element, attrs, controller) {
                controller.addGreeting('hei');
            }
        }
    })
    .directive('hindi', function() {
        return {
            restrict: 'A',
            priority: 2,
            require: '^greeting',
            link: function(scope, element, attrs, controller) {
                controller.addGreeting('namaste')
            }
        }
    })
