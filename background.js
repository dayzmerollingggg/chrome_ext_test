chrome.commands.onCommand.addListener(function (command) {
    if (command === "select-all") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              files: ["contentScript.js"]
            });
          });
          console.log("ctrla pressed");
    } 
});