function mutation(arr) {
  for(let i=0; i<arr.length; i++){
    for (let j = 0; j < arr[i].length; j){
      if(arr[i][j] !== arr[i+1][j]) return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));