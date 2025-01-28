import { useState } from "react";
import Title from "../parts/Title";

export default function Card_Page_Title({
  title,
  subtitle,
  tag,
  className,
  border,
}) {
  const appliedBorder = border || "bg-brightYellow";

  return (
    <div className={`${styles.card} ${className}`}>
      <div className="w-fit mb-4">
        <Title as={tag} children={title} className={styles.title} />
        <div className={`${styles.underline}  ${appliedBorder}`}></div>
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

const styles = {
  card: "w-full",
  title: "text-3xl font-bold text-black md:text-4xl",
  subtitle: "text-lg md:text-xl",
  underline: `w-full h-2  rounded-full`,
};
