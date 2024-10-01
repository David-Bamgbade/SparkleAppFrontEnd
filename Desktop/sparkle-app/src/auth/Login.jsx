import React from 'react'
import Style from './Login.module.css';
import { useState } from 'react';
import {toast} from "react-toastify";


const Login = () => {

    const [email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const handleEmailChange = (email) =>{
        setEmail(email)
    }

    const handlePasswordChange = (password)=>{
        setPassword(password)
    }
    console.log(handleEmailChange)
    console.log(handlePasswordChange)

    // eslint-disable-next-line no-unused-vars
    const handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(handleSubmit)
        const customerInfo = {
            email: email,
            password: password
        }

        console.log(customerInfo)

        const data =  await fetch("http://localhost:8080/api/customer/login,", {
            method: "POST",
            header:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({customerInfo})
        })
        if (!(data.ok)){
            toast.success("Successfully logged in");
        }
        
    }
  return (
     <div className="login-container">
      <h1>Welcome Back</h1>
      <p>Login now and search for any launderer here in the market</p>
      <form className="login-form">
        <div className="input-group">
          <input type="email" name="email" placeholder="Your email" required />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Register</a></p>
      <p>Forgot Password? <a href="/reset">Reset</a></p>
    </div>
  )
}

export default Login
