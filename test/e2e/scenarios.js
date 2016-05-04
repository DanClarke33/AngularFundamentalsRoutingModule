describe('event registration app', function() {
	describe('events page', function() {
		beforeEach(function() {
			browser.get('http://localhost:8001/events/');
		});

		it('should have the correct title and first event', function() {
			var list = element.all(by.repeater('event in events')); // using protractor find this element
			expect(list.count()).toEqual(4);
		});
	});
});