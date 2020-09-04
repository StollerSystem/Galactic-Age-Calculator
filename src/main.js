import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAge from './js/galactic_age.js';

let galacticAge = new GalacticAge(0);

$("#galactic-age-form").submit(function(event) {
  event.preventDefault();  
  if (!($("#ageInput").val() > 0)) {
    alert("Please enter your age! (in numbers)");
  } else {
    galacticAge.userAge = parseInt($("#ageInput").val());
    displayAge($("#planet").val());
    attachListener();
    $("#subBtn").hide();
    $("#tryAgain").show();
  } 
  
});

$("#tryAgain").click(function(){
  //$("#galactic-age-form")[0].reset();
  $("#subBtn").show();
  $("#tryAgain").hide();
  $("#output").text("");
  galacticAge.userAge = 0;
});

function displayAge (planet) {
  let planetCap = planet.charAt(0).toUpperCase() + planet.slice(1);
  $("#output").append(`<p> Your age on <strong>${planetCap}</strong> would be:<br> <span class="planetAge">${galacticAge[planet]().toString()}</span></p><p class="smallP">(Click <span id="clickP">here</span> to see how many years you have left to live on ${planetCap})<p>`);
}

function attachListener() {
  $("#clickP").click(function(){
    let ageExpectancy = 71;
    let planet = $("#planet").val();
    let planetCap = planet.charAt(0).toUpperCase() + planet.slice(1);    
    $(".smallP").remove();
    if (galacticAge.userAge > ageExpectancy) {
      $("#output").append(`You have lived about ${galacticAge.yearsLeft(planet,ageExpectancy)} years OVER the average life expectancy on <strong>${planetCap}.</strong> Wow!`);      
    } else {
      $("#output").append(`You have about ${galacticAge.yearsLeft(planet,ageExpectancy)} years left to live on <strong>${planetCap}</strong>`);
    }
  });
}





