import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpaceTraveler from './../src/galactic-age.js';


$(document).ready(function () {
  $("form#space-age").submit(function(event)  {
    event.preventDefault();
    const ageEarth = parseInt($("#current-age").val());
    const lifeExpectancy = parseInt($("#life-expectancy").val());
    let msFrizzle = new SpaceTraveler(ageEarth, lifeExpectancy);
    $("#ageEarth").text(ageEarth);
    $("#lifeExpectancy").text(lifeExpectancy);
  });
});