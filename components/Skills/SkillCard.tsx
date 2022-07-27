import Link from "next/link";
import styles from "/styles/pages/Skills.module.scss";

interface Props {
  link: string;
  title: string;
  text?: string;
}

export const SkillCard: React.FC<Props> = ({ link, title, text }) => {
  return (
    <Link href={link} passHref>
      <div className={styles.card}>
        <div className={styles.cardHead}>{title}</div>
        {text ? <div className={styles.cardText}>{text}</div> : null}
      </div>
    </Link>
  );
};
