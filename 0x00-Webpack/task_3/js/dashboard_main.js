import $ from 'jquery';

$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');
});

function updateCounter() {
    counter++;
    $('#count').html(`${counter} click on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
