import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ProjectCard } from "../components/Projects/ProjectCard";
import styles from "../styles/pages/Projects.module.scss";

const Home: NextPage = () => {
  const [githubData, setGithubData] = useState<any>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    getGitHubData();
  }, []);

  const getGitHubData = async () => {
    const response = await fetch("https://api.github.com/users/ibveecnk/repos");
    const json = await response.json();

    if (!response.ok) {
      setError(json.message || "Failed to fetch projects");
      return;
    }

    const filteredJson = json.filter((item: any) => {
      return !!item.description;
    });

    setGithubData(filteredJson);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>My Projects</h1>
        <div className={styles.cardWrapper}>
          {error ? (
            <>
              <div className={styles.cardBold}>An error occured:</div>
              <div>{error}</div>
            </>
          ) : null}
          {!error && githubData ? (
            githubData.map((d, index) => (
              <ProjectCard
                title={d.name}
                description={d.description}
                link={d.html_url}
              />
            ))
          ) : !error ? (
            <div>Loading projects...</div>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default Home;
