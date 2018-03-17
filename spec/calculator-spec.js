import { Calculator } from './../src/Calculator.js';

describe('Age Calculator', function() {

  it('should convert age in years into seconds ', function() {
    let newCalculator = new Calculator();
    expect(newCalculator.GetAgeInSeconds(20)).toEqual(630720000);
  });
});
