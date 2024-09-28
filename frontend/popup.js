// popup.js
document.getElementById('scrapeButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "scrape" }, (response) => {
            const htmlContent = response.data;
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'scraped_page.html';
            link.click();
        });
    });
});
