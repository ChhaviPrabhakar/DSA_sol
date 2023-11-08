function minCuts(N) {
  
    N += 1;
    return N%2 == 0 ? N/2 : N*2;
    
  }
  
  console.log(minCuts(10));

//   function minCuts(N) {
  
//     if((N+1) % 2 == 0) {
//       return (N+1)/2;
//     } else {
//       return (N+1)*2;
//     }
    
//   }