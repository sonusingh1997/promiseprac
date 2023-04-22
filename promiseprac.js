const sleep=(time)=>{
    return new Promise((resolve,reject)=>{
        let name='parkash'
        if(name==="parkash"){
            setTimeout(()=>{ 
              resolve("it's time to sleep"); 
             },time)
        }
        else{
            reject();
        }
    })
}
sleep(5000).then((resolve)=>{
    console.log(resolve)
}).catch(err=>{
    throw new Error("name does not match")
})