const nums1 = [1,4,5,6, 9, 11, 13]
const nums2 = [5,5,7,10]
const m  = nums1.length;
const n = nums2.length;
let i = 0;
let j = 0;
const res = Array(n+m).fill(0);


let k = 0;
while(i<m && j<n){
    if(nums1[i]<nums2[j]){
        res[k] = nums1[i]
        k++;
        i++;
    }else {
        res[k] = nums2[j]
        k++;
        j++;
    }
}

while(j<n){
    res[k] = nums2[j]
    j++;
    k++
}

while(i<m){
    res[k] = nums1[i]
    i++;
    k++
}

console.log(res)