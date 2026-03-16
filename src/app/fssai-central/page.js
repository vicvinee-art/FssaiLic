import Navbar from "../Components/Navbar";
import FssaiHero from "../Components/herofssaireg";
import FssaiCentralLicense from "../Components/centralfssaicontent";
import WhyChooseUs from "../Components/whychooseus";
import FssaiFAQCentral from "../Components/faqcentral";
import DisclaimerBar from "../Components/Disclaimer";
import Footer from "../Components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FssaiHero />
      <FssaiCentralLicense/>
      <WhyChooseUs/>
      <FssaiFAQCentral/>
      <DisclaimerBar/>
      
      <Footer />
    </>
  );
}