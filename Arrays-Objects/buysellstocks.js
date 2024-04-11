const prices = [7,6,4,3,1, 12,6]
let min  =  prices[0]
let profit = 0;
for(let i = 1; i<prices.length; i++){
    if(prices[i]>min)
    profit = Math.max(profit, prices[i]-min);
   if(prices[i]<min){
    min = prices[i];
    
}

}

console.log(profit)