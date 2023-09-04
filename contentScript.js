// contentScript.js
var clientX;
var clientY;


chrome.storage.sync.get("enabled", function (data) {
  if (data.enabled) {
    // Modify the background color of the page (example)
    // document.body.style.backgroundColor = "lightblue";
    createHTMLElem();
    document.addEventListener("mouseup", function(event) {
      var popup = document.getElementById("hidepopUp");
      //console.log("once clicked pop up");
      popup.style.display = 'none';
      clientX = event.pageX;
      clientY = event.pageY;
      let drag = false;
      document.addEventListener('mousedown', function() {
          drag = false;
      });
      document.addEventListener('mousemove', function() {
          drag = true;
      });
      document.addEventListener('mouseup', function() {
          drag ? runTextManipulation() : doNothing();
    
      });
    });
    document.addEventListener("keydown", function(event) {
      // Check if Ctrl (or Command on macOS) and 'a' key are pressed
      if ((event.ctrlKey || event.metaKey) && event.key === "a") {
        console.log("Ctrl+A (or Command+A on macOS) was pressed. Text selected.");
        textManipulationCtrlA();
        // You can replace the console.log with any action you want to perform.
      }
    }); 
  }
});


function createHTMLElem(){
  const textBoxDiv = document.createElement("div");
  //textBoxDiv.innerHTML = "Hello, I've been added by the extension!";
  textBoxDiv.setAttribute("id","hidepopUp");
  textBoxDiv.style.backgroundColor =   "rgba(217, 217, 217,0.90)";
  textBoxDiv.style.color = "#000";
  textBoxDiv.style.textAlign = "left";
  textBoxDiv.style.padding = "5px";
  textBoxDiv.style.position = "absolute";
  textBoxDiv.style.width = "auto";
  textBoxDiv.style.height = "auto";
  textBoxDiv.style.fontSize = "12px";
  textBoxDiv.style.fontWeight = "bold";
  textBoxDiv.style.borderRadius = "10px";
  textBoxDiv.style.border = "1px solid #000"
  document.body.append(textBoxDiv);

    // **************
  const wordCount = document.createElement("p");
  //const node = document.createTextNode("This is new.");
  wordCount.setAttribute("id","wordOutput");
  //wordCount.appendChild(node);
  textBoxDiv.appendChild(wordCount);

    //********* */
  const charCount = document.createElement("p");
  //const node1 = document.createTextNode("This is new.");
  charCount.setAttribute("id","charOutput");
  //charCount.appendChild(node1);
  textBoxDiv.appendChild(charCount);
};

function doNothing(){
    return;
};

function textManipulationCtrlA(){
    //console.log(clientX + clientY);
    var highlightedText = getHighlightedText();
    var wordCount = highlightedText.split(/\s+/).filter(Boolean).length;
    var charCount = highlightedText.length;

    document.getElementById("wordOutput").innerHTML = "words: " + wordCount;
    document.getElementById("charOutput").innerHTML = "characters: " + charCount;

    var popup = document.getElementById("hidepopUp");

    if (highlightedText !== '') {
      popup.style.margin = "auto";
      popup.style.display = 'block';
    } 
    else {
        popup.style.display = 'none';
        }
};

function runTextManipulation(){
  //console.log(clientX + clientY);
  var highlightedText = getHighlightedText();
  var wordCount = highlightedText.split(/\s+/).filter(Boolean).length;
  var charCount = highlightedText.length;

  // console.log("Outside");
  // console.log('Number of words:', wordCount);
  // console.log('Number of characters:', charCount);

  document.getElementById("wordOutput").innerHTML = "words: " + wordCount;
  document.getElementById("charOutput").innerHTML = "characters: " + charCount;

  // console.log("inside");

  var popup = document.getElementById("hidepopUp");

  if (highlightedText !== '') {
      popup.style.left = clientX + 5 + 'px';
      
      popup.style.top = clientY - 5 + 'px';
      popup.style.display = 'block';
      //popup.classList.add("active");
  } 
  else {
      //popup.style.opacity = 0;   
      popup.style.display = 'none';
      //popup.classList.remove("active");
      }
};

function getHighlightedText() {
  var text = "";
  if (window.getSelection) {
      text = window.getSelection().toString();
  } else if (document.selection && document.selection.type !== "Control") {
      text = document.selection.createRange().text;
  }
  
  return text;
  
};

// document.addEventListener("mouseup", function(event) {
//     // var popup = document.getElementById("hidepopUp");
//     // popup.style.display = 'none';
//     clientX = event.pageX;
//     clientY = event.pageY;
// });

  /****************************** */

// document.addEventListener("DOMContentLoaded", function(event){
//     let drag = false;
//     document.addEventListener('mousedown', function() {
//         drag = false;
//     });
//     document.addEventListener('mousemove', function() {
//         drag = true;
//         console.log("drag");
//     });
//     document.addEventListener('mouseup', function() {
//         drag ? runTextManipulation() : doNothing();

//     });
//  });
