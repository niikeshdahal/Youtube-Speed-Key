// content.js

// Variables to manage the speed indicator display
let speedIndicatorElement;
let speedIndicatorTimeout;

/**
 * Displays a visual indicator on the screen showing the current playback speed.
 * @param {number} speed - The playback speed to display (e.g., 1, 2, 3).
 */
function showSpeedIndicator(speed) {
  // Create the indicator element if it doesn't exist
  if (!speedIndicatorElement) {
    speedIndicatorElement = document.createElement('div');
    speedIndicatorElement.className = 'youtube-speed-key-indicator'; // Use a specific class name
    document.body.appendChild(speedIndicatorElement);
  }

  // Set the text and make it visible
  speedIndicatorElement.textContent = `Speed: ${speed}x`;
  speedIndicatorElement.classList.add('visible');

  // Clear any existing timeout to hide the indicator
  clearTimeout(speedIndicatorTimeout);

  // Set a new timeout to hide the indicator after 1.5 seconds
  speedIndicatorTimeout = setTimeout(() => {
    speedIndicatorElement.classList.remove('visible');
  }, 1500);
}

// Listen for keydown events on the entire document
document.addEventListener('keydown', function(event) {
  // Determine if the event target is an editable field (input, textarea, contentEditable)
  const targetTagName = event.target.tagName ? event.target.tagName.toLowerCase() : '';
  const isEditable = event.target.isContentEditable || 
                     targetTagName === 'input' || 
                     targetTagName === 'textarea';

  // Process the key press if it's the backtick key and not in an editable field
  if (event.key === '`' && !isEditable) {
    // Find the primary HTML5 video element on the page
    const videoElement = document.querySelector('video');

    if (videoElement) {
      let newSpeed;
      const currentSpeed = videoElement.playbackRate;

      // Cycle through speeds: default -> 2x -> 3x -> default
      if (currentSpeed < 2.0) {
        newSpeed = 2.0;
      } else if (currentSpeed >= 2.0 && currentSpeed < 3.0) {
        newSpeed = 3.0;
      } else {
        newSpeed = 1.0; // Back to normal speed
      }

      videoElement.playbackRate = newSpeed;
      console.log(`YouTube playback speed set to: ${newSpeed}x`); // For debugging
      showSpeedIndicator(newSpeed); // Show visual feedback
    } else {
      console.log('YouTube Speed Key: No video element found on the page.');
    }
  }
});
