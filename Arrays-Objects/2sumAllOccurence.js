function sumOfAllOccurence(arr, target) {
  let count = 0;
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    if (arr[start] + arr[end] > target) {
      end--;
    } else if (arr[end] + arr[start] < target) {
      start++;
    } else {
      //they both are equal
      if (arr[start] === arr[end]) {
        //end is equal to start
        let freq = end - start + 1;
        count += Math.floor((freq * (freq - 1)) / 2);
        return count
      } else {
        let occ_s = 0,
          occ_e = 0;
        let startEle = arr[start],
          endEle = arr[end];
        while (startEle === arr[start]) {
          start++;
          occ_s++;
        }
        while (endEle === arr[end]) {
          end--;
          occ_e++;
        }

        count = count + occ_e * occ_s;
      }
    }
  }
  return count;
}

const arr = [1,2,2,3,3,4,4,4,5,6,6,6];
const target =8;
const res = sumOfAllOccurence(arr, target);
console.log(res);
