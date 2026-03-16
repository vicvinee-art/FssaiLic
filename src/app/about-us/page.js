import Navbar from "../Components/Navbar";
import AboutUs from "../Components/Aboutus";
import WhyChooseUs from "../Components/whychooseus";
import DisclaimerBar from "../Components/Disclaimer";
import Footer from "../Components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <AboutUs/>
      <WhyChooseUs/>
      <DisclaimerBar/>
      
      <Footer />
    </>
  );
}

