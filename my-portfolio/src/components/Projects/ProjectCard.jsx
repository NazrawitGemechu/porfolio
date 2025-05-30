import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {/* <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>*/}
      <div className={styles.links}>
       {demo &&
        <a href={demo} className={styles.link}>
          Demo
        </a>
}
{source&&
        <a href={source} className={styles.link}>
          Code
        </a>
}
      </div>
    </div>
  )
}
