function codingProblem(arr) {
  
    let set = new Set(arr);
    return Math.floor(set.size/2);
    
  }
  
  console.log(codingProblem([4,5,5,5]));