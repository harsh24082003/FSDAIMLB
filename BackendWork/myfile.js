function sum(num1,num2){
    return num1+num2;
}
// const result=sum(23,10);
// console.log("Sum="+result);

const multiplication=(num1,num2)=>{   //it is a form of function creation like sum using arrow keys 
    return num1*num2;
}
//converted multiple entities in to a single object below, multiple entities can't be exported 
// module.exports={
//     sum:sum,
//     multiplication:multiplication
// };

// This is another way of exporting an object of entities(sum:sum are key object pair)
// const obj={
//     sum:sum,
//     multiplication:multiplication
// };
// module.exports=obj;

//In this way we can directly export entities, in this sum, multiplication are treated as objects
module.exports={
    sum,multiplication
};