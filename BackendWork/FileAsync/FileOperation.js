const fs=require('fs');

function dataWritecb(){
fs.writeFile("data.pdf","Hello writing a pdf file",(err)=>{
    if(err){
        console.log("Error while writing in file"+err);
    }
    console.log("Data is written successfully");
});
console.log("Resources closed");
}

function datareadcb(){
fs.readFile("data.pdf",{encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log("Error while reading the file:"+err);
    }
    console.log(data);
});
}

const obj={dataWritecb,datareadcb};
module.exports=obj;