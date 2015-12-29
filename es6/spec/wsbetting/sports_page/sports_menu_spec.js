var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify that each sport has at least one event \
	and that coupon shows the correct Sport title', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('');
	});

	afterEach(function(){
	});

	for (let i = 0; i < 23; i++) {
		it('Verify that link #' + (i+1) + ' shows at least one event', function(){
			page.sportsMenu().clickLink(i);
			expect(page.betsAmount()).toBeGreaterThan(0);
		});
	}
});
