const { log } = require('console');
const http=require('http');
const PORT=2500;
const server=http.createServer((req,res)=>{
res.write("Welcome to Node Server");
res.end("Request has been ended");
})
server.listen(PORT,()=>{
    console.log("server is running on"+PORT);
})