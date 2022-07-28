import Link from "next/link";
import styles from "/styles/pages/Experience.module.scss";

interface Props {
  title: string;
  description: string;
  link?: string;
}

export const ProjectCard: React.FC<Props> = ({
  title,
  description,
  link = "",
}) => {
  return (
    <Link href={link} passHref>
      <div className={styles.card}>
        <div className={styles.cardHead}>{title}</div>
        <div className={styles.cardText}>{description}</div>
      </div>
    </Link>
  );
};
