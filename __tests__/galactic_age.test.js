import GalacticAge from '../src/js/rectangle.js';

describe('Galactic Age', () => {
    let galacticAge;
    beforeEach(() => {
      galacticAge = new GalacticAge();
    });
  

  test('should return users age in Mercury years', () => {
      expect(GalacticAge.mercury(50)).toEqual(207)
  });




});