import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Banner
        overlayText={{
          title: "Cooperative Reform Initiative",
          subtitle: "Autonomy | Equality | Community | Growth | Stewardship",
        }}
        backgroundImage={"/imgs/edmonton_skyline.webp"}
      />
      <main className={styles.main}>
        <section className={styles.section}>{children}</section>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  main: "bg-nGreen py-6",
  section: "mx-auto w-full max-w-5xl px-4 ",
};
