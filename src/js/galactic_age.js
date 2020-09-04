export default class GalacticAge {
  constructor(userAge){
    this.userAge = userAge
  }

  mercury() {    
    return parseInt((this.userAge*365)/(365*.24))
  }

}