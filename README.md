KNOW YOUR TITLE

Know Your Title is a Chrome extension that displays the domain name of the currently active web page when a button is clicked. This extension h
elps users quickly identify the website they are viewing by showing its domain in the popup.

Features : 
Shows the domain name of the current tab.
Easy-to-use popup with a single button.
Download or Clone the Repository

bash
Copy code
git clone https://Vamsichunchu/know-your-title.git
Load the Extension into Chrome

Open Chrome and go to chrome://extensions/.
Enable "Developer mode" by toggling the switch at the top right.
Click the "Load unpacked" button.
Select the directory where you have the extension files.
Files
manifest.json: Configures the extension, including permissions, background scripts, and popup settings.
popup.html: HTML file for the extension’s popup.
popup.js: JavaScript file that handles the logic for displaying the domain name.
background.js: Background script that listens for tab updates and retrieves the page title.
How It Works
Background Script (background.js)

Listens for tab updates and executes a script to get the page title.
Sends the title of the current tab to the popup.
Popup Script (popup.js)

Waits for the popup to load and listens for a click event on the button.
Displays the domain name of the active tab received from the background script.

Usage :
Click on the extension icon in the Chrome toolbar.
In the popup, click the "Show the title" button.
The domain name of the current page will be displayed in the popup.

Troubleshooting : 
No Domain Name Displayed: Ensure that the extension has the necessary permissions in manifest.json.
"Invalid URL" Message: Verify that the URL is correctly formatted and accessible.
