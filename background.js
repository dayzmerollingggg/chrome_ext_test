chrome.commands.onCommand.addListener(function (command) {
    if (command === "select-all") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "modifyDOM" });
          });
    } 
});