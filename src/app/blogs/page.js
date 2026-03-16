import Navbar from "../Components/Navbar";
import BlogHero from "../Components/Bloghero";
import BlogFaq from "../Components/BlogFAQ";
import BlogInteraction from "../Components/Bloginteraction";

import Footer from "../Components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <BlogHero />
      <BlogFaq />
      <BlogInteraction />
      <Footer />
    </>
  );
}