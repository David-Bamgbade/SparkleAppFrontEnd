import React from 'react';
import Style from './Signup.module.css';

const Signup = () => {
  return (
    <div className={Style.container}>
      <div className={Style.leftSide}>
        <h1>Sparkle Market place</h1>
        <p>Already have an account? login</p>
        <div className={Style.inputContainer}>
          <input type="text" placeholder="First Name" name='firstname' />
        </div>
        <div className={Style.inputContainer}>
          <input type="text" placeholder="Last Name" name='lastname' />
        </div>
        <div className={Style.inputContainer}>
          <input type="text" placeholder="Phone Number" name='phonenumber' />
        </div>
        <div className={Style.inputContainer}>
          <input type="text" placeholder="Address" name='address' />
        </div>
        <div className={Style.inputContainer}>
          <input type="text" placeholder="Email" name='email' required />
        </div>
        <div className={Style.inputContainer}>
          <input type="password" placeholder="Password" name='password' required />
        </div>
        <div className={Style.inputContainer}>
          <input type="password" placeholder="Confirm Password" name='confirmpassword' />
        </div>
        <button>Create account</button>
      </div>
      <div className={Style.rightSide}>
        <h2>Welcome to Our Service</h2>
        <p>Experience the best laundry service in town.</p>
      </div>
    </div>
  );
}

export default Signup;
