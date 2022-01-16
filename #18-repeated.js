function fixFiles(files) {
 // ¡No olvides compartir tu solución en redes!
  let arr = []
  let aux = []
  
  for(let index in files) {
    if(arr[files[index]]) {
      aux.push(`${files[index]}(${arr[files[index]]})`)
      arr[files[index]] += 1
    } else {
      arr[files[index]] = 1
      aux.push(`${files[index]}`)
    }
  }
  
  return aux;
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
