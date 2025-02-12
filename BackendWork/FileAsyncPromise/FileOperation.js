const fs=require('fs').promises;
const promise=fs.writeFile("data.txt","Hello, writing data through FS promises module",{encoding:'utf-8'});
// console.log(promise);
promise.then(()=>{
    console.log("data written successfully");
}).catch(err=>{
    console.log("Error is"+err);
}).finally(msg=>{console.log("Finally done")})

const promise1=fs.readFile("data.txt",{encoding:'utf-8'});
promise1.then((data)=>{
    console.log("Data successfully read.",data);
}).catch(err=>{
    console.log("Error is"+err);
}).finally(msg=>{console.log("Finally done")})