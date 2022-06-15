import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import picture from "../public/image/martin.png";
import { Container, Row, Col } from "react-bootstrap";

export default function About({ isEnglish }) {
  const [pageState, setPageState] = useState(true);

  const about_page = (
    <div className="about_the_page">
      <h1 className="about_heading">This is a portfolio site</h1>

      <h3>
        If you want to se a curreated list of projects then the portfolio link
        is for you
      </h3>
      <h3>
        If you want to look for a project with as specific programming language
        etc, then the github link is for you
      </h3>
    </div>
  );

  const about_page_no = (
    <div className="about_the_page">
      <h1 className="about_heading">Dette er en porteføljeside</h1>

      <h3>
        Hvis du vil se en utarbeidet liste over prosjekter, er porteføljelenken
        noe for deg
      </h3>
      <h3>
        Hvis du vil se etter et prosjekt med et spesifikt programmeringsspråk
        etc, så er github-lenken for deg
      </h3>
    </div>
  );

  const about_me = (
    <div className="about_me">
      <Container fluid>
        <Row>
          <Col>
            <h3>I have 2 bachelor’s:</h3>
            <h3>
              one in Informatics:Programming and Networks (Informatikk:
              Programmering og nettverk)
            </h3>
            <h3>
              and one in Multimedia technology and design (Multimedieteknologi
              og design).
            </h3>
            <h3>I am currently working as a fullstack consualtant for Salt</h3>
          </Col>
          <Col>
            <div className="image-container">
              <Image src={picture} alt="A portrait" width={200} height={200} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );

  const about_me_no = (
    <div className="about_me">
      <Container fluid>
        <Row>
          <Col>
            <h3>Jeg har 2 bachelorer:</h3>
            <h3>en i Informatikk: Programmering og nettverk</h3>
            <h3>og en i Multimedieteknologi og design</h3>
            <h3>Jeg jobber for tiden som fullstack-konsulent for Salt</h3>
          </Col>
          <Col>
            <div className="image-container">
              <Image
                src={picture}
                alt="A portrait"
                width={200}
                height={200}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>);
  const [aboutPage, setAboutPage] = useState(about_page);

  const [aboutMe, setAboutMe] = useState(about_me);

  useEffect(() => {
    if (isEnglish === false) {
      setAboutPage(about_page_no);
      setAboutMe( about_me_no
      );
    } else {
      setAboutPage(about_page);
      setAboutMe(about_me);
    }
  },[isEnglish]);
  useEffect(() => {
    const pageStateInterval = setInterval(() => {
      setPageState((prevPageState) => !prevPageState);
    }, 7000);

    return () => clearInterval(pageStateInterval);
  }, []);
  console.log(pageState);

  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="description" content="About Portfolio Page and Me" />
      </Head>
      <div className="about_container"></div>
      {pageState ? aboutPage : aboutMe}
    </>
  );
}
