const arr  = ['abc', 'abc', 'd', 'd', 'e']
const finalObj = {}
for(let item of arr){
    if(!finalObj[arr]){
        finalObj[item] = true
    }
}

const keys =Object.keys(finalObj)
console.log(keys);
