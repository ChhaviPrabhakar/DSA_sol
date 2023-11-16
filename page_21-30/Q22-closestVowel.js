function closestVowel(S) {
  
    let count = 1;
    for(let char of S) {
      if(char == 'c') {
        count *= 2;
      } else if(char == 'g') {
        count *= 2;
      } else if(char == 'l') {
        count *= 2;
      } else if(char == 'r') {
        count *= 2;
      }
    }
    return count;
    
  }
  
  let s1 = 'aeiou';
  let s2 = 'abcde';
  console.log(closestVowel(s2));