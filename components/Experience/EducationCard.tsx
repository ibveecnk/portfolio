import Link from "next/link";
import styles from "/styles/pages/Experience.module.scss";

interface Props {
  link: string;
  text: string;
  uni: string;
  from: Date;
  to: Date;
  ongoing?: boolean;
}

export const EducationCard: React.FC<Props> = ({
  text,
  link,
  uni,
  from,
  to,
  ongoing = false,
}) => {
  const dateSpanToString = (from: Date, to: Date) => {
    const fromString = from.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
    let toString = to.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
    ongoing ? (toString += " (today)") : null;
    return `${fromString} - ${toString}`;
  };

  return (
    <Link href={link} passHref>
      <div className={styles.card}>
        <div>{text}</div>
        <div className={styles.cardText}>{uni}</div>
        <div className={styles.cardText}>{dateSpanToString(from, to)}</div>
      </div>
    </Link>
  );
};
