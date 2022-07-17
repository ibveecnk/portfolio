import type { NextPage } from "next";
import Head from "next/head";
import { ExperienceCard } from "../components/Experience/ExperienceCard";
import styles from "../styles/pages/Experience.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>My experience</h1>
        <div className={styles.cardWrapper}>
          <ExperienceCard
            text="Kübler Hallenheizungen"
            link="https://www.kuebler-hallenheizungen.de"
            from={new Date(2022, 1)}
            to={new Date(Date.now())}
            ongoing={true}
          ></ExperienceCard>
          <ExperienceCard
            text="Ueberbit"
            link="https://www.ueberbit.de"
            from={new Date(2020, 2)}
            to={new Date(2021, 3)}
          ></ExperienceCard>
        </div>
      </main>
    </div>
  );
};

export default Home;
