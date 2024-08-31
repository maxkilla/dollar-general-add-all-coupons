chrome.runtime.onInstalled.addListener(() => {
    console.log("Dollar General - Add All Coupons Extension Installed");
});

chrome.action.onClicked.addListener((tab) => {
    // Inject the main.js content script when the extension icon is clicked
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['main.js']
    });
});
