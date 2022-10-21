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
        <div className={styles.columnTitle}>Work</div>
        <div className={styles.cardWrapper}>
          <ExperienceCard
            company="KÜBLER GmbH"
            position="Working Student"
            link="https://www.kuebler-hallenheizungen.de"
            from={new Date(2022, 1)}
            to={new Date(Date.now())}
            ongoing={true}
          ></ExperienceCard>
          <ExperienceCard
            company="UEBERBIT GmbH"
            position="Student Job"
            link="https://www.ueberbit.de"
            from={new Date(2020, 2)}
            to={new Date(2021, 3)}
          ></ExperienceCard>
        </div>
        <div className={styles.columnTitle}>Education</div>
        <div className={styles.cardWrapper}>
          <EducationCard
            text="Bachelor Business Informatics"
            link="https://www.uni-mannheim.de/studium/studienangebot/bachelor-wirtschaftsinformatik/"
            uni="University of Mannheim"
            from={new Date(2021, 8)}
            to={new Date(Date.now())}
            ongoing={true}
          ></EducationCard>
          <EducationCard
            text="Abitur"
            link="https://www.hfswe.de"
            uni="Hans-Freudenberg-Schule"
            from={new Date(2018, 8)}
            to={new Date(2021, 6)}
          ></EducationCard>
        </div>
      </main>
    </div>
  );
};

export default Home;
