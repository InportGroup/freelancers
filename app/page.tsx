import Nav from "@/components/ui/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Stack from "@/components/sections/Stack";
import HowWeWork from "@/components/sections/HowWeWork";
import UseCases from "@/components/sections/UseCases";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Stack />
        <HowWeWork />
        <UseCases />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
