// this is the background code...

// listen for our browerAction to be clicked

var works = false;

chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	
	works = !works;

	if( works ){
		chrome.tabs.executeScript(tab.ib, {
			file: 'inject.js'
		});
	}else{
		chrome.tabs.executeScript(tab.ib, {
			file: 'hide.js'
		});
	}

});