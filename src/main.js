import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAge from './js/galactic_age.js';


let galacticAge = new GalacticAge(0)
$("#galactic-age-form").submit(function(event) {
  event.preventDefault();
  galacticAge.userAge = parseInt($("#ageInput").val())
  //console.log(userAge)
  //let galacticAge = new GalacticAge(userAge)
  //console.log(galacticAge.userAge)
  //console.log(galacticAge.mercury())
  //$("#output").append(`<li> Your age on Mercury: ${galacticAge.mercury().toString()}</li>`)
  displayAge($("#planet").val())


});

function displayAge (planet) {
  $("#output").append(`<li> Your age on Mercury: ${galacticAge[planet]().toString()}</li>`)
}





