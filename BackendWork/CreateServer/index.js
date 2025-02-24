const { log } = require('console');
const http=require('http');
const PORT=2500;
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','applicaton/json');
res.write("<h1>Welcome to Node Application</h1>\n");
const obj={
    "name:":"Rahul",
    "banch":"CSE AIML"
}
res.end(JSON.stringify(obj));
})
server.listen(PORT,()=>{
    console.log("server is running on"+PORT);
})