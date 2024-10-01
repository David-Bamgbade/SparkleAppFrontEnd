import React from 'react'
import { Link } from 'react-router-dom'
import Style from   "../hero/Header.module.css"

const Header = () => {
  return (
    <div className={Style.header}>
        <nav className={Style.navBar}>
          <div className={Style.logo}>
            <h1><span>Spark</span>le</h1>
          </div>
          <ul className={Style.navBarList}>
          
          </ul>
          <div className={Style.button}>
          <li className={Style.loginButton}><Link to={'/login'}>Login</Link></li>
          <li className={Style.signupButton}><Link to={'/signup'}>Signup</Link></li>
          </div>
        </nav>
        </div>
  )
}
export default Header
