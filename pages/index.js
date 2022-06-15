import Head from "next/head";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/sidebar";
import { useSpeechSynthesis } from "react-speech-kit";


export default function Home(isEnglish) {


  return (
    <>
      <Head>
        {isEnglish === true? (
          <>
            <title>Portfolio Site</title>
            <meta name="description" content="Portfolio Page" />
          </>
        ) : (
          <>
            <title>Portfolio side</title>
            <meta name="description" content="Portfolio side" />
          </>
        )}
      </Head>
    </>
  );
}
