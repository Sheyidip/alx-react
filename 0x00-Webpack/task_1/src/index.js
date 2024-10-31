import $ from 'jquery';
import _ from 'lodash';

let count = 0;

// Function to update the counter
function updateCounter() {
    count += 1; // Increment the count
    $('#count').text(`${count} clicks on the button`); // Update the displayed count
}

// Create a debounced version of the updateCounter function
const debouncedUpdateCounter = _.debounce(updateCounter, 300);

// Document ready function to create elements and set up event listeners
$(document).ready(function() {
    // Create a button and a paragraph element
    const button = $('<button>Click me!</button>');
    const countParagraph = $('<p id="count">0 clicks on the button</p>');

    // Append elements to the body
    $('body').append(countParagraph);
    $('body').append(button);

    // Bind the debounced function to the button click event
    button.on('click', debouncedUpdateCounter);
});

