function sleptWithRaman(N,K,S) {
  
    let counter = 0;
    let count = 0;
    
    for(let num of S) {
      if(num == 0) {
        counter++;
      } else {
        counter = 0;
      }
      
      if(counter == K) {
        count++;
        counter = 0;
      }
    }
    return count;
    
  }
  
  console.log(sleptWithRaman(11,3,'00100000001'));