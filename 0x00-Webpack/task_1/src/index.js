import $ from 'jquery';
import _ from 'lodash';

let count = 0;

// Function to update the counter
function updateCounter() {
    count += 1; // Increment the count
    $('#count').text(`${count} clicks on the button`); // Update the paragraph
}

// Debounce the updateCounter function
const debouncedUpdateCounter = _.debounce(updateCounter, 300);

// Create elements and add them to the body
$(document).ready(function() {
    const button = $('<button>Click me!</button>');
    const countParagraph = $('<p id="count">0 clicks on the button</p>');

    // Append elements to the body
    $('body').append(countParagraph);
    $('body').append(button);

    // Bind the debounced function to the button click event
    button.on('click', debouncedUpdateCounter);
});

