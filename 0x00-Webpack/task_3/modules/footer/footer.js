import $ from 'jquery';
import './footer.css';

$(document).ready(() => {
  const footer = $('<footer>');
  footer.append('<p>Copyright - Holberton School</p>');
  $('body').append(footer);
});
