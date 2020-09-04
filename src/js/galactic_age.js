export default class GalacticAge {
  constructor(userAge){
    this.userAge = userAge;
  }

  mercury() {    
    return parseInt((this.userAge*365)/(365*.24));
  }

  venus() {
    return parseInt((this.userAge*365)/(365*.62));
  }

  mars() {
    return parseInt((this.userAge*365)/(365*1.88 ));
  }

  jupiter() {
    return parseInt((this.userAge*365)/(365*11.86 ));
  }

  yearsLeft(planet,ageExpectancy) {
    let yearsLeft; 
    switch (planet) {
    case ("mercury"):
      yearsLeft = parseInt((ageExpectancy*365)/(365*.24)-(this.userAge*365)/(365*.24));
      break;        
    case ("venus"):
      yearsLeft = parseInt((ageExpectancy*365)/(365*.62)-(this.userAge*365)/(365*.62));   
      break;     
    case ("mars"):
      yearsLeft = parseInt((ageExpectancy*365)/(365*1.88)-(this.userAge*365)/(365*1.88));   
      break;     
    case ("jupiter"):
      yearsLeft = parseFloat(((ageExpectancy*365)/(365*11.86)-(this.userAge*365)/(365*11.86)).toFixed(2));    
      break;
    }    
    if (this.userAge > ageExpectancy) {
      return Math.abs(yearsLeft);
    } else {
      return yearsLeft;
    }
  }
}