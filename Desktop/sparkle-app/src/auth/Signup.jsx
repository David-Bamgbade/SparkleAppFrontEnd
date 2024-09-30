import React, {useState} from 'react';
import Style from './Signup.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SIGNUP_URL = process.env.REACT_APP_SIGNUP_URL;
const Signup = () => {
    
console.log(SIGNUP_URL);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleFirstName = (firstName)=>{
    setFirstName(firstName.target.value);
  }
  console.log(handleFirstName)
  const handleLastName = (lastName)=>{
    setLastName(lastName.target.value);
  }
  console.log(handleLastName)
  const handlePhoneNumber = (phoneNumber)=>{
    setPhoneNumber(phoneNumber.target.value);
  }
  console.log(handlePhoneNumber)
  const handleEmailChange = (email)=>{
   setEmail(email.target.value); 
  }
console.log(handleEmailChange)
  const handlePasswordChange = (password)=>{
    setPassword(password.target.value);
  }
  console.log(handleEmailChange)

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const customerInfo = {
      firstName: firstName,
      lastName: lastName,
      email: email,  
      phoneNumber: phoneNumber,
      password: password,
    }
    console.log(customerInfo);

     const data = await fetch(SIGNUP_URL, { method:"POST",
      headers:{

        "Content-Type": "application/json",
      },
      body: JSON.stringify({customerInfo}),
    });

    if (!data.status) {
      toast.error("Error creating account");
    } else {
      
      toast.success("Account created successfully");

    }
    
    console.log(data)
    const response  =  await data.json();
  
    console.log(response)

    // if(response.ok){
    //   console.log(response);
    //  toast.success("Account created successfully");
    // }else{
    //   console.log(response)
    //   toast.error("Account creation failed");
    // }
  }
  return (
      <div className={Style.container}>
        <div className={Style.leftSide}>
          <h1>Sparkle Market place</h1>
          <p>Already have an account? login</p>
          <form className={Style.signup_form} onSubmit={handleSubmit}>
            <div className={Style.inputContainer} >
              <input type="text" placeholder="First Name" name='firstname' onChange={handleFirstName} />
            </div>
          <div className={Style.inputContainer}>
            <input type="text" placeholder="Last Name" name='lastname' onChange={handleLastName} />
          </div>
          <div className={Style.inputContainer}>
            <input type="email" placeholder="Email"  required onChange={handleEmailChange} />
          </div>
          <div className={Style.inputContainer}>
            <input type="number" placeholder="Phone Number" name='phonenumber' onChange={handlePhoneNumber} />
          </div>
          <div className={Style.inputContainer}>
            <input type="password" placeholder="Password"  required onChange={handlePasswordChange} />
          </div>
          <button  type='submit'  className={Style.createAccount_btn}>Create account</button>
          </form>
        </div>
        <ToastContainer />
        <div className={Style.rightSide}>
          
        </div>
      </div>
  );
}

export default Signup;
