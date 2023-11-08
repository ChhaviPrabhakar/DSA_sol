function soldiersRearrangement(S) {
  
    let onesCount = S.split('1').length-1;
    let zerosCount = S.length - onesCount;
    
    return onesCount == zerosCount ? 0 : 1;
    
  }
  
  console.log(soldiersRearrangement('0011'));