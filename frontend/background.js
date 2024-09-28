document.getElementById('scrapeButton').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "getHTML" }, (response) => {
          if (response && response.html) {
              // Create a Blob from the HTML response
              const blob = new Blob([response.html], { type: 'text/html' });
              const url = URL.createObjectURL(blob);
              
              // Create a link element to download the Blob
              const a = document.createElement('a');
              a.href = url;
              a.download = 'page.html'; // The name of the downloaded file
              document.body.appendChild(a); // Append the link to the document
              a.click(); // Programmatically click the link to trigger the download
              document.body.removeChild(a); // Remove the link after downloading
              
              // Optionally, revoke the object URL after download
              URL.revokeObjectURL(url);
          }
      });
  });
});
