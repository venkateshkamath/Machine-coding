async function createOrder (){
    return new Promise((res, rej)=>{
        res("Resolved")
    })
}
async function getData(){
    const result  = await createOrder();
    
    
}
getData()

