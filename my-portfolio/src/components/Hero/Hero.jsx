import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
const Hero = () => {
  return(
     <section className={styles.container}>

    <div className={styles.content}>
        <h1 className={styles.title}> Hello, I'm Nazrawit</h1>
        <p className={styles.description}>
        I'm a passionate full-stack developer nearing completion of my Software Engineering Bachelor's degree.Reach out if you would like to know more.
            
        </p>
        <a href="#contact" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img className={styles.heroImg}src={getImageUrl("hero/old_photo.jpg")} alt="hero image of me"/>
  <div className={styles.topBlur}/>

  <div className={styles.bottomBlur}/>
  
  </section>
  )
}

export default Hero
