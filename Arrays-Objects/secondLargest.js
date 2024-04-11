const arr = [1, 3, 5, 2, 80, 44, 60, 90, 100, 100];

function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] == largest) {
      continue;
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  console.log(secondLargest);
}

findSecondLargest(arr);
