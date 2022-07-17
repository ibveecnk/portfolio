import Link from "next/link";
import styles from "/styles/pages/Experience.module.scss";

interface Props {
  link: string;
  text: string;
  from: Date;
  to: Date;
  ongoing?: boolean;
}

export const ExperienceCard: React.FC<Props> = ({
  text,
  link,
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
        {text}
        <div>{dateSpanToString(from, to)}</div>
      </div>
    </Link>
  );
};
