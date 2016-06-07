describe('event registration app', function() {
	describe('events page', function() {
		beforeEach(function() {
			browser.get('http://localhost:8001/events/');
		});

		it('should have the correct title and first event', function() {
			// note here we are finding elements by their binding so that we're not dependent on html in the page itself
			var list = element.all(by.repeater('event in events')); // using protractor find this element
			expect(list.count()).toEqual(4);
			var titleElement = element(by.binding('event.name'));
			expect(titleElement.getText()).toEqual('Angular Boot Camp');
		});
	});

	describe('event details page', function() {
		beforeEach(function() {
			browser.get('http://localhost:8001/event/1');
		});

		it('should sort by name', function() {
			var list = element.all(by.repeater('session in event.sessions'));
			var titleElement = list.first().element(by.binding('title'));
			expect(titleElement.getText()).toEqual('Directives Masterclass');
		});

		it('should have 3 sessions', function() {
			var list = element.all(by.repeater('session in event.sessions'));
			expect(list.count()).toEqual(3);
		});

		it('should have 1 session when introductory is chosen', function() {
			var selectEl = element(by.model('query.level'));
			selectEl.element(by.cssContainingText('option', 'introductory')).click();
			var list = element.all(by.repeater('session in event.sessions'));
			expect(list.count()).toEqual(1);
		})
	})
});