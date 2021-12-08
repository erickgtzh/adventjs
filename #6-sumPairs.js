function sumPairs(numbers, result) {
  for(let i=0;i<numbers.length;i++){
    for(let j=numbers.length-1;j>=0;j--){
       if(i<j && numbers[i] + numbers[j] === result){
         return [numbers[i], numbers[j]];
       } 
    }
  }
  return null
}

console.log(sumPairs([6, 7, 1, 2], 8))

