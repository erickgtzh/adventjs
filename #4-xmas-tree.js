function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  let xmasTree = '\n';
  let turronWidth = 1;
  for(let i = 0; i < height; i++){
    
    for(let j = 0; j < height - 1 - i; j++){
      xmasTree = xmasTree + '_';
    }
    
    for(let j = 0; j < turronWidth; j++){
      xmasTree = xmasTree + '*';
    }
    
    for(let j = 0; j < height - 1 - i; j++){
      xmasTree = xmasTree + '_';
    }    

    turronWidth += 2;
    xmasTree = xmasTree + '\n';
  }
  for(let j = 0; j < 2; j++){
  xmasTree = xmasTree + '_'.repeat(height - 1) + '#'  + '_'.repeat(height - 1) + '\n';
       }
  return xmasTree.trim();
}

console.log(createXmasTree(5))

// console.log('   *   ')
// console.log('  ***  ')
// console.log(' ***** ')
// console.log('*******')
