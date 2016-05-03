eventsApp.directive('eventThumbnail', function() {
    return {
        restrict: 'E', // allow directive to be used as an element ('C' for class, A' for attribute)
        replace: true, // replace the html element with the template html
        templateUrl: '/templates/directives/EventThumbnail.html'
    }
});