import type {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from "next";
import { HomeLinks } from "../components/Home/HomeLinks";
import styles from "../styles/pages/Home.module.scss";

interface Props {
  time: string;
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Iven Beck</h1>
        <HomeLinks />
      </main>
      <footer className={styles.footer}>Iven Beck - 2022</footer>
    </div>
  );
};

export default Home;
