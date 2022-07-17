import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/pages/Projects.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iven Beck</title>
        <meta name="description" content="My personal portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>todo.</h1>
      </main>
    </div>
  );
};

export default Home;
