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
    $("#subBtn").hide();
    $("#tryAgain").show();
  } 
  
});

$("#tryAgain").click(function(){
  $("#galactic-age-form")[0].reset();
  $("#subBtn").show();
  $("#tryAgain").hide();
  $("#output").text("")
  galacticAge.userAge = 0
});

function displayAge (planet) {

  $("#output").append(`<p> Your age on ${planet} would be: <span class="planetAge">${galacticAge[planet]().toString()}</span></p>`);
}





