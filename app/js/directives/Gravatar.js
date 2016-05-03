eventsApp.directive('gravatar', function(gravatarUrlBuilder) { // see you can inject services into directives too
	return {
        restrict: 'E',
        template: '<img />',
        replace: true,
        link: function($scope, element, attrs, controller) {
            attrs.$observe('email', function(newValue, oldValue) { //use $observe to trigger updates when the 'email' observed value is changed
        		if(newValue !== oldValue) {
    				attrs.$set('src',gravatarUrlBuilder.buildGravatarUrl(newValue)); // set source of replaced template image element
        		}
            }); 
        }
    }
});