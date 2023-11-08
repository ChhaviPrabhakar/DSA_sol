function weirdFunction(N) {
  
    let i = 1, j = N, count = 0, temp = 0;
    while(i<=N && j>=1) {
      if(i%5 == 0) {
        temp = Math.pow(i,j) % 10000000007;
        while(temp%5 == 0) {
          count++;
          temp /= 5;
        }
      }
      i++, j--;
    }
    return count;
    
  }
  
  console.log(weirdFunction(12));