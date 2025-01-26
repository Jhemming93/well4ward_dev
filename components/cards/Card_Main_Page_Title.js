import Title from "../individual/Title";

export default function Card_Main_Page_Title({
  title,
  subtitle,
  tag,
  className,
}) {
  return (
    <div className={`${styles.card} ${className}`}>
      <Title as={tag} children={title} className={styles.title} />
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

const styles = {
  card: "w-full p-6 bg-white border border-gray rounded-lg shadow-md ",
  title: "text-4xl font-bold text-tealBlue mb-2 text-center",
  subtitle: "text-gray-700 text-center text-lg md:text-xl",
};
