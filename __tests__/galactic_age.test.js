import GalacticAge from '../src/js/galactic_age.js';

describe('Galactic Age', () => {
    let galacticAge;

    beforeEach(() => {
      galacticAge = new GalacticAge(50);
    });  

  test('1 should return users age in Mercury years', () => {
      expect(galacticAge.mercury()).toEqual(208)
    });

  test('2 should return users age in Venus years', () => {
      expect(galacticAge.venus()).toEqual(80)
    });

  test('3 should return users age in Mars years', () => {
      expect(galacticAge.mars()).toEqual(26)
    });

  test('4 should return users age in Jupiter years', () => {
      expect(galacticAge.jupiter()).toEqual(4)
    });

    test('5 should return how many years user has left to live', () => {
      expect(galacticAge.yearsLeft(galacticAge.jupiter)).toEqual(2)
    });




});