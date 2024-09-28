// content.js
function scrapePage() {
    const htmlContent = document.documentElement.outerHTML;
    return htmlContent;
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scrape") {
        const scrapedContent = scrapePage();
        sendResponse({ data: scrapedContent });
    }
});
