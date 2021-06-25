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
    $("#ageEarth").text(ageEarth);
    $("#lifeExpectancy").text(lifeExpectancy);
    let msFrizzle = new SpaceTraveler(ageEarth, lifeExpectancy);

    $("#ageMercury").text(msFrizzle.mercuryCalc());
    $("#mercuryLifeExpectancy").text(msFrizzle.mercuryLife());
    $("#lifeLeftMercury").text(msFrizzle.mercuryLifeToLive());

    $("#ageVenus").text(msFrizzle.venusCalc());
    $("#venusLifeExpectancy").text(msFrizzle.venusLife());
    $("#lifeLeftVenus").text(msFrizzle.venusLifeToLive());

    $("#ageMars").text(msFrizzle.marsCalc());
    $("#marsLifeExpectancy").text(msFrizzle.marsLife());
    $("#lifeLeftMars").text(msFrizzle.marsLifeToLive());

    $("#ageJupiter").text(msFrizzle.jupiterCalc());
    $("#jupiterLifeExpectancy").text(msFrizzle.jupiterLife());
    $("#lifeLeftJupiter").text(msFrizzle.jupiterLifeToLive());

    $("form#space-age").trigger("reset");


  });
});