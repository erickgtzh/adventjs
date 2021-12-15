function getMinJump(obstacles) {
  // ¡No olvides compartir tu solución en redes!
  let obsSorted = [];
  for(let i = 0; i < Math.max(...obstacles); i++){
    obsSorted[i] = '.';
  }
  
  for(let i = 0; i < Math.max(...obstacles); i++){
    if(obstacles[i]){
      obsSorted[obstacles[i]] = 'X';
    }
  }

  let jumps = 1;
  let i = 0;
  
  for(i = 0; i < obsSorted.length; i = i + jumps){
    if(obsSorted[i] == 'X'){
      jumps = jumps + 1;
      i = 0;
    }
  }
  return jumps;
}

const obstacles = [2, 4, 6, 8, 10]
getMinJump(obstacles) // -> 7