eventsApp.directive('upvote', function() {
    return {
        restrict: 'E', // allow directive to be used as an element ('C' for class, A' for attribute)
        replace: true, // replace the html element with the template html
        templateUrl: '/templates/directives/UpVote.html',
        scope: {
        	upvote: "&", // set upvote property to the value of the attribute with matching name, using & because it's to be executed in scope of parent
        	downvote: "&",
        	count: "=" // set upvote property to the value of the attribute with matching name, using = because it's to be an actual value returned
        }
    }
});