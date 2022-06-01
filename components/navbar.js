import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import styles from '../styles/navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav className="navbar navbar-inverse">
        <Container fluid>
            <header className="navbar-header">
                <h1 className="">Portfolio Logo</h1>
            </header>
            <Row >
                <Col>
                    <Link href="/"><div className="link">Home</div></Link>
                </Col>
                <Col> 
                    <Link  href="/about"><div className="link">About</div></Link>
                </Col>
                <Col>
                    <Link href="/posts/portfolios"><div className="link">Portfolio</div></Link>
                </Col>
                <Col>
                    <Link href="/posts/github"><div className="link">Github</div></Link>
                </Col>
                <Col>
                    <Link href="/posts/blogs/test-post"><div className="link">Blogs</div></Link>
                </Col>
            </Row>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
