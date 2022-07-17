import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HomeLinks } from "../components/Home/HomeLinks";
import styles from "../styles/pages/Home.module.scss";

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
