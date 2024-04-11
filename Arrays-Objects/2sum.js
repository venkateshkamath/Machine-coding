const nums = [7,3,14, 2,1];
const target = 9;

function twoSumNaive() {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // console.log(nums[i], nums[j])
      const sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
}

function twoSumDif(nums, target) {
  // nums, target
  let end = nums.length - 1;
  let start = 0;
  nums = nums.map((ele, i) => [ele, i]);
  while (start < end) {
    // console.log(nums[end])
    let sum = nums[end][0] + nums[start][0];
  
    if (target == sum) {
  
      return [nums[start][1], nums[end][1]];
    } else if (target > sum) {
      end--;
    } else {
      start++;
    }
  }
}



function twoSum(nums, target){
    const lookUp  ={}
   for(let i =0; i <nums.length; i++){
    const contrary = Math.abs(target-nums[i]);

 
    if(lookUp[contrary] !==undefined){
   return [lookUp[contrary], i]
    }else {
        lookUp[nums[i]] = i
    }
   }
}



const res1 = twoSumNaive();
const res2 = twoSumDif(nums, target);
const res3 = twoSum(nums, target)
console.log("res1", res1);
console.log("res2", res2);
console.log(res3);
