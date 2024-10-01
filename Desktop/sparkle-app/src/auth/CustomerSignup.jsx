import React from 'react'

import Style from './Signup.module.css'

const CustomerSignup = () => {
  return (
    <div className={Style.container}>
    <div className={Style.leftSide}>
      <h1>Sparkle Market place</h1>
      <p>Already have an account? login</p>
      <form className={Style.signup_form} >
        <div className={Style.inputContainer} >
          <input type="text" placeholder="First Name" name='firstname' />
        </div>
      <div className={Style.inputContainer}>
        <input type="text" placeholder="Last Name" name='lastname' />
      </div>
      <div className={Style.inputContainer}>
        <input type="email" placeholder="Email"  required  />
      </div>
      <div className={Style.inputContainer}>
        <input type="number" placeholder="Phone Number" name='phonenumber' />
      </div>
      <div className={Style.inputContainer}>
        <input type="password" placeholder="Password"  required />
      </div>
      <button  type='submit'  className={Style.createAccount_btn}>Create account</button>
      </form>
    </div>
    
    <div className={Style.rightSide}>
      <h1>Welcome to Sparkle!</h1>
      
    </div>
  </div>
  )
}

export default CustomerSignup
