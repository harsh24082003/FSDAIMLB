import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate()
    async function sendData(e){
        e.preventDefault();
        const email = e.target.email.value; // Corrected: e.target.email.value
        const password = e.target.password.value; // Corrected: e.target.password.value
        //console.log(name, email, password); // Corrected: used commas for better readability
        setTimeout(() => {
            console.log(email,password)
            
        }, 5000);
        const response=await fetch("http://localhost:3001/login",{
          method:"POST",
          body:JSON.stringify({email,password}),
          headers:{'Content-Type':'application/json'}
        })
        //console.log(response)
        const res=await response.json();
        alert(res.message);
        if(res.message=="Successfully login"){
            navigate('/dashboard')
        }
        else{
            navigate('/login')
        }
    }
  return (

    <div>
        <div>Login Form</div>
<form onSubmit={sendData}>
<div class="form-group">
    <label for="exampleInputEmail2">Email address</label>
    <input type="email" name='email' class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword2">Password</label>
    <input type="password" name='password' class="form-control" id="exampleInputPassword2" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck2"/>
    <label class="form-check-label" for="exampleCheck2">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
</div>
  )
}

export default Login