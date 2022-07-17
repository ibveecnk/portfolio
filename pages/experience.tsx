import type { NextPage } from "next";
import Head from "next/head";
import { EducationCard } from "../components/Experience/EducationCard";
import { ExperienceCard } from "../components/Experience/ExperienceCard";
import styles from "../styles/pages/Experience.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>My experience</h1>
        <div className={styles.columnWrapper}>
          <div className={styles.cardWrapper}>
            <div className={styles.columnTitle}>Work</div>
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
          <div className={styles.cardWrapper}>
            <div className={styles.columnTitle}>Education</div>
            <EducationCard
              text="Bachelor Business Informatics"
              link="https://www.uni-mannheim.de/studium/studienangebot/bachelor-wirtschaftsinformatik/"
              uni="University of Mannheim"
              from={new Date(2021, 8)}
              to={new Date(Date.now())}
              ongoing={true}
            ></EducationCard>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
