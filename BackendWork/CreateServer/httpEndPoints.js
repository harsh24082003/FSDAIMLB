const http=require('http');
const fs=require('fs').promises;
const server=http.createServer(async(req,res)=>{
    res.setHeader("Content-type","text/html");
    res.write("Welcome to Node JS Server");
    // console.log(Object.keys(res));
    // console.log(Object.keys(req));
    // console.log(req.statuscode);
    
    console.log(req.method+" "+req.url);
    if(req.url=="/data" && req.method=="GET"){
        res.end("<h2>Hii, I am available at this end point</h2>");
    }
    else if(req.url=="/welcome" && req.method=="GET"){
        const weldata=await fs.readFile('welcome.html',{encoding:'utf-8'});
        
        res.end(weldata);
    }
    else{
        const data=await fs.readFile('error.html',{encoding:'utf-8'});
        
        res.end(data);
    }

    // if(req.url=="/msg" && req.method=="POST"){
    //     res.end("<h2>Hii, I am at POST endpoint</h2>");
    // }

});
server.listen(2500,()=>{
    console.log("Server is running on:"+2500);
})