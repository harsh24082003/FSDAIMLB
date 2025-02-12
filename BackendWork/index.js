const {sum,multiplication}=require('./myfile')  //in this line we are importing sum from myfile, we can name different name other than sum
console.log("Sum="+sum(12,20));
console.log("Multiplication="+multiplication(10,10));
//for getting output in nodejs we have to write "node index.js" in terminal