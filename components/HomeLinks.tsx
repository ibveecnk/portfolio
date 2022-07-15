import Link from "next/link";
import styles from "../styles/components/HomeLinks.module.css";

interface Props {}

export const HomeLinks: React.FC<Props> = ({}) => {
  const makeLink = (link: string, text: string) => {
    return (
      <Link href={link}>
        <div className={styles.card}>{text}</div>
      </Link>
    );
  };

  return (
    <>
      <div className={styles.cardWrapper}>
        {makeLink("/experience", "Experience")}
        {makeLink("/projects", "Projects")}
        {makeLink("/skills", "Skills")}
      </div>
    </>
  );
};
