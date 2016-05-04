describe('EventListController', function() {

	var $controllerConstructor, scope, mockEventData;

	beforeEach(module("eventsApp")); // using angular mocks load eventsApp that gives access to controllers etc. we defined on it

	beforeEach(inject(function($controller, $rootScope) {
		$controllerConstructor = $controller; // take the controller constructor service and store it so we can use it in our test
		scope = $rootScope.$new(); // create a scope object we can use in the test using the $rootscope service
		mockEventData = sinon.stub({ getAllEvents: function () {}}); // create a stub using sinon which will give us mocking behaviour on this definition
	}))

	it('should set the scope events to the result of eventData.getAllEvents', function() {

		var mockEvents = {};
		mockEventData.getAllEvents.returns(mockEvents); // setup mock behaviour (provided by sinon)

		// create the actual controller to test, passing mock objects for its dependencies
		$controllerConstructor("EventListController", 
			{ '$scope': scope, eventData: mockEventData });

		// check that on construction the desired effects occur
		expect(scope.events).toBe(mockEvents);
	});

});