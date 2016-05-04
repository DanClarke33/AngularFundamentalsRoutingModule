
describe('calendarHelper', function() {

	beforeEach(module('eventsApp'));

	it('should return January when given a zero', 
		inject(function(calendarHelper) { // inject the service that we want to test, it will be constructed by angular
			expect(calendarHelper.getMonthName(0)).toBe('January');
	}))

});