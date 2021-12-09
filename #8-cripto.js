function maxProfit(prices) {
  let [i, j] = [0, prices.length];
  let [min, max] = [9999999999, 0];
  while( i <= j ) {
    if(prices[i] <= min){
      min = prices[i]
    }
    else if(prices[j] > max){
      max = prices[j]
    }
    i = i+1;
    j = j-1;
  }
  return (max - min) > 0 ? max - min : -1;
}
            
const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge)  // -> -1 (no hay ganancia posible)