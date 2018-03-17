import { Calculator } from './../src/Calculator.js';

let newCalculator = new Calculator();
describe('Age Calculator', function() {

  it('should convert age in years into seconds ', function() {
  expect(newCalculator.GetAgeInSeconds(20)).toEqual(630720000);
  });

  it('should convert human age into Mercury years', function(){
    expect(newCalculator.GetAgeInMercuryYears(20)).toEqual(83);
  });

  it('should convert human age into Mercury years', function(){
    expect(newCalculator.GetAgeInVenusYears(20)).toEqual(32);
  });

  it('should convert human age into Mars years', function(){
    expect(newCalculator.GetAgeInMarsYears(20)).toEqual(11);
  });

  it('should convert human age into Jupiter years', function(){
    expect(newCalculator.GetAgeInJupiterYears(20)).toEqual(2);
  });



  // it('should calculate the difference between birthdate and current date and show the result in seconds', function() {
  // expect(newCalculator.GetDifferenceBetweenDatesInSeconds())
  // })
});
