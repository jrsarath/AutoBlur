let items = [
	'input[name="registration"]',
	'input[name="_registration"]',
	'input[name="billing_postcode"]',
	'input[name="billing_phone"]',
	'input[name*="email-address"]',
	'input[name*="phone-number"]',
	'input[name*="api_key"]',
	'input[name*="licence_key"]',
	'input[name*="_organizer_email"]',
	'input[name="event_manager_google_maps_api_key"]',
	'input[type="email"]',
	'input[type="password"]',
	'p:contains("@gmail.com"),p:contains("@outlook.com"),p:contains("@yahoo.com")',
	//'div:contains("@gmail.com"),div:contains("@outlook.com"),div:contains("@yahoo.com")',
	'a:contains("@gmail.com"),a:contains("@outlook.com"),a:contains("@yahoo.com")',
	'span:contains("@gmail.com"), span:contains("@outlook.com"),span:contains("@yahoo.com")',
	'strong:contains("@gmail.com"), strong:contains("@outlook.com"),strong:contains("@yahoo.com")',
	'b:contains("@gmail.com"), b:contains("@outlook.com"),b:contains("@yahoo.com")',
	'td:contains("@gmail.com"),td:contains("@outlook.com"),td:contains("@yahoo.com")',
]
chrome.storage.sync.get(['auto-blur-status'], function(result) {
	if (result['auto-blur-status']) {
		items.map((item) => {
			$(item).css('filter','blur(5px)');
		})
		document.addEventListener('DOMNodeInserted', () => {
			items.map((item) => {
				$(item).css('filter','blur(5px)');
			})
		}, false);
	}
});
