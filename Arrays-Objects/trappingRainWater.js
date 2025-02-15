const arr = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
function trapRainWater(arr) {
  let totalWater = 0;
  let mL = 0,
    mR = 0;
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    if (arr[start] <= arr[end]) {
      if (arr[start] >= mL) {
        //If element is greater or equal
        mL = arr[start];
      } else {
        totalWater += mL - arr[start];
      }
      start++;
    } else {
      if (arr[end] >= mR) {
        mR = arr[end];
      } else {
        totalWater += mR - arr[end];
      }
      end--;
    }
  }
  console.log(totalWater);
}

trapRainWater(arr);
