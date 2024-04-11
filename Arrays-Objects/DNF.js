const arr = [0,1,0,1,0,1,1,1,1, 0];

//i and j 
function swap(arr, i , j){
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp
}
let i =0;
let j = arr.length - 1;
while(i<j){
    if(arr[i]==0){
        i++
    }
    else if(arr[i]==1){
        swap(arr, i, j);
        j--;
    }
}

console.log(arr)
