import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import LicenseTypes from "./Components/Licensetypes";
import ProcessSection from"./Components/process";
import BusinessAssistance from "./Components/BusinessAssist";
import FssaiStatsSection from "./Components/Fssaistats";
import FeeStructure from "./Components/Feestructure";
import Testimonials from "./Components/Testimonials";
import FssaiFAQ from "./Components/faq";
import CTA from "./Components/CTA Homepage";
import DisclaimerBar from "./Components/Disclaimer";
import Footer from "./Components/footer";

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
      <FeeStructure/>
      <Testimonials/>
      <FssaiFAQ/>
      <CTA />
      <DisclaimerBar/>
      <Footer />
    </>
  );
}
