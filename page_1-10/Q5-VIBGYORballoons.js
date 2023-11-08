function sharpenerBalloon(arr) {
  
    let findArr = new Set([1,2,3,4,5,6,7]);
    let set = new Set();
    
    let count = 0;
    for(let num of arr) {
      if(findArr.has(num) && !set.has(num)) {
        set.add(num);
      }
      count++;
      if(set.size == 7) {
        break;
      }
    }
    
    return count;
    
  }
  
  console.log(sharpenerBalloon([11,2,4,6,8,10,1,3,5,7,9]));