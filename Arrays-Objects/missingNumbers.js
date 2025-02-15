let result = [];
function disappearedNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    let x = Math.abs(arr[i]);
    if (arr[x - 1] > 0) {
      arr[x - 1] *= -1;
    }
  }
  arr.forEach((ele, index) => {
    if (ele > 0) {
      result.push(index + 1);
    }
  });
  return result;
}

const arr = [4, 2, 3, 7, 8, 2, 1, 3];

disappearedNumbers(arr);
console.log(result);
