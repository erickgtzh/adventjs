function isValid(letter) {
  let cont = 0;
  let word = '';
  let conditions = ['{','}','[',']'];
  letter.split('').forEach(char => {
    if(char === '('){
      word = '';
      cont += 1;  
    }else if(char === ')'){
      if(word.length <= 0) {
        cont = 1;
        return false;
      }
      if(conditions.some(c => word.includes(c))){
        return false;
      }
      cont -= 1;
    }else{
      word = word + char;
    }
  })  
  return cont % 2 === 0;
}

const letter = "(a)";
isValid(letter);

