function bigAddition(arr) {
  
    let result = [];
    
    for(var i=0; i<arr.length; i++) {
      let x = -1, y = -1;
      for(var j=i-1; j>=0; j--) {
        if(arr[i] < arr[j]) {
          x = j+1;
          break;
        }
      }
      
      for(var k=i+1; k<arr.length; k++) {
        if(arr[i] < arr[k]) {
          y = k+1;
          break;
        }
      }
      result.push(x+y);
    }
    return result;
    
  }
  
  console.log(bigAddition([5,4,1,3,2]));