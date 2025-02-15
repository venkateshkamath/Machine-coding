function sum(a){
    return function (b){
     if(b) return sum(b+a)
   return a
    }
}

//infinite
const res = sum(7)(8)(6)(8)()
// (4)(5)()
console.log(res);
