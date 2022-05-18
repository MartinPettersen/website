import styles from "./layout.module.css";
import utilStyles from "./layout.module.css";
import Contentbox from "./container";
import Navbar from "./navbar";

// return <div className={styles.container}>{children}</div>;

export default function Layout({ children }) {
  return (
    <div className={styles.background}>
      <Navbar />
      <Contentbox >{children}</Contentbox>
    </div>
  );
}
