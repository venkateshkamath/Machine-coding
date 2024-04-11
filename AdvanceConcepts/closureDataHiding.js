function counter (){
    let cnt=0;
    return function(){
        cnt++
        console.log(cnt);
        
    }

}

const count1 = counter()
count1()
count1()

const count2 = counter()
count2()