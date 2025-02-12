console.log("Hello Fetching");
function fetchData(){
const response=fetch("https://dummyjson.com/recipes");
response.then(data=>{
    console.log(data);
    data.json().then((res)=>{
        console.log(res.recipes[0]);

        // let output=`${res.recipes[0]}.name`+`${res.recipes[0]}.ingredients`
        let output=`${res.recipes[0].id + " "+res.recipes[0].name + " " + res.recipes[0].ingredients}`
        document.getElementById("disp").innerHTML=output;
        let tabledata="";
        response.map((res)=>{
            tabledata+=`<tr>
            <td>${res.recipes[0].id}</td>
            <td>${res.recipes[0].name}</td>
            <td>${res.recipes[0].ingredients}</td>
            </tr>`
        })
    })
})
.catch(error=>console.log(error))
.finally(msg=>console.log("Hi, finally closed all the resources"))
}
