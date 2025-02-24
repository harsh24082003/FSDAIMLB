const fs=require('fs').promises;
const http=require('http');
const PORT=2500;
const server=http.createServer(async(request,response)=>{
    response.setHeader("Content-type","text/html");
    if(request.url=='/home' && request.method=="GET"){
        const data=await fs.readFile('home.html',{encoding:'utf-8'});
        const studentData=await fs.readFile('data.json');
        response.write(studentData);
        response.end(data);
    }
});
server.listen(PORT,()=>{
    console.log("Server is running on"+PORT);
})