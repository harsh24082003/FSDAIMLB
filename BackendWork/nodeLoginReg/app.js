const http=require('http');
const fs=require('fs').promises;
const PORT=3001;
const server=http.createServer((req,res)=>{
    // res.end("welcome to Node server");
    if(req.url=='/register' && req.method=="POST"){
        let body='';
        let arr=[];
        req.on('data',(chunk)=>{
            body+=chunk;
        });

        req.on('end',async ()=>{
            try{
                console.log(body);
                const {name,email,password}=JSON.parse(body);  //parse convert into JSON object
                console.log(name);
                const data=await fs.readFile('student.json','utf-8');
                arr=JSON.parse(data);
                const status=arr.find((ele)=>ele.email==email);
                if(status){
                    return res.end(JSON.stringify({message:"User already exists"}));
                }
                else{
                    arr.push({name,email,password});
                    await fs.writeFile('student.json',JSON.stringify(arr));
                    res.end(JSON.stringify({message:"Successfully Registered"}));
                }
            }catch(err){
                console.log("Error while writing the data in registration"+err);
            }
        });

        res.end(JSON.stringify({message:"Successfully Registered"}));
    }

});

server.listen(PORT,()=>{


    console.log(`Server is running on port ${PORT}`);
});