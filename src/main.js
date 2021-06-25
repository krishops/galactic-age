import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpaceTraveler from './../src/galactic-age.js';


$(document).ready(function () {
  $("form#space-age").submit(function(event)  {
    event.preventDefault();
    // const ageEarth = $("#current-age").parseInt();
    // const lifeExpectancy = $("#life-expectancy").parseInt();
    // let msFrizzle = new SpaceTraveler(ageEarth, lifeExpectancy);
    // mercuryCalc(msFrizzle);
  });
});