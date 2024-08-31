chrome.runtime.onInstalled.addListener(() => {
    console.log("Dollar General - Add All Coupons Extension Installed");
});

chrome.action.onClicked.addListener((tab) => {
    console.log("Tab:", tab);
    
    if (tab && tab.id !== undefined) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['main.js']
        }, () => {
            if (chrome.runtime.lastError) {
                console.error(`Script injection failed: ${chrome.runtime.lastError.message}`);
            } else {
                console.log("Script injected successfully.");
            }
        });
    } else {
        console.error("Tab ID is undefined. Script injection failed.");
    }
});
