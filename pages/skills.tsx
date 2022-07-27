import type { NextPage } from "next";
import Head from "next/head";
import { SkillCard } from "../components/Skills/SkillCard";
import styles from "../styles/pages/Skills.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>My Skills</h1>
        <div className={styles.columnTitle}>Programming Languages</div>
        <div className={styles.cardWrapper}>
          <SkillCard
            title="JavaScript"
            text="A flexible programming language used in web development, server-side JavaScript, and the browser"
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <SkillCard
            link="https://www.typescriptlang.org/"
            title="TypeScript"
            text="A superset of JavaScript with types, that compiles to plain JavaScript"
          ></SkillCard>
          <SkillCard
            title="PHP"
            link="https://www.php.net/"
            text="A server-side language that is interpreted by the web server"
          ></SkillCard>
          <SkillCard
            title="Java"
            link="https://www.java.com/"
            text="A high-level language that is designed to be concise and clear"
          ></SkillCard>
          <SkillCard
            title="Node.js"
            link="https://nodejs.org/"
            text="A JavaScript runtime built on Chrome's V8 JavaScript engine"
          ></SkillCard>
          <SkillCard
            title="SQL"
            link="https://www.mysql.com/"
            text="A language for managing relational databases"
          ></SkillCard>
        </div>
        <div className={styles.columnTitle}>Technologies</div>
        <div className={styles.cardWrapper}>
          <SkillCard
            title="Nginx"
            link="https://nginx.org/"
            text="An HTTP(S) server and reverse proxy server, and a high performance HTTP/2.0 reverse proxy server"
          ></SkillCard>
          <SkillCard
            title="Docker"
            link="https://www.docker.com/"
            text="A containerization platform that provides a full-stack container runtime environment for applications"
          ></SkillCard>
          <SkillCard
            title="Git"
            link="https://git-scm.com/"
            text="A distributed version control system"
          ></SkillCard>
          <SkillCard
            title="Linux"
            link="https://www.linux.org/"
            text="A Unix-like and Linux-based operating system"
          ></SkillCard>
        </div>
        <div className={styles.columnTitle}>Frameworks</div>
        <div className={styles.cardWrapper}>
          <SkillCard
            link="https://www.reactjs.org/"
            title="React"
            text="A JavaScript library for building user interfaces"
          ></SkillCard>
          <SkillCard
            link="https://www.nextjs.org/"
            title="Next.js"
            text="A framework for server-rendered React applications"
          ></SkillCard>
        </div>
      </main>
    </div>
  );
};

export default Home;
