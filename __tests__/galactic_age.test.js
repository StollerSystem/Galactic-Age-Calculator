import GalacticAge from '../src/js/galactic_age.js';

describe('Galactic Age', () => {
    let galacticAge;
    beforeEach(() => {
      galacticAge = new GalacticAge(50);
    });  

  test('should return users age in Mercury years', () => {
      expect(galacticAge.mercury()).toEqual(208)
  });

  test('should return users age in Venus years', () => {
      expect(galacticAge.venus()).toEqual(80)
  });

  test('should return users age in Mars years', () => {
    expect(galacticAge.mars()).toEqual(26)
});




});