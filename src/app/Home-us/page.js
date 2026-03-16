import Navbar from "../Components/Navbar";
import Hero from "../Components/hero";
import About from "../Components/About";
import LicenseTypes from "../Components/Licensetypes";
import ProcessSection from "../Components/process";
import BusinessAssistance from "../Components/BusinessAssist";
import FssaiStatsSection from "../Components/Fssaistats";
import FssaiFAQ from "../Components/faq";
import CTA from "../Components/CTA";
import DisclaimerBar from "../Components/Disclaimer";
import Footer from "../Components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <LicenseTypes />
      <ProcessSection />
      <FssaiStatsSection/>
      <BusinessAssistance/>
      <FssaiFAQ/>
      <CTA />
      <DisclaimerBar/>
      <Footer />
    </>
  );
}