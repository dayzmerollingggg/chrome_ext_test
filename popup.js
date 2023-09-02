document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("modify-button").addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "modifyDOM" });
      });
    });
  });
  