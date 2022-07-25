import Link from "next/link";
import styles from "/styles/pages/Experience.module.scss";

interface Props {
  link: string;
  text: string;
  uni: string;
  from?: Date;
  to?: Date;
  grade?: number;
  ongoing?: boolean;
}

export const EducationCard: React.FC<Props> = ({
  text,
  link,
  uni,
  from,
  to,
  grade,
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
        <div className={styles.cardHead}>{text}</div>
        <div className={styles.cardText + " " + styles.cardBold}>{uni}</div>
        {from && to ? (
          <div className={styles.cardText}>{dateSpanToString(from, to)}</div>
        ) : null}
        {grade ? <div className={styles.cardText}>Grade: {grade}</div> : null}
      </div>
    </Link>
  );
};
