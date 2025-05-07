import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
const Hero = () => {
  return(
     <section className={styles.container}>

    <div className={styles.content}>
        <h1 className={styles.title}> Hello, I'm Nazrawit</h1>
        <p className={styles.description}>
I'm a passionate full-stack developer pursuing my Master's in Computer Science, with a Bachelor's degree in Software Engineering. I enjoy building meaningful projects and continuously learning new technologies. Feel free to reach out if you'd like to connect or learn more about my work.


        </p>
        <a href="#contact" className={styles.contactBtn}>Contact Me</a>
    </div>
   {/* <img className={styles.heroImg} src={getImageUrl("hero/old_photo.jpg")} alt="hero image of me" /> */}

  <div className={styles.topBlur}/>

  <div className={styles.bottomBlur}/>
  
  </section>
  )
}

export default Hero
