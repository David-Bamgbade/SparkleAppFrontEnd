import React, {useState} from 'react';
import Style from './Signup.module.css';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setState] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")


  const handleFirstName = (firstName)=>{
    setFirstName(firstName.target.value);
  }
  const handleLastName = (lastName)=>{
    setFirstName(lastName.target.value);
  }
  const handlePhoneNumber = (phoneNumber)=>{
    setPhoneNumber(phoneNumber.target.value);
  }
  


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
        
      </div>
    </div>
  );
}

export default Signup;
