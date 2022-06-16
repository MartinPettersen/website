import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Layout from "../components/layout";


function MyApp({ Component, pageProps }) {

  const [isEnglish, setIsEnglish] = useState(false);
  const [isLight, setIsLight] = useState(true);

  const handleLanguage = () => {
    setIsEnglish(!isEnglish);
  }
  const handleLight = () => {
    setIsLight(!isLight);
  }

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
  <Layout isEnglish={isEnglish} handleLanguage={handleLanguage} isLight={isLight} handleLight={handleLight}>
    <Component {...pageProps} isEnglish={isEnglish} isLight={isLight}/>
  </Layout>
  );
}

export default MyApp
