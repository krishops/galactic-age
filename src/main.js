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
    if (msFrizzle.mercuryCalc() >= msFrizzle.mercuryLife())  {
      $(".outlived").show();
      $("#lifeAfterMercury").text(msFrizzle.mercuryLifeToLive());
      $(".years-to-live").hide();
    } else {
      $("#lifeLeftMercury").text(msFrizzle.mercuryLifeToLive());
    }

    $("#ageVenus").text(msFrizzle.venusCalc());
    $("#venusLifeExpectancy").text(msFrizzle.venusLife());
    if (msFrizzle.venusCalc() >= msFrizzle.venusLife())  {
      $(".outlived").show();
      $("#lifeAfterVenus").text(msFrizzle.venusLifeToLive());
      $(".years-to-live").hide();
    } else {
      $("#lifeLeftVenus").text(msFrizzle.venusLifeToLive());
    }

    $("#ageMars").text(msFrizzle.marsCalc());
    $("#marsLifeExpectancy").text(msFrizzle.marsLife());
    if (msFrizzle.marsCalc() >= msFrizzle.marsLife())  {
      $(".outlived").show();
      $("#lifeAfterMars").text(msFrizzle.marsLifeToLive());
      $(".years-to-live").hide();
    } else {
      $("#lifeLeftMars").text(msFrizzle.marsLifeToLive());
    }

    $("#ageJupiter").text(msFrizzle.jupiterCalc());
    $("#jupiterLifeExpectancy").text(msFrizzle.jupiterLife());
    if (msFrizzle.jupiterCalc() >= msFrizzle.jupiterLife())  {
      $(".outlived").show();
      $("#lifeAfterJupiter").text(msFrizzle.jupiterLifeToLive());
      $(".years-to-live").hide();
    } else {
      $("#lifeLeftJupiter").text(msFrizzle.jupiterLifeToLive());
    }

    $("form#space-age").trigger("reset");


  });
});