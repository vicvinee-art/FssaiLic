import Navbar from "../Components/Navbar";
import FssaiHero from "../Components/herofssaireg";
import FssaiRegistration from "../Components/contentfssaireg";
import WhyChooseUs from "../Components/whychooseus";
import FssaiFAQState from "../Components/faqstate";
import DisclaimerBar from "../Components/Disclaimer";
import Footer from "../Components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FssaiHero />
      <FssaiRegistration/>
      
      <WhyChooseUs/>
      <FssaiFAQState/>
      <DisclaimerBar/>
      
      <Footer />
    </>
  );
}