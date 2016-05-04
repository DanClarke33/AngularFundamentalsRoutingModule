describe('EventProfileControllerSpec', function() {

	var $controllerConstructor, scope, mockGravatarUrlBuilder;

	beforeEach(module("eventsApp")); // using angular mocks load eventsApp that gives access to controllers etc. we defined on it

	beforeEach(inject(function($controller, $rootScope) {
		$controllerConstructor = $controller; // take the controller constructor service and store it so we can use it in our test
		scope = $rootScope.$new(); // create a scope object we can use in the test using the $rootscope service
		mockGravatarUrlBuilder = sinon.stub({ buildGravatarUrl: function () { return "testurl"; }}); // create a stub using sinon which will give us mocking behaviour on this definition
	}));

	it('should build the gravatar with the given email', function() {

		// create the actual controller to test, passing mock objects for its dependencies
		$controllerConstructor("EditProfileController", 
			{ '$scope': scope, gravatarUrlBuilder: mockGravatarUrlBuilder });

		// check that on construction the desired effects occur
		var email = "joe@joe.com";
		var result = scope.getGravatarUrl(email);

		// verify call
		expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
		expect(result).toBe("testurl");
	});

});