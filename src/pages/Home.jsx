import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ManufacturingProducts from "../components/ManufacturingProducts";
import BuildingMaterials from "../components/BuildingMaterials";
import CallNowBox from "../components/CallNowBox";
import CustomerReviews from "../components/CustomerReviews";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <About />
      <ManufacturingProducts />
      <BuildingMaterials />
      <CallNowBox />
      <CustomerReviews />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;