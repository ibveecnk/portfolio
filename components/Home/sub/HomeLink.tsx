import Link from "next/link";
import styles from "../../../styles/components/HomeLinks.module.scss";

interface Props {
  link: string;
  text: string;
}

export const HomeLink: React.FC<Props> = ({ link, text }) => {
  return (
    <Link href={link}>
      <div className={styles.card}>{text}</div>
    </Link>
  );
};
