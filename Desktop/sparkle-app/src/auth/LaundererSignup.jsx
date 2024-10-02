import React from 'react'
import Style from './LaundererSignup.module.css'
import RightSideImage from "../assest/BackgroundImage.png"
import { Link } from 'react-router-dom'
const LaundererSignup = () => {
  return (
    <div className={Style.LaundererSignupContainer}>
    <div className={Style.LaundererSignupRightSide}>
      <div className={Style.LaundererSignupRightSideContent}>
        {/* <h1>Launderer Login</h1> */}
        <img className={Style.LaundererSignupImage} src={RightSideImage} alt="Background" />
      </div>
    </div>

    <div className={Style.LaundererSignupLeftSide}>
        <div className={Style.LaundererSignupContent}>
          
     <div className={Style.LaundererSignupText}>
     <h1>Create an account</h1>
     <p>Get started here as a dry cleaner</p>
     </div>
<form>
  <div className={Style.LaundererSignupForms}>
  <input type="text" placeholder="First Name" />

  </div>
  <div className={Style.LaundererSignupForms}>
    <input type="text" placeholder="Last Name" />

  </div>
  <div className={Style.LaundererSignupForms}>
    <input type="email" placeholder="Email" />

  </div>
  <div className={Style.LaundererSignupForms}>
      <input type="password" placeholder="Password" />

  </div>
  <button type="submit"> <Link to={'/market'}>Sign Up</Link></button>
</form>
    </div>
    </div>

</div>
  )
}

export default LaundererSignup
