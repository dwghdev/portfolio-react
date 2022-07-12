import {useState} from "react";
import {motion} from "framer-motion";
import logo from "../assets/logo.svg";
import {HiMenuAlt4, HiX} from "react-icons/hi";
import styles from '../styles/App.module.sass';

const Navbar = () => {
  const [toggle, setToggle] = useState();
  const links =["home", "about", "work", "skills", "contact"]
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={logo} alt="logo" />
      </div>
      <ul className={styles.navbar_links}>
        {links.map(item => (
          <li 
            key={`link-${item}`} 
            className={`${styles.app_flex} ${styles.p_text}`}
          >
            <div/>
            <a href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.navbar_menu}>
        <HiMenuAlt4 onClick={() => setToggle(true)}/>
        {toggle && (
          <motion.div 
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)}/>
            <ul className={styles.navbar_links}>
              {links.map(item => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li> 
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
