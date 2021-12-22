function checkSledJump(heights) {
  if(heights.length < 2) return false;
  let max = 0;
  let min = 999;
  let mid = Math.floor(heights.length/2);

  for(let i=0;i<=mid;i++){
    if(heights[i] > max) max = heights[i]
  }
  
  for(let i=mid+1;i<heights.length;i++){
    if(heights[i] >= max || heights[i] >= heights[i-1]) {
      return false;
    }
  }
  return true;
}

console.log(checkSledJump([1, 2, 3, 2, 1])) // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta
            // i
console.log(checkSledJump([2, 4, 4, 6, 2])) // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])) // false: sólo sube
checkSledJump([1, 2, 3]) // false: sube y baja y sube... ¡no vale!