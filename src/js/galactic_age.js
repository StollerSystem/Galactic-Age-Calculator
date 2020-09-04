export default class GalacticAge {
  constructor(userAge){
    this.userAge = userAge
  }

  mercury() {    
    return parseInt((this.userAge*365)/(365*.24))
  }

  venus() {
    return parseInt((this.userAge*365)/(365*.62))
  }

  mars() {
    return parseInt((this.userAge*365)/(365*1.88 ))
  }

  jupiter() {
    return parseInt((this.userAge*365)/(365*11.86 ))
  }

  yearsLeft(planet,ageExpectancy) {
    switch (planet) {
      case ("mercury"):
        return parseInt((ageExpectancy*365)/(365*.24)-(this.userAge*365)/(365*.24))        
      case ("venus"):
        return parseInt((ageExpectancy*365)/(365*.62)-(this.userAge*365)/(365*.62))        
      case ("mars"):
        return parseInt((ageExpectancy*365)/(365*1.88)-(this.userAge*365)/(365*1.88))        
      case ("jupiter"):
        return parseFloat(((ageExpectancy*365)/(365*11.86)-(this.userAge*365)/(365*11.86)).toFixed(2))    
    }
  }
}