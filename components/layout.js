import styles from "../styles/layout.module.css";
import Contentbox from "./container";
import Navbar from "./navbar";
import Sidebar from '../components/sidebar'
import { Container, Row, Col } from "react-bootstrap";

// return <div className={styles.container}>{children}</div>;

export default function Layout({ children, isEnglish, handleLanguage, isLight, handleLight }) {

  console.log(isLight)
  return (
    <div className={isLight == true ? styles.background_light : styles.background_dark}>
      <Navbar isEnglish={isEnglish} handleLanguage={handleLanguage} isLight={isLight} handleLight={handleLight}/>
      <aside className="position-absolute w-full md:w-60">
        <Sidebar isLight={isLight} isEnglish={isEnglish}/>
      </aside>
      <main className="content">
      <Contentbox isLight={isLight}>{children}</Contentbox>
      </main>
    </div>
  );
}
