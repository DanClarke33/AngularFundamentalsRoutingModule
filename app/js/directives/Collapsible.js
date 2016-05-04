eventsApp.directive('collapsible', function() {
	return {
		restrict: 'E',
		replace: true,
		template: '<div><h4 class="well-title" ng-click="toggleVisibility()">{{title}}</h4><div ng-show="visible" ng-transclude></div></div>',
		controller: function($scope) {
			$scope.visible = true;
			$scope.toggleVisibility = function() {
				$scope.visible = !$scope.visible;
			};
		},
		transclude: true, // translcude div and setting used to allow nesting the html already found inside the replaced div
		scope: {
			title: '@'
		}
	}
});