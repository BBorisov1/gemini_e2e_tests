var AccountHistoryPage = require('../../../source/general/pages/account_history_page.js');

describe('Since filter shows the correct amount of data in the table', function(){
	var page = new AccountHistoryPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');
		page.visit('account/history');
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
		page.historyFilter().selectOption("10");
	});

	afterEach(function(){
	});

	it('Verify that 1 day filter shows transactions that happened not earlier than 24 hours from now', function(){
		page.historyFilter()
		.selectOption("1 Día")
		.clickSubmit();
		page.historyTable().selectLastPage();
		expect(page.historyTable().daysShowed()).toBeLessThan(1);
	});

	it('Verify that 1 week filter shows transactions that happened not earlier than 7 days from now', function(){
		page.historyFilter()
		.selectOption("1 Semana")
		.clickSubmit();
		page.historyTable().selectLastPage();
		expect(page.historyTable().daysShowed()).toBeLessThan(7);
	});

	it('Verify that 1 month filter shows transactions that happened not earlier than 31 days from now', function(){
		page.historyFilter()
		.selectOption("1 Mes")
		.clickSubmit();
		page.historyTable().selectLastPage();
		expect(page.historyTable().daysShowed()).toBeLessThan(31);
	});

	it('Verify that 2 months filter shows transactions that happened not earlier than 62 days from now', function(){
		page.historyFilter()
		.selectOption("2 Meses")
		.clickSubmit();
		page.historyTable().selectLastPage();
		expect(page.historyTable().daysShowed()).toBeLessThan(62);
	});

	it('Verify that 3 months filter shows transactions that happened not earlier than 93 days from now', function(){
		page.historyFilter()
		.selectOption("3 Meses")
		.clickSubmit();
		page.historyTable().selectLastPage();
		expect(page.historyTable().daysShowed()).toBeLessThan(93);
	});

	it('Verify that 6 months filter shows transactions that happened not earlier than 186 days from now', function(){
		page.historyFilter()
		.selectOption("6 Meses")
		.clickSubmit();
		page.historyTable().selectLastPage();
		expect(page.historyTable().daysShowed()).toBeLessThan(186);
	});

	it('Verify that 1 year filter shows transactions that happened not earlier than 366 days from now', function(){
		page.historyFilter()
		.selectOption("1 Año")
		.clickSubmit();
		page.historyTable().selectLastPage();
		expect(page.historyTable().daysShowed()).toBeLessThan(366);
	});

});