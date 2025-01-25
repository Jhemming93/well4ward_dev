import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Banner
        overlayText={{
          title: "Co-op Reform Initiative",
          subtitle: "Autonomy | Equality | Community | Growth | Stewardship",
        }}
        backgroundImage={"/imgs/edmonton_skyline.webp"}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
