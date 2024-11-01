import $ from 'jquery';
import './header.css';

$(document).ready(() => {
  const header = $('<header>');
  header.append('<img src="logo.png" alt="Logo">'); // Adjust logo path as needed
  header.append('<h1>Holberton Dashboard</h1>');
  $('body').prepend(header);
  console.log('Init header');
});
