// Get references to the input box, output text, and copy button
const inputBox = document.getElementById('inputBox');
const outputText = document.getElementById('outputText');
const copyButton = document.getElementById('copyButton');

// Add an event listener to the input box to listen for changes
inputBox.addEventListener('input', () => {
  // Set the output text to the value of the input box
  outputText.textContent = inputBox.value;

  // Check if the input is 'Olix' and redirect if true
  if (inputBox.value.toLowerCase() === 'olix') {
    window.location.href = 'https://plsdonatehelp.github.io/olix';
  }
});

// Add an event listener to the copy button to listen for clicks
copyButton.addEventListener('click', () => {
  // Create a new textarea element to hold the output text
  const textarea = document.createElement('textarea');
  textarea.value =
    '<stroke color="#2A0030" thickness="4"><font size="90"><font color="#FF0000"><font face="LuckiestGuy">' +
    inputBox.value +
    '</font></font></font></stroke>';
  document.body.appendChild(textarea);

  // Select the text in the textarea and copy it
  textarea.select();
  document.execCommand('copy');

  // Remove the textarea from the DOM
  document.body.removeChild(textarea);
});
