import Navbar from "../Components/Navbar";
import Contact from "../Components/contactus";
import WhyChooseUs from "../Components/whychooseus";
import DisclaimerBar from "../Components/Disclaimer";
import Footer from "../Components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Contact/>
      <WhyChooseUs/>
      <DisclaimerBar/>
      
      <Footer />
    </>
  );
}