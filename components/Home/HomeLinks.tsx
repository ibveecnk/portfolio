import styles from "/styles/components/HomeLinks.module.scss";
import { HomeLink } from "./HomeLink";

interface Props {}

export const HomeLinks: React.FC<Props> = ({}) => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <HomeLink link="/experience" text="Experience" />
        <HomeLink link="/projects" text="Projects" />
        <HomeLink link="/skills" text="Skills" />
      </div>
    </>
  );
};
