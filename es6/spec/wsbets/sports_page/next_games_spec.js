var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Next Games coupon functionality testing', function(){
	var page = new SportsPage();

	afterEach(function() {
		page.betslip().deleteAllBets();
	});

	beforeAll(function(){
		page.visit('sportsbook');
		page.login();
		page.closeAd();
		page.visit('sportsbook');
	});

	afterAll(function(){
	});

	it('Verify that first tab doesnt contain already started events', function(){
		expect(page.nextGames().dateTimes()).not.toContain(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that second tab doesnt contain already started events', function(){
		page.nextGames().selectTab(1);
		expect(page.nextGames().dateTimes()).not.toContain(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that third tab doesnt contain already started events', function(){
		page.nextGames().selectTab(2);
		expect(page.nextGames().dateTimes()).not.toContain(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can open a game/event coupon', function(){
		page.visit('error');
		page.visit('sportsbook');
		page.nextGames().selectTab(0);
		page.nextGames().selectGame(0);
		page.closeCoupon();
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can place a bet directly from the Next Games coupon', function(){
		page.visit('sportsbook');
		page.nextGames().placeBet();
		expect(page.betslip().betsAmount()).toEqual(1);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can place multiple bets directly from the Next Games coupon', function(){
		page.betslip().deleteAllBets();
		page.nextGames().placeBet();
		page.nextGames().placeBet();
		page.nextGames().placeBet();
		expect(page.betslip().betsAmount()).toEqual(3);
		expect(page.noError()).toBe(true);
	});

});