var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Left menu links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('');
		page.removeChat();
	});

	afterEach(function(){
	});

	for (let i = 0; i < 2; i++) {
		it('Verify that Left Menu link #'+ (i+1) +' doesnt show an error page', function(){
			page.leftMenu().clickMenuLink(i);
			expect(page.noError()).toBe(true);
		});
	}
	
	for (let i = 0; i < 3; i++) {
		it('Verify that Right Menu link #'+ (i+1) +' doesnt show an error page', function(){
			page.rightMenu().clickBannerLink(i);
			expect(page.noError()).toBe(true);
		});
	}

});