function geeksEquality(arr) {
  
    let map = new Map();
    for(let num of arr) {
      if(map.has(num)) {
        map.set(num, map.get(num)+1);
      } else {
        map.set(num, 1);
      }
    }
    
    let max = 0;
    for(let freq of map.values()) {
      if(max < freq) {
        max = freq;
      }
    }
    
    return arr.length - max;
    
  }

  console.log(geeksEquality([1,2,2,3,3,4,4]));
