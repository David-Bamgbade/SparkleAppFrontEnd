import React, {useState} from 'react';
import Style from './Signup.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const Signup = () => {
    

  return (
      <div className={Style.container}>
        <div className={Style.leftSide}>
         <div className={Style.leftContent}>
          <h4><Link to={'/home'}>back</Link></h4>
          <h1>Sparkle</h1>
          <h2>Select accounnt type</h2>
          <p>{`${"There are generally three types of accounts on sparkle. Not surethe account type to choose? "}`}</p>
          <h5><Link to={'/signup/customer'} className={Style.signupButton}>readmore</Link></h5>
         
          <div className={Style.accountType}>
            <form>
             <div className={Style.laundererAccountType}>
             <input type="radio" id="launderer" name="accountType" value="launderer" required />
             <label htmlFor="customer">Launderer</label>
             <p>Best for an individual providing a laundry services </p>
             </div>

             <div className={Style.riderAccountType}>
             <input type="radio" id="rider" name="accountType" value="rider" required />
             <label htmlFor="customer">Rider</label>
             <p>Best for business providing logistic Services</p>
             </div>

             <div className={Style.customerAccountType}>
             <input type="radio" id="customer" name="accountType" value="customer" required />
             <label htmlFor="customer"> Customer </label>
             <p>Best for individuals looking for laundering services</p>
             </div>
              
            </form>
          </div>   
         </div>
         
        </div>
        <ToastContainer />
        <div className={Style.rightSide}>
          <h1>Welcome to Sparkle!</h1>
          
        </div>
      </div>
  );
}

export default Signup;
