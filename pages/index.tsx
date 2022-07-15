import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HomeLinks } from "../components/HomeLinks";
import styles from "../styles/pages/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iven Beck</title>
        <meta name="description" content="My personal portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Iven Beck</h1>
        <HomeLinks />
      </main>
    </div>
  );
};

export default Home;
