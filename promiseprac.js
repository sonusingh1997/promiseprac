// const sleep=(time)=>{
//     return new Promise((resolve,reject)=>{
//         let name='parkash'
//         if(name==="parkash"){
//             setTimeout(()=>{ 
//               resolve("it's time to sleep"); 
//              },time)
//         }
//         else{
//             reject();
//         }
//     })
// }
// sleep(5000).then((resolve)=>{
//     console.log(resolve)
// }).catch(err=>{
//     throw new Error("name does not match")
// })


const mypromises=new Promise((resolve,reject)=>{
     let x=11;
     if(x===10){
        resolve();
     }
     else{
        reject();
     }
})
mypromises.then((resolve)=>{
    console.log("promise resolve")
})
.catch(err=>{
    throw new Error("promise rejected");
})
