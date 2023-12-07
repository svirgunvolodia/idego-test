import Head from 'next/head';
import styles from '../styles/Home.module.css';
import BiomTable from "../components/BiomTable";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Idego Frontend Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <BiomTable />
      </main> 
    </div>
  )
}
