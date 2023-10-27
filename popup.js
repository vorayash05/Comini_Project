// popup.js
console.log("Script loaded!")
// document.addEventListener('DOMContentLoaded', function() {
//     // Find the button with the id 'rhymeButton' in popup.html
//     var button = document.getElementById('rhymeButton');
  
//     // Add a click event listener to the button
//     button.addEventListener('click', function() {
//         console.log("buttonclick")
//       // Send a message to content.js when the button is clicked
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         var activeTab = tabs[0];
//         chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//       });
//     });
//   });