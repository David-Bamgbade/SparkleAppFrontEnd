import React from 'react';
import Style from './Hero.module.css'
import Header from './Header';
import Illustration from "../../assest/Illustration.png"



const Hero = () => {
  return (
    <div className={Style.hero}>
    <div className={Style.hero__container}>
      <Header/>
      <div className={Style.hero__content}>
        <h4>{`${"Explore Lagos"}`}</h4>
        <h1>{`${"Find launderer near you"}`}</h1>
        <p>{`${"Our platoform is more than just a job portal, It's a dynamic space where dreams can take flight and companies find thier next star performerWelcome to [Your Laundry Marketplace Name] – where convenience meets quality. Connect with top-rated laundry providers and enjoy fresh, clean clothes without the hassle. Join us today and let your laundry worries take flight!"}`}</p>

          <input type={'address'} placeholder={'Enter your address'} name={'address'} id={''} required></input>
          <button className={Style.hero__button}>Start Here</button>
      </div>
    </div>
    <div className={Style.heroBackground__image}>
        <img src={Illustration} className={Style.hero__image} alt={"Background"} id={''}></img>
      </div>

  </div>
  )
}
export default Hero
