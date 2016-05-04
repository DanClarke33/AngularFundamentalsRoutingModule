describe('eventThumbnail', function() {
	var el;

	beforeEach(module('eventsApp'));
	beforeEach(module('/templates/directives/EventThumbnail.html')); //load the html template used by the directive so we can perform the test

	beforeEach(inject(function($compile, $rootScope) {
		var scope = $rootScope.$new();
		
		// setup property on scope that the directive expects to find
		scope.event = 
		{ 
			name: 'Angular Expo', date: '1/1/2050', time: '10:30', 
			location: { address: '1234 fake st', city: 'NY', province: 'NY' }, 
			id: 1 
		} 

		el = angular.element('<event-thumbnail event="event" />'); // an element we expect angular to bind to that we can check the result on
		$compile(el)(scope); // compile the element with the scope we've defined so that the directive is applied to it
		scope.$digest(); // trigger angulars processing of the bindings and replacing them with the html we expect
	}));

	it('should bind the data', function() {


		expect(el.text()).toContain('Angular Expo');
	})

})