import Link from "next/link";
import styles from "/styles/pages/Experience.module.scss";

interface Props {
  link: string;
  company: string;
  position: string;
  from: Date;
  to: Date;
  ongoing?: boolean;
}

export const ExperienceCard: React.FC<Props> = ({
  company,
  link,
  position,
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
    ongoing ? (toString = "today") : null;
    return `${fromString} - ${toString}`;
  };

  return (
    <Link href={link} passHref>
      <div className={styles.card}>
        <div className={styles.cardHead}>{position}</div>
        <div className={styles.cardText + " " + styles.cardBold}>{company}</div>
        <div className={styles.cardText}>{dateSpanToString(from, to)}</div>
      </div>
    </Link>
  );
};
