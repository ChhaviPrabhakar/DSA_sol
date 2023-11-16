function candyRecipes(R,S) {
  
    let map = new Map();
    for(let char of S) {
      map.set(char, (map.get(char) || 0) +1);
    }
    
    let count = 0;
    for(let char of R) {
      if(!map.has(char) && count == 0) {
        return 'YES';
      }
      if(map.has(char)) {
        map.set(char, map.get(char) -1);
        count++;
      } else {
        return 'NO';
      }
      
      if(map.get(char) === 0) {
        map.delete(char);
      }
    }
    return 'YES';
    
  }
  
  console.log(candyRecipes('paradise', 'diapers'));