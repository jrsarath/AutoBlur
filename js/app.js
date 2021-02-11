chrome.storage.sync.get(['auto-blur-custom-filters'], function(result) {
    if (!result['auto-blur-custom-filters']) {
        chrome.storage.sync.set({'auto-blur-custom-filters': []}, function() {
            console.log('Value is set to ' + value);
        });
    }
});
chrome.storage.sync.get(['auto-blur-status'], function(result) {
    if (result['auto-blur-status']) {
        $('#control-button').addClass('switch-active');
        $('input[name="control-button"]').prop('checked', true);
    } else {
        $('#control-button').removeClass('switch-active');
        $('input[name="control-button"]').prop('checked', false);
    }
});
chrome.storage.sync.get(['auto-blur-email-status'], function(result) {
    if (result['auto-blur-email-status']) {
        $('#control-button-email').addClass('switch-active');
        $('input[name="control-button-email"]').prop('checked', true);
    } else {
        $('#control-button-email').removeClass('switch-active');
        $('input[name="control-button-email"]').prop('checked', false);
    }
});
chrome.storage.sync.get(['auto-blur-password-status'], function(result) {
    if (result['auto-blur-password-status']) {
        $('#control-button-password').addClass('switch-active');
        $('input[name="control-button-password"]').prop('checked', true);
    } else {
        $('#control-button-password').removeClass('switch-active');
        $('input[name="control-button-password"]').prop('checked', false);
    }
});
chrome.storage.sync.get(['auto-blur-phone-status'], function(result) {
    if (result['auto-blur-phone-status']) {
        $('#control-button-phone').addClass('switch-active');
        $('input[name="control-button-phone"]').prop('checked', true);
    } else {
        $('#control-button-phone').removeClass('switch-active');
        $('input[name="control-button-phone"]').prop('checked', false);
    }
});
// MAIN CONTROL
$('input[name="control-button"]').change(function(e) {
    let value = $('input[name="control-button"]').is(":checked")
    value ? $('#control-button').addClass('switch-active'):$('#control-button').removeClass('switch-active');
    chrome.storage.sync.set({'auto-blur-status': value}, function() {
        console.log('Value is set to ' + value);
    });
});
// EMAIL CONTROL
$('input[name="control-button-email"]').change(function(e) {
    let value = $('input[name="control-button-email"]').is(":checked")
    value ? $('#control-button-email').addClass('switch-active'):$('#control-button-email').removeClass('switch-active');
    chrome.storage.sync.set({'auto-blur-email-status': value}, function() {
        console.log('Value is set to ' + value);
    });

});
// PASSWORD CONTROL
$('input[name="control-button-password"]').change(function(e) {
    let value = $('input[name="control-button-password"]').is(":checked")
    value ? $('#control-button-password').addClass('switch-active'):$('#control-button-password').removeClass('switch-active');
    chrome.storage.sync.set({'auto-blur-password-status': value}, function() {
        console.log('Value is set to ' + value);
    });

});
// PHONE CONTROL
$('input[name="control-button-phone"]').change(function(e) {
    let value = $('input[name="control-button-phone"]').is(":checked")
    value ? $('#control-button-phone').addClass('switch-active'):$('#control-button-phone').removeClass('switch-active');
    chrome.storage.sync.set({'auto-blur-phone-status': value}, function() {
        console.log('Value is set to ' + value);
    });

});
// FORM HANDLATION
$('#custom-element-form').submit(function(e) {
    console.log('helloo');

    $('input[name="name-input"]').val("");
    e.preventDefault();
    return false;
})

chrome.storage.sync.get(['auto-blur-custom-filters'], function(result) {
    result['auto-blur-custom-filters'].map((item,i) => {
        $('.list').append(`
			<li>${item}</li>
		`);
    })
})

