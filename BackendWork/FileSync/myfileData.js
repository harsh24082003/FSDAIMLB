const fs=require('fs');

function myWriteFile(){
try{
console.log("Data before writing");
fs.writeFileSync("data.txt","Data is written by nodejs");  //writing data in new file, it creates file also
console.log("Data written successfully");
}catch(err){
    console.log("Error in writing the data"+err);
}
}

function myReadFile(){
try{
console.log("Data before reading");

const rd=fs.readFileSync("data.txt",{encoding:'utf-8'});         //reads data from already existing file
console.log(rd);
console.log("Data after reading");
//rather than encoding we can use console.log(rd.toString());
}catch(err){
    console.log("Error in reading the data"+err);
}}

function myAppendFile(){
try{
console.log("Before append");
fs.appendFileSync("data.txt",". This line is appended later");
console.log("After append");

const r1=fs.readFileSync("data.txt");
console.log(r1.toString());

// fs.unlinkSync("data.txt");
}catch(err){
    console.log("Error in appending the data"+err);
}}


module.exports={
    myWriteFile:myWriteFile,
    myReadFile:myReadFile,
    myAppendFile:myAppendFile
};