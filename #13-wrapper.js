function wrapGifts(gifts) {
  if(!gifts) return [];
  let asterisk = 0; 
  gifts.some((val, index) => {
    gifts[index] = '*' + gifts[index] + '*';
    asterisk = gifts[index].length;
  })
  // gifts = '*'.repeat(asterisk) + gifts + '\n' + '*'.repeat(asterisk);
  gifts = ['*'.repeat(asterisk) ,...gifts, '*'.repeat(asterisk)];
  return gifts;
}

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/