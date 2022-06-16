import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = ({ isEnglish, handleLanguage, isLight, handleLight }) => {
  const [language, setLanguage] = useState("Norwegian");
  const [tone, setTone] = useState("Light");

  const [home, setHome] = useState("Home");
  const [about, setAbout] = useState("About");
  const [portfolio, setPortfolio] = useState("Portfolio");
  const [github, setGithub] = useState("Github");
  const [blog, setBlog] = useState("blog");

  const router = useRouter();

  useEffect(() => {
    if (isLight === false) {
      setTone("Light");
    } else {
      setTone("Dark");
    }
  });

  useEffect(() => {
    if (isEnglish === false) {
      setHome("Hjem");
      setLanguage("English");
      setAbout("Om");
      setPortfolio("Portefølje");
      setBlog("Blogg");
    } else {
      setHome("Home");
      setLanguage("Norwegian");
      setAbout("About");
      setPortfolio("Portfolio");
      setBlog("Blog");
    }
  });

  return (
    <div className={isLight == true ? styles.navbar_light : styles.navbar_dark}>
      <nav className="navbar navbar-inverse">
        <Container fluid>
          <header className="navbar-header">
            <div className={styles.floating}>
              <h1 className="">Portfolio</h1>
            </div>
          </header>
          <Row>
            <Col>
              <div className="link" onClick={() => handleLight()}>
                {tone}
              </div>
            </Col>
            <Col>
              <div className="link" onClick={() => handleLanguage()}>
                {language}
              </div>
            </Col>
            <Col>
              <Link href="/">
                <div
                  className={
                    router.pathname == "/" ? "active-link floating" : "link"
                  }
                >
                  {home}
                </div>
              </Link>
            </Col>
            <Col>
              <Link href="/about">
                <div
                  className={
                    router.pathname == "/about"
                      ? "active-link floating"
                      : "link"
                  }
                >
                  {about}
                </div>
              </Link>
            </Col>
            <Col>
              <Link href="/posts/portfolios">
                <div
                  className={
                    router.pathname == "/posts/portfolios"
                      ? "active-link floating"
                      : "link"
                  }
                >
                  {portfolio}
                </div>
              </Link>
            </Col>
            <Col>
              <Link href="/posts/github">
                <div
                  className={
                    router.pathname == "/posts/github"
                      ? "active-link floating"
                      : "link"
                  }
                >
                  {github}
                </div>
              </Link>
            </Col>
            <Col>
              <Link href="/posts/blogs">
                <div
                  className={
                    router.pathname == "/posts/blogs"
                      ? "active-link floating"
                      : "link"
                  }
                >
                  {blog}
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
