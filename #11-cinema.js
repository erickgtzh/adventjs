function shouldBuyFidelity(times) {
  let tot = 0;
  let porcentaje = .75;
  for(let i=0;i<times;i=i+1){
    tot = tot + porcentaje * 12;
    porcentaje = porcentaje * .75;
  }
  tot = tot + 250;
  return tot < times * 12 ? true : false;
}

shouldBuyFidelity(100) // false -> Mejor comprar tickets de un sólo uso