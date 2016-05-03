'use strict';

eventsApp.directive('mySample', function($compile) {
	return {
		restrict: 'E', // allow directive to be used as an element ('C' for class, A' for attribute)
		template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>"
		/* example achieves the same as template but demonstrates the flexibility of the link property
		link: function(scope, element, attrs, controller) {
			var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>";
			angular.element(element).html($compile(markup)(scope));
		}*/
	};
});