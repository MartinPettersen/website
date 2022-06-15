import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Layout from "../components/layout";


function MyApp({ Component, pageProps }) {

  const [isEnglish, setIsEnglish] = useState(false)

  const handleLanguage = () => {
    console.log('pushed')
    setIsEnglish(!isEnglish);
  }


  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
  <Layout isEnglish={isEnglish} handleLanguage={handleLanguage}>
    <Component {...pageProps} isEnglish={isEnglish} />
  </Layout>
  );
}

export default MyApp
