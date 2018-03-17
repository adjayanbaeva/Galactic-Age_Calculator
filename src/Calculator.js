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


  GetAgeInJupiterYears(age){
    return (Math.round(age/11.86));
  }


  GetDifferenceBetweenDatesInSeconds(currentDate, birthdate){
    var date1 = new Date(currentDate);
    var date2 = new Date(birthdate);
    var diffInSeconds = (date2.getTime() - date1.getTime())/1000
    return diffInSeconds;
  }
  


}



/* eslint-enable no-unused-vars */
