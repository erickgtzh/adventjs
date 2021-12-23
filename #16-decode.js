function decodeNumbers(symbols) {
  let arr = [];
  let cant = 0;
  for(let i=0;i<symbols.length;i++){
    if(symbols[i] === '.'){
      arr = [...arr, 1];
    }else if(symbols[i] === ','){
      arr = [...arr, 5];
    }else if(symbols[i] === ':'){
      arr = [...arr, 10];
    }else if(symbols[i] === ';'){
      arr = [...arr, 50];
    }else if(symbols[i] === '!'){
      arr = [...arr, 100];
    }else{
      return NaN;
    }
  }
  
  for(let i=0;i<arr.length;i++){
     if(arr[i] < arr[i + 1]){
       cant = cant - arr[i]
     }else{
       cant = cant + arr[i]
     }
  }
  return cant;
}

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN