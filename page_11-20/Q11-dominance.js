function maxDominance(arr) {
  
    arr.sort((a,b) => b-a);
    let arr2 = arr.splice(Math.floor(arr.length/2), arr.length);
    
    let sum = 0;
    for(var i=0; i<arr2.length; i++) {
      sum += arr[i] + (-1 * arr2[i]);
    }
    return sum;
    
  }
  
  console.log(maxDominance([4,1,5,8,6,2]));