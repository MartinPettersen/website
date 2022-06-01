import styles from "../styles/layout.module.css";
import Contentbox from "./container";
import Navbar from "./navbar";
import Sidebar from '../components/sidebar'

// return <div className={styles.container}>{children}</div>;

export default function Layout({ children }) {
  return (
    <div className={styles.background}>
      <Navbar />
      <div aria-label="Sidebar">
        <Sidebar />
      </div>
      <Contentbox >{children}</Contentbox>
    </div>
  );
}
