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
      expect(galacticAge.yearsLeft("mercury",71)).toEqual(87)
      expect(galacticAge.yearsLeft("venus",71)).toEqual(33)
      expect(galacticAge.yearsLeft("mars",71)).toEqual(11)
      expect(galacticAge.yearsLeft("jupiter",71)).toEqual(1.77)
    });

    test('6 should return how many years over life exp. if older', () => {
      galacticAge = new GalacticAge(100);
      expect(galacticAge.yearsLeft("mercury",71)).toEqual(120)
      expect(galacticAge.yearsLeft("venus",71)).toEqual(46)
      expect(galacticAge.yearsLeft("mars",71)).toEqual(15)
      expect(galacticAge.yearsLeft("jupiter",71)).toEqual(2.45)
    });




});