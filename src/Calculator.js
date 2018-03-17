/* eslint-disable no-unused-vars */
export class Calculator {

  GetAgeInSeconds(age){
    return (age * 365 * 24 * 60 * 60);
  }


  GetAgeInMercuryYears(age){
    return (Math.round(age/0.24));
  }


  GetAgeInVenusYears(age){
    return (Math.round(age/0.62));
  }


  GetAgeInMarsYears(age){
    return (Math.round(age/1.88));
  }





}
/* eslint-enable no-unused-vars */
