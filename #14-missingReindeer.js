function missingReindeer(ids) {
  let missed = {};
  for(let i=0;i < ids.length;i++){
    missed[ids[i]] = ids[i];
  }

  for(let i=0;i < ids.length + 1;i++){
    if(!missed[i] && missed[i] !== 0){
      return i;
    }
  }
}

// missingReindeer([0, 2, 3]) // -> 1
                    
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4

missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8