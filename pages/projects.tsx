import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ProjectCard } from "../components/Projects/ProjectCard";
import styles from "../styles/pages/Projects.module.scss";
import { useProjects } from "../hooks/useProjects";

const Home: NextPage = () => {
  const [githubData, setGithubData] = useState<any>();
  const [error, setError] = useState<string>();
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    fetch("https://api.github.com/users/ibveecnk/repos")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>My Projects</h1>
        <div className={styles.cardWrapper}>
          {data ? (
            <>
              {data
                .filter((d) => !!d.description)
                .map((d, index) => (
                  <ProjectCard
                    key={index}
                    title={d.name}
                    description={d.description}
                    link={d.html_url}
                  />
                ))}
            </>
          ) : (
            <div>Loading projects...</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
