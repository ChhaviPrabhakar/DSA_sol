function waitTime(N,M,trees) {
  
    let totalApple = 0, totalRate = 0;
    for(let i=0; i<N; i++) {
      totalApple += trees[i][0];
      totalRate += trees[i][1];
    }
    totalApple += M;
    
    let result = Math.ceil(totalApple / totalRate);
    
    for(let i=0; i<N; i++) {
      if(Math.ceil(trees[i][0] / trees[i][1]) > result) {
        result = Math.ceil(trees[i][0] / trees[i][1]);
      }
    }
    return result;
    
  }
  
  let N = 3, M = 6, trees = [[4,3],[7,4],[1,5]];
  console.log(waitTime(N,M,trees));