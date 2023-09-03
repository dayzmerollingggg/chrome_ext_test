chrome.storage.sync.get("enabled", function (data) {
    if (!data.enabled) {
      // Modify the background color of the page (example)
      document.body.style.backgroundColor = "lightgreen";
      deleteHTMLElem();

    }
});

function deleteHTMLElem(){
    var popup = document.getElementById("hidepopUp");
    popup.remove();

}