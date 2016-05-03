eventsApp.directive('mySample', function($compile) {
	return {
		restrict: 'C', // allow directive to be used as an element ('C' for class, A' for attribute)
		template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>",
		scope: {
			// isolate the scope by defining which scope to use and it's properties, in this case we don't need any
		}
		/* example achieves the same as template but demonstrates the flexibility of the link property
		link: function(scope, element, attrs, controller) {
			var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>";
			angular.element(element).html($compile(markup)(scope));
		}*/
	};
});