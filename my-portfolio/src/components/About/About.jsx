import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            {/* <img className={styles.aboutImage}
             src={getImageUrl("about/aboutImage.png")} 
             alt="me sitting with a laptop"
             /> */}
             <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")}
                alt="cursor image"
                />
                <div className={styles.aboutItemText}>
                    <h3>Fronted Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive
                and optimized sites</p>
                </div>
                </li>
                <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")}
                alt="server image"
                />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>As a backend developer, I have experience in buliding robust and scalable backend systems and APIs using software design patterns.</p>
                </div>
                </li>
             </ul>
        </div>
    </section>
  )
}


export default About
