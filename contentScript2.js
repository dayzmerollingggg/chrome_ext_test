chrome.storage.sync.get("enabled", function (data) {
    if (!data.enabled) {
      // Modify the background color of the page (example)
    //   document.body.style.backgroundColor = "lightgreen";
      deleteHTMLElem();

    }
    // else{
        
    //     centerHTMLElem();
    //     document.addEventListener("mouseup",function(){
    //         var popup = document.getElementById("hidepopUp");
    //         popup.style.display() = "none";
    //     });
    // }
});

function deleteHTMLElem(){
    var popup = document.getElementById("hidepopUp");
    popup.remove();
}

// function centerHTMLElem()
// {
//     var popup = document.getElementById("hidepopUp");
//     popup.style.textAlign = "center";
//     popup.style.display = "block";
// }

