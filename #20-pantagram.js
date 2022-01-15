function pangram(letter) {
 // ¡No olvides compartir tu solución en redes!
  let dict = new Set()
  
  for(let word in letter){
    if(letter.toLowerCase().charAt(word) !== 'ñ'){
       dict.add((letter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").charAt(word)))
    }else{
      dict.add('nn')
    }
  }
  
  if(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'nn', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].every(el => dict.has(el))){
    return true;
  }else{
    return false;
  }
}

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false

