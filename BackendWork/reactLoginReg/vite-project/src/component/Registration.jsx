import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Registration = () => {
    const sendData = async(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value; // Corrected: e.target.email.value
        const password = e.target.password.value; // Corrected: e.target.password.value
        //console.log(name, email, password); // Corrected: used commas for better readability

        const response=await fetch("http://localhost:3001/register",{
          method:"POST",
          body:JSON.stringify({name,email,password}),
          headers:{'Content-Type':'application/json'}
        })
        //console.log(response)
        const res=await response.json();
        alert(res.message);
      };
  return (
    <div>
<form onSubmit={sendData}>
<div class="form-group">
    <label for="exampleInputName">Name</label>
    <input type="text" name='name' class="form-control" id="exampleInputName" placeholder="Enter Name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name='password' class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Registration