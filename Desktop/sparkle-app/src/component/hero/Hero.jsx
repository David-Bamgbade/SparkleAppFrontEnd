import React from 'react';
import Style from './Hero.module.css'
import Header from './Header';
import'../hero/Header.module.css'


const Hero = () => {
  return (
   <div className={Style.hero}>
    <div className={Style.hero__container}>
    <Header />
    
    <div className={Style.hero__content}>
     
      <h1 className={Style.contentTitle}>Explore Lagos</h1>
      <div className={Style.contentInputContainer}>
      <input name={`search`} type='search-location' placeholder={`What's your address?`} className={Style.contentInput}></input>
      <button className={Style.contentButton}>Search</button>
      </div>
      <div className={Style.contentInfo}>
      <img src={""} className={Style.contentImg} alt=''></img>
      <img src={Style.contentImgOne} className={Style.contentImg} alt=''></img>
      <img src={Style.contentImgOne} className={Style.contentImg} alt=''></img>
      </div>
    </div>
    </div>

    </div>
  )
}
export default Hero
