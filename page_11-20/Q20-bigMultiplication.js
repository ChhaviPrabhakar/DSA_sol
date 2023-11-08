function bigMultiplication(N,K) {
  
    let i = 0;
    while(N%2 === 0) {
      i++;
      N = N/2;
    }
    
    return Math.ceil((K-i)/4);
    
  }
  
  console.log(bigMultiplication(42424,8923897));