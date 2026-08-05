import AnimationProvider from "./components/AnimationProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import MenuGrid from "./components/MenuGrid";
import Beverages from "./components/Beverages";
import FlavorTrail from "./components/FlavorTrail";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <MenuGrid />
        <Beverages />
        <FlavorTrail />
        <Process />
        <Testimonials />
        <Gallery />
        <CTASection />
      </main>
      <Footer />
      <AnimationProvider />
    </>
  );
}
