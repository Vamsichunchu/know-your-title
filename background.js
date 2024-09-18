chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.active) {
        chrome.scripting.executeScript({
            target: {tabId: tabId},
            function: getTabTitle
        });
    }
});

function getTabTitle() {
    console.log('The title of this tab is: ' + document.title);
    chrome.runtime.sendMessage({ title: document.title });
}