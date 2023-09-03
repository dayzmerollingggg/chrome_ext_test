document.addEventListener("DOMContentLoaded", function () {
    // ************** toggle *********
    const toggleSwitch = document.getElementById("toggle-switch");

  // Load the extension's current state from storage and update the toggle switch
  chrome.storage.sync.get("enabled", function (data) {
    if (!data.enabled) {
      toggleSwitch.checked = false;
    }
    else{
      toggleSwitch.checked = true;
    }
  });

  
  // Add an event listener to handle the toggle switch state changes
  toggleSwitch.addEventListener("change", function () {
    // Save the toggle switch state to storage
    chrome.storage.sync.set({ enabled: toggleSwitch.checked });

    // Perform actions based on the toggle switch state
    if (toggleSwitch.checked) {
      // Enable your extension's functionality
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["contentScript.js"]
        });
      });
    } else {
      // Disable your extension's functionality
      
      console.log("Extension disabled");
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["contentScript2.js"]
        });
      });

    }
  });
});
  

    // ************button*******
    // document.getElementById("modify-button").addEventListener("click", function () {
    //   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, { action: "modifyDOM" });
    //   });
    // });
/*******other toggle code */
          // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //   chrome.tabs.sendMessage(tabs[0].id, { action: "stopModify" });
      // });
      // You can perform other actions here when the extension is disabled