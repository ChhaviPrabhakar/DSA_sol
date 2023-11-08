function canReplaceJack(M, N) {
  
    if (M % 2 === 0 || N % 2 === 0) {
      return 'NO';
    } else {
      return 'YES';
    }
    
  }
  
  console.log(canReplaceJack(2,2));