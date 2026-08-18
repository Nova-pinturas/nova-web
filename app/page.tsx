import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
    <main id="top" className="min-h-screen bg-white">
      <Header />

      <Hero />

      <Stats />

      <Services />

      <Gallery />

      <Testimonials />

      <Contact />
    </main>

      <Footer />
        </>
  );
}
