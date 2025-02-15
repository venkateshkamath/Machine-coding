//Frequency of a character
const str =  "JavaScript"
const map = {}
for(let item of str){
   
   if(map[item]){
    map[item]+=1;
   }else {
    map[item]=1;
   }
    
}

console.log(map)