import Title from "../parts/Title";

export default function Card_Page_Title({ title, subtitle, tag, className }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className="w-full mb-4">
        <Title as={tag} children={title} className={styles.title} />
        <div className={styles.underline}></div>
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

const styles = {
  card: "w-full",
  title: "text-4xl font-bold text-black",
  subtitle: "text-lg md:text-xl",
  underline: "w-size-75 h-2 bg-brightYellow rounded-full",
};
