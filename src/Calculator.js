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
    let date1 = new Date(currentDate);
    let date2 = new Date(birthdate);
    let diffInSeconds = (date2.getTime() - date1.getTime())/1000
    return diffInSeconds;
  }

  GetDifferenceBetweenDatesInYears(currentDate, birthdate){
    let date1 = new Date(currentDate);
    let date2 = new Date(birthdate);
    let diffInYears = Math.round((date2.getTime() - date1.getTime())/(1000*60*60*24*365))
    return diffInYears;
  }


  GetYearsLeftOnEarth(age){
    let lifeExpect = 79
    let expectedLifeInYears = lifeExpect - age;
    return expectedLifeInYears;
    }


  // GetYearsLeftOnEarth(age){
  //   let lifeExpect = 79;
  //   let userAge = this.GetDifferenceBetweenDatesInYears()
  //   let expectedLifeInYears = parseInt(lifeExpect - userAge);
  //   return expectedLifeInYears;
  //   }







}



/* eslint-enable no-unused-vars */
