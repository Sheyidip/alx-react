import $ from 'jquery';
import { debounce } from 'lodash';

let count = 0;

function updateCounter() {
    count += 1;

    $('#count').text(`${count} clicks on the button`);
}


/// Binding the debounce function to the click function
const debouncedUpdateCounter = debounce(updateCounter, 300);

$(document).ready(function() {
    $('#myButton').on('click', debounceUpdateCounter);
});
