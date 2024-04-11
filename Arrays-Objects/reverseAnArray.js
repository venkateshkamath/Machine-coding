const arr = [1,4,2,7, 14, 50, 21]
let start = 0;
let end = arr.length -1;

function swap(startIndex, endIndex){
    let temp = arr[startIndex]
    arr[startIndex] = arr[endIndex]
    arr[endIndex] = temp;
}

while(start<end){
    swap(start,end)
    end--;
    start++;
}

console.log(arr)