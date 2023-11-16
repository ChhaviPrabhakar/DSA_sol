function saveTokyo(S) {
  
    for(let i=0; i<S.length; i++) {
      if(S[i] == S[i+1]) {
        return 'YES';
      }
    }
    return 'NO';
    
  }
  
  console.log(saveTokyo('LRRL'));