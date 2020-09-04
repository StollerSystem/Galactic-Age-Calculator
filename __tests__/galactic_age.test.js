import GalacticAge from '../src/js/galactic_age.js';

describe('Galactic Age', () => {
    let galacticAge;
    beforeEach(() => {
      galacticAge = new GalacticAge(50);
    });
  

  test('should return users age in Mercury years', () => {
      expect(galacticAge.mercury()).toEqual(207)
  });




});