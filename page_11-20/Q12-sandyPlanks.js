function sandyPlanks(S) {
  
    let str = '';
    for(var i=0; i<S.length; i++) {
      if(S[i] != S[i+1]) {
        str += S[i];
      }
    }
    
    let map = new Map();
    for(let char of str) {
      map.set(char, (map.get(char) || 0) +1);
    }
    
    return Math.min(map.get('B'), map.get("W")) || 0;
    
  }
  
  console.log(sandyPlanks('WWBBBBBWW'));