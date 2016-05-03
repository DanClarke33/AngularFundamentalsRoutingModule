eventsApp.directive('eventThumbnail', function() {
    return {
        restrict: 'E', // allow directive to be used as an element ('C' for class, A' for attribute)
        replace: true, // replace the html element with the template html
        templateUrl: '/templates/directives/EventThumbnail.html',
        scope: {
            event: "=event" // take the event attribute value from the element and set it as the event property in the scope, you can even just use "=" for short if the names are the same
        }
    }
});