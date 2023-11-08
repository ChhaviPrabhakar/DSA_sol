function burgerDistribution(num) {
  
    num -= 10;
    if(num >= 0 && num%10 == 0) {
      return true;
    } else {
      return false;
    }
    
  }
  
  console.log(burgerDistribution(-10));
  console.log(burgerDistribution(18));