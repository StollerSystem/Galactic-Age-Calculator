export default class GalacticAge {
  constructor(userAge){
    this.userAge = userAge
  }

  mercury() {
    let ageInDays = this.userAge*365
    let mercuryYear = 365*.24
    return parseInt(ageInDays/mercuryYear)
  }

}