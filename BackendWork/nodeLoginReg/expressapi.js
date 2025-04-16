const express=require('express');
const fs=require('fs').promises
const cors=require('cors');
const app=express();
const port=3001;
app.use(express.json());//middleware
app.use(cors())// middleware
app.get("/",(req,res)=>{
    try{
//res.send("<h2>Welcome to Express Server</h2>");
res.status(200).json({msg:"This is defualt end point"});
    }catch(err){
        res.status(500).json({msg:err});
    }
})


app.post("/register",async(req,res)=>{
    try{
        let arr=[];

        const {name,email,password}=req.body;
        console.log(name+email+password);
        const data=await fs.readFile('student.json',{encoding:'utf-8'});
        arr=JSON.parse(data);
        const status=arr.find((ele)=>ele.email==email);
        if(status){
            return res.status(203).json({message:"Email is already registerd"});
        }
        else{
            arr.push({name,email,password});
            await fs.writeFile('student.json',JSON.stringify(arr,null,2));
            res.status(200).json({message:"register successfully"});
        }


//res.send("<h2>Welcome to Express Server</h2>");

    }catch(err){
        res.status(500).json({msg:err});
    }
})
app.post("/login",async(req,res)=>{
    try{
    let arr=[];
    const{email,password}=req.body;
    const data=await fs.readFile('student.json',{encoding:'utf-8'});
    arr=JSON.parse(data);
    const status=arr.find((ele)=>ele.email==email & ele.password==password);
            if(status){
                return res.json({"message":"success"});
            }
            else{
                res.json({"message":"invalid user"});
            }
        }catch(err){
            res.json({"message":err.message});
        }
})

app.get("/admin/show",async(req,res)=>{
    try{
        // console.log("Hi inside/show")
    const data=await fs.readFile('student.json',{encoding:'utf-8'});
    const arr=JSON.parse(data);
    // console.log(arr);
    res.status(200).json({message:arr});
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

app.get("/admin/searchbyemail/:email",(req,res)=>{
    const id=req.params.email;
    console.log(id);
    res.json({message:"hi, inside searchbyid"})
} )

app.listen(port,()=>{
    console.log("Express server is running on"+port);
})