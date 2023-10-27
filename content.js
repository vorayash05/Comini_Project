// content.js

// Function to generate rhymes
function getRhymeFromServer(originalText, callback) {
    // Make a POST request to the Flask server
    fetch('http://localhost:5000/rhyme', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ headline: originalText }),
    })
      .then(response => response.json())
      .then(data => {
        // Execute the callback function with the rhymed headline
        callback(data.rhymed_headline);
      })
      .catch(error => console.error('Error:', error));
  }  
  // Function to change headlines into rhymes
  function changeHeadlinesIntoRhymes() {
    // Select all h2 elements (assumed headlines) on the page
    const headlines = document.querySelectorAll('h2');
  
    // Iterate through each headline and change its text
    headlines.forEach(headline => {
      const originalText = headline.innerText;
      const rhymedText = getRhymeFromServer(originalText);
      headline.innerText = rhymedText;
    });
  }
  
  // Listen for a message from the extension (popup.js)
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.type == "click_event") {
            console.log("click event captured in current webpage");
            //Call the callback passed to chrome.action.onClicked
          }
    //   if (request.message === "clicked_browser_action") {
    //     // Call the function to change headlines into rhymes
    //     changeHeadlinesIntoRhymes();
    //   }
    }
  );