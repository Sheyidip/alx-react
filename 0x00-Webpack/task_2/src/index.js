/*import $ from 'jquery';
import _ from 'lodash';

let count = 0;

// Function to update the counter
function updateCounter() {
    count += 1;
    document.getElementById('count').textContent = `${count} clicks on the button`;
}

// Create a debounced version of the updateCounter function
const debouncedUpdateCounter = _.debounce(updateCounter, 300);

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Click me!';
    button.setAttribute('aria-label', 'Click to increment counter');

    const countParagraph = document.createElement('p');
    countParagraph.id = 'count';
    countParagraph.textContent = '0 clicks on the button';

    document.body.appendChild(countParagraph);
    document.body.appendChild(button);

    button.addEventListener('click', debouncedUpdateCounter);
});

*/

import '../css/main.css';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.textContent = 'Click Me!';
  document.body.appendChild(button);
  
  const counterText = document.createElement('div');
  counterText.className = 'counter'; // Add the counter class here
  counterText.textContent = 'Counter: 0';
  document.body.appendChild(counterText);

  let count = 0;
  button.addEventListener('click', () => {
    count += 1;
    counterText.textContent = `Counter: ${count}`; // Update the counter text
  });
});
