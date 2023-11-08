function lineSegments(N,M) {
  
    let map = new Map();
    let arr = [];
    for(var i=1; i<=N; i++) {
      for(var j=1; j<=M; j++) {
        map.set(`${i}, ${j}`);
        arr.push([i,j]);
      }
    }
    
    let count = 0;
    for(let i=0; i<arr.length-1; i++) {
      for(let j=i+1; j<arr.length; j++) {
        let x = (arr[i][0] + arr[j][0]) / 2;
        let y = (arr[i][1] + arr[j][1]) / 2;
        
        if(map.has(`${x}, ${y}`)) {
          count++;
        }
      }
    }
    return count;
    
  }
  
  console.log(lineSegments(6,7));