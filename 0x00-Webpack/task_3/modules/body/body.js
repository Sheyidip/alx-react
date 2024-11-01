import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

const button = $('<button>Click me!</button>');
const counter = $('<p>Count: 0</p>');

button.on('click', () => {
  count++;
  counter.text(`Count: ${count}`);
});

$('body').append(button);
$('body').append(counter);
