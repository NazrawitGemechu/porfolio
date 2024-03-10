import React from "react"

import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils"

export const Contact = () => {
  return (
    <footer  className={styles.container}id="contactt">
      <div className={styles.text}>
        {/* <h2>Addresess</h2> */}
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:nazrawitgemechu9706@gmail.com">nazrawitgemechu9706@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nazrawit-gemechu-828232240/">linkedin.com/NazrawitGemechu</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/NazrawitGemechu">github.com/NazrawitGemechu</a>
        </li>
      </ul>
    </footer>
  )
}
export default Contact