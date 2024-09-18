document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button');
    const linkElement = document.querySelector('.link');

    button.addEventListener('click', function () {
        // Query the active tab in the current window
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (chrome.runtime.lastError) {
                console.error('Runtime Error:', chrome.runtime.lastError);
                linkElement.textContent = 'Error retrieving name';
                return;
            }
            if (tabs.length > 0) {
                const activeTab = tabs[0];
                try {
                    // Create a new URL object to extract the hostname
                    const url = new URL(activeTab.url);
                    linkElement.textContent = url.hostname || 'No name available';
                } catch (error) {
                    linkElement.textContent = 'Invalid URL';
                }
            } else {
                linkElement.textContent = 'No active tab found';
            }
        });
    });
});