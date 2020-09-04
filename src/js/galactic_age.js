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

}