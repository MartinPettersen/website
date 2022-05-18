import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import styles from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav className="navbar navbar-inverse">
        <Container fluid>
            <header className="navbar-header">
                <h1 className="navbar-brand">Portfolio Logo</h1>
            </header>
            <Row >
                <Col>
                    <Link href="/about"><div>About</div></Link>
                </Col>
                <Col>
                    <Link href="/"><>Home</></Link>
                </Col>
            </Row>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
