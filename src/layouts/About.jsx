import {useEffect, useState} from "react";
import styles from "../styles/App.module.sass";
import {motion} from "framer-motion";

const abouts = [
  { 
    title: "Web Development", 
    description: "I am a good web developer", 
    imgUrl: ""
  },
  { 
    title: "Frontend Development", 
    description: "I am a good web developer", 
    imgUrl: ""
  },
  { 
    title: "Backend Development", 
    description: "I am a good web developer", 
    imgUrl: ""
  },
  { 
    title: "Game Development", 
    description: "I am a good web developer", 
    imgUrl: ""
  },
]

const About = () => (
  <>
    <h2 className={styles.head_text}>
      I know that&nbsp;
      <span>Good Design</span>
      <br/>
      means&nbsp;
      <span>Good Business</span>
    </h2>

    <div className={styles.profiles}>
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className={styles.profile_item}
          key={about.title + index}
        >
          <img src={about.imgUrl} alt={about.title}/>
          <h2 className={styles.bold_text} style={{ marginTop: 20 }}>
            {about.title}
          </h2>
          <p className={styles.p_text} style={{ marginTop: 10 }}>
            {about.description}
          </p>
        </motion.div>
      ))}
    </div>
  </>
);

export default About;
