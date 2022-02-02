console.log("test");

function addSong() {
    console.log("test");
}

browser.browserAction.onClicked.addListener(async(info, tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: addSong,
    });
});