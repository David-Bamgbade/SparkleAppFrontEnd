import React from 'react'
import Style from './Signup.module.css'

const Signup = () => {
  return (
    <div className={Style.Signupcontainer}>
      <h1>Sign Up</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="email" placeholder="Email" />
      <button>Sign Up</button>
      <p>Already have an account? </p>
      
    </div>
  )
}

export default Signup
