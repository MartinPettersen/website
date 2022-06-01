import styles from "../styles/layout.module.css";
import Contentbox from "./container";
import Navbar from "./navbar";
import Sidebar from '../components/sidebar'
import { Container, Row, Col } from "react-bootstrap";

// return <div className={styles.container}>{children}</div>;

export default function Layout({ children }) {
  return (
    <div className={styles.background}>
      <Navbar />
      <aside className="position-absolute w-full md:w-60">
        <Sidebar />
      </aside>
      <main className="content">
      <Contentbox >{children}</Contentbox>
      </main>
    </div>
  );
}
