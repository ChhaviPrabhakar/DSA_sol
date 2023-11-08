function paddingZeros(N,p) {
  
    const padding = N+2 * p;
    const zeros = (padding * padding) - (N * N);
    return zeros;
    
  }
  
  console.log(paddingZeros(3,1));