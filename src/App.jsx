import BuildingBlocks from "./components/BuildingBlocks";
import Navbar from "./components/shared/Navbar";
import Testimonials from "./components/Testimonials";
import WaysToUse from "./components/WaysToUse";
import FeatureSlideShow from "./components/FeatureSlideShow";
import BrandsShowcase from "./components/BrandsShowcase";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import GetStartedSection from "./components/GetStartedSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSlideShow />
      <BrandsShowcase />
      <BuildingBlocks />
      <Testimonials />
      <WaysToUse />
      <GetStartedSection />
      <Footer />
    </>
  );
}

export default App;
