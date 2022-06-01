import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
export default function Home() {
  return (
    <div className='index_container'>

    <div className={styles.container}>
      <Head>
        <title>Portfolio Site</title>
        <meta name="description" content="Portfolio Page" />
      </Head>

    <Sidebar />

    </div>
    </div>
  )
}
