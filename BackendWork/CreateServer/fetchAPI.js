// const http=require('http');
// const PORT=2500;
// const server=http.createServer((req,res)=>{
//     const serverresponse=fetch("https://dummyjson.com/recipes");
//     console.log(serverresponse);
//     res.end("sfihiu")
// })
// server.listen(PORT,()=>{
//     console.log("Server running on:"+PORT);
// })

const http=require('http');
const PORT=3001;

const server=http.createServer(async(req,res)=>{
    res.setHeader("Content-Type","text/html");
        const data=await fetch('https://fakestoreapi.com/products');
            const resdata=await data.json()
        // console.log(resdata[0].title);

        const htmltemplate=`<html>
        <head>
        <title>Online Cloth Shop</title>
        <style>
        .main{
        background-color:rgb(142, 172, 199);
        border:3px solid rgb(81, 160, 229);
        border-radius:10px;
        display:flex;
        flex-direction:column;
        flex-wrap-nowrap;
        }
        </style>
        </head>
        <body>
        

        <div>
        ${
            resdata.map((ele)=>{
                return(`<div class="main">
                    <img src=${ele.image} height=200 width=200/>
                    <div>
                    <h3>${ele.price}</h3>
                    </div>
                    <div>
                    <h3>${ele.title}</h3>
                    <h4>${ele.description}</h3>
                    </div>
                    </div>`)

            })
        }
        </div>
        </body>
        </html>`
    res.end(htmltemplate);
})

server.listen(PORT,()=>{
    console.log("Server is running on :"+PORT);
})