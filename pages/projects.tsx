import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ProjectCard } from "../components/Projects/ProjectCard";
import styles from "../styles/pages/Projects.module.scss";
import { useProjects } from "../hooks/useProjects";

const Home: NextPage = () => {
  const [githubData, setGithubData] = useState<any>();
  const [error, setError] = useState<string>();
  const { data, isLoading, isError } = useProjects();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>My Projects</h1>
        <div className={styles.cardWrapper}>
          {isError ? (
            <>
              <div className={styles.cardBold}>An error occured:</div>
              <div>{error}</div>
            </>
          ) : null}
          {!isError && data ? (
            data.map((d, index) => (
              <ProjectCard
                key={index}
                title={d.name}
                description={d.description}
                link={d.html_url}
              />
            ))
          ) : isLoading ? (
            <div>Loading projects...</div>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default Home;
