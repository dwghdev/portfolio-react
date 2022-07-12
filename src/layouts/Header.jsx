import {motion} from "framer-motion";
import circleImage from "../assets/circle.svg";
import flutter from "../assets/flutter.png";
import redux from "../assets/redux.png";
import sass from "../assets/sass.png";
import styles from "../styles/App.module.sass";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

const Header = () => (
  <div className={`
    ${styles.home}
    ${styles.header} 
    ${styles.app_flex}
  `}>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={styles.header_info}
    >
      <div className={styles.header_badge}>
        <div className={`${styles.badge_cmp} ${styles.app_flex}`}>
          <span></span>
          <div style={{ marginLeft: 20 }}>
            <p className={styles.p_text}>Hello, I am</p>
            <h1 className={styles.head_text}>Dale</h1>
          </div>
        </div>

        <div className={`${styles.badge_cmp} ${styles.app_flex}`}>
          <span></span>
          <div style={{ marginLeft: 20 }}>
            <p className={styles.p_text}>Developer</p>
            <p className={styles.p_text}>Digital Artist</p>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className={styles.header_img}
    >
      <img src="" alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1]}}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={circleImage}
        alt="profile_circle"
        className={styles.overlay_circle}
      />
    </motion.div>

    <motion.div
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className={styles.header_circles}
    >
      {[flutter, redux, sass].map((circle, index) => (
        <div 
          key={`circle-${index}`}
          className={`
            ${styles.circle_cmp} 
            ${styles.app_flex}
        `}>
          <img src={circle} alt="circle" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default Header;
