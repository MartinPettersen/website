import Head from "next/head";
import { useEffect, useState } from "react";

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
          <h3>It is currently under construction please</h3>
          <h3>Come back latter to enjoy the full experience</h3>
        </div>
      ) : (
        <div className="about_me">
          <h3>I&apos;m a fullstack Developer Looking for work</h3>
          <h3>With 2 bachelor degrees</h3>
          <h3>It is currently under construction please</h3>
          <h3>Come back latter to enjoy the full experience</h3>
        </div>
      )}
    </>
  );
}
