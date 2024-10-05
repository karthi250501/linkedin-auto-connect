# linkedin-auto-connect

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Limitations](#limitations)
- [Authors](#authors)

## Description

A Chrome extension designed to automate the process of connecting with people on LinkedIn, making it easier to expand your network without manual efforts.

## Installation

To install the LinkedIn Auto Connect Chrome extension on your browser, follow the steps below:

### Prerequisites

- **Google Chrome** browser installed on your machine.
- **Git** to clone the repository.

### Step 1: Clone the Repository

- Go to a directory, where you want to install the Chrome extension.
- Then, clone the extension's repository to your local machine using Git with the below command:
- This will create a folder named linkedin-auto-connect on your machine.

```bash
cd your-directory
git clone https://github.com/karthi250501/linkedin-auto-connect.git
```

### Step 2: Open Chrome Extensions Page

- Open Google Chrome -> Go to Settings -> Open Extensions (or) In the address bar, type _chrome://extensions/_ and press Enter.
- This will take you to the chrome extensions page.

### Step 3: Enable Developer Mode

- Enable **Developer Mode** by switching the toggle from the top-right corner of the page.

### Step 4: Load the Extension

- Enabling Developer Mode provides 3 buttons: Load Unpacked, Pack Extension, Update.
- Click on the Load Unpacked button and select the directory where you have cloned the code for the chrome extension from github (you can also see a manifest.json in that directory).
- This will add the chrome extension for linkedin-auto-connect in your browser.

## Usage

1. **Log In**: Ensure that you are logged into your LinkedIn account in the same Chrome browser where the extension is installed.
2. **Navigate to LinkedIn**: Go to a page on LinkedIn where you want to connect with people.
3. **Open the Extension**: Click on the extension icon located beside the address bar (top-right corner of the page).
4. **Start Connecting**:
   - Click on **LinkedIn Auto Connect**.
   - In the popup, click on the **START CONNECTING** button to begin sending connection requests.
   - The text in the button will be changed to **STOP CONNECTING**.
5. **Auto-Connect**: The extension will automatically click all the **Connect** buttons on the page.
6. **Stop Connecting**:
   - To stop sending requests, click the **STOP CONNECTING** button in the popup.
   - The text in the button will be changed to **START CONNECTING**.
7. **Reset Button**: If all **Connect** buttons on the page have been clicked, the button's text will change back to **START CONNECTING**.

## Features

- **Automated Connection Requests**: It can send connection requests to the people in a particular linkedin page automatically.
- **Random Delay**: It sends each connection request with a random delay of 5 to 10 seconds, respecting linkedin rate limits to avoid being flagged for excessive activity.
- **Progress Bar**: It has a progress bar with a number in the middle (automatically updates after each request), shows how many connect requests are being sent.
- **Progress Bar**: Displays the updated count along with a circular progress bar after each connection request, showing how many requests have been sent.
- **Works in the Background**: Once started, the extension works in the background, allowing you to continue browsing other websites on other tabs while it automates connection requests.
- **No Need for External Scripts**: The entire process runs natively within the Chrome extension, requiring no additional setup or external scripts.

## Limitations

- The extension can send a maximum of 100 **Connect** requests per page.
- To send more requests, you need to click the **START CONNECTING** button again to restart the process.
- You should not close the page or browse in the same tab while the extension is running. However, you can continue using other tabs in your browser.

## Authors

- **Karthikeyan A**  
  GitHub: [karthi250501](https://github.com/karthi250501)
