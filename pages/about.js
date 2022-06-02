import Head from "next/head";
import { useEffect, useState } from "react";
import Image from 'next/image'
import picture from '../public/image/martin.png'
export default function About() {
  const [pageState, setPageState] = useState(true);

  /*
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 3000);

    return () => clearInterval(intervalId)
  }, []);
  console.log(count)
  console.log(pageState)
*/
  useEffect(() => {
    const pageStateInterval = setInterval(() => {
      setPageState((prevPageState) => !prevPageState);
    }, 7000);

    return () => clearInterval(pageStateInterval);
  }, []);
  console.log(pageState);

  /*
  useEffect(() => {
      const interval = setInterval(() => setPageState(() => !pageState), 7000);
        console.log("the state atm: " + pageState2)
        setPageState2(pageState2 + 1)
    return () => clearInterval(interval)
    },[])
*/
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="description" content="About Portfolio Page and Me" />
      </Head>
      <div className="about_container"></div>
      {pageState ? (
        <div className="about_the_page">
          <h1 className="about_heading">This is a portfolio site</h1>

          <h3>
            If you want to se a curreated list of projects then the portfolio
            link is for you
          </h3>
          <h3>
            If you want to look for a project with as specific programming
            language etc, then the github link is for you
          </h3>

        </div>
      ) : (
        <div className="about_me">
          <h3>I have 2 bachelor’s:</h3>
          <h3>one in Informatics:Programming and Networks (Informatikk: Programmering og nettverk)</h3>
          <h3>and one in Multimedia technology and design (Multimedieteknologi og design).</h3>
          <h3>I am currently working as a fullstack consualtant for Salt</h3>
          <Image
            src={picture}
            alt="A portrait"
            width="100px"
            height="100px"
            layout="responsive"
          />
        </div>
      )}
    </>
  );
}
