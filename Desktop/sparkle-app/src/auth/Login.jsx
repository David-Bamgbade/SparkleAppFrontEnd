import React from 'react'
import Style from './Login.module.css';


const Login = () => {
  return (
    <div className={Style.loginCustomer}>
      <h1 >Welcome Back</h1>
      <p>Login now and search for your any launderer here in the market</p>
      <form className={Style.loginForm}>
        <div className={Style.userNameInput}>
        <input type="email" name={`email`} placeholder="Your email" required/>
        </div>

        <div className={Style.userNameInput}>
        <input type="password" placeholder="Password" required />
      </div>
        
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? Register</p>
      <p>Forgot Password? Reset</p>
    </div>
  )
}

export default Login
