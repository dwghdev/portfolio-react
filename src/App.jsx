import styles from './styles/App.module.sass';

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
} from "./layouts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Header/>
      <About/>
      <Footer/>
      <Skills/>
      <Testimonial/>
      <Work/>
    </div>
  );
}

export default App;
