# YouTube Speed Key

A simple Chrome extension that allows you to quickly cycle through video playback speeds (1x, 2x, 3x) on YouTube using the backtick (\`) key.

## Features

* **Quick Speed Toggle:** Press the \` (backtick) key to change the playback speed of the current YouTube video.
* **Speed Cycle:** Cycles through 1x, 2x, and 3x playback rates.
* **Visual Feedback:** Displays a temporary on-screen indicator showing the newly selected speed.
* **Non-Intrusive:** The keybinding only works when you're not typing in an input field (e.g., comments, search bar).

## Files Included

* `manifest.json`: The extension's configuration file.
* `content.js`: The core JavaScript logic that handles key presses and video speed changes.
* `styles.css`: CSS for the on-screen speed indicator.

## Installation and Usage

Follow these steps to install and use the YouTube Speed Key extension:

1.  **Download or Clone the Repository:**
    * If you've downloaded this as a ZIP from GitHub, unzip it to a folder on your computer.
    * If you've cloned the repository, you already have the folder. Let's call this folder `youtube-speed-key`.

2.  **Save the Core Files (if not already present):**
    * Ensure the following files are directly inside your `youtube-speed-key` folder:
        * `manifest.json`
        * `content.js`
        * `styles.css`

3.  **Open Chrome Extensions Page:**
    * Open your Google Chrome browser.
    * Type `chrome://extensions` into the address bar and press Enter.

4.  **Enable Developer Mode:**
    * On the Extensions page, find the "Developer mode" toggle (usually in the top-right corner).
    * Turn Developer mode **ON**.

5.  **Load Unpacked Extension:**
    * Click the "Load unpacked" button.
    * A file dialog will appear. Navigate to and select your `youtube-speed-key` folder.
    * Click "Select Folder".

6.  **Verify Installation:**
    * "YouTube Speed Key" should now be listed among your installed extensions.
    * Ensure its toggle switch is enabled.

7.  **Test:**
    * Go to any YouTube video page.
    * Press the backtick key (\`) on your keyboard.
    * The video playback speed should change, and a "Speed: Xx" indicator will briefly appear.

## How it Works

The `content.js` script listens for keydown events on YouTube video pages. When the backtick (\`) key is pressed (and the user isn't typing in an input field), it finds the main HTML5 video element and adjusts its `playbackRate` property. A temporary visual indicator is displayed using HTML and CSS injected onto the page.

## Optional: Adding Icons

If you wish to add custom icons for the extension (visible on the `chrome://extensions` page):

1.  Create an `images` folder inside your `youtube-speed-key` folder.
2.  Place your icon files (e.g., `icon16.png`, `icon48.png`, `icon128.png`) into this `images` folder.
3.  Modify your `manifest.json` to include an `icons` section:
    ```json
    {
      "manifest_version": 3,
      "name": "YouTube Speed Key",
      "version": "1.0",
      "description": "Press ` (backtick) to cycle YouTube video playback speed (1x, 2x, 3x) on YouTube video pages.",
      "icons": {
        "16": "images/icon16.png",
        "48": "images/icon48.png",
        "128": "images/icon128.png"
      },
      "content_scripts": [
        {
          "matches": ["*://*[.youtube.com/watch](https://.youtube.com/watch)*"],
          "js": ["content.js"],
          "css": ["styles.css"]
        }
      ]
    }
    ```
4.  After updating `manifest.json`, return to `chrome://extensions` and click the reload button for the "YouTube Speed Key" extension.

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests!

## License

This project is open source and available under the [MIT License](LICENSE.md). (You can create a `LICENSE.md` file with the MIT license text if you wish).

