describe('eventData', function() {
	beforeEach(module('eventsApp'));

	// rather than mock $resource we really want to check that resource is used to make the desired call 
	// but with a mock of the http behind it, $httpBackend provides this behaviour with the actual http calls mocked out
	it('should issue a GET request to /data/event/[id] when getEvent is called with an id', 
		inject(function(eventData, $httpBackend) {
			$httpBackend.expectGET('/data/event/11');
			$httpBackend.when('GET', '/data/event/11').respond({}); // setup behaviour

			eventData.getEvent(11);
			$httpBackend.flush(); //makes $resource service respond to the call

			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest(); 
		})
	);

	// more concise way of doing the above, in this case testing the output is returned
	it('should return the correct data when getEvent is called', 
		inject(function(eventData, $httpBackend) {
			$httpBackend.when('GET', '/data/event/11').respond({ name: 'My event'}); // setup behaviour
			var event = eventData.getEvent(11);
			$httpBackend.flush(); //makes $resource service respond to the call

			expect(event.name).toBe('My event');
		})
	);
});