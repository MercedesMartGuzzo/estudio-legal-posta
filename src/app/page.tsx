import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreasOverview from "@/components/PracticeAreasOverview";
import CommercialAndCorporateSection from "@/components/CommercialAndCorporateSection";
import CooperativesSection from "@/components/CooperativesSection";
import TourismSection from "@/components/TourismSection";
import DigitalSectionMedia from "@/components/DigitalSectionMedia";
import IntProperty from "@/components/IntProperty";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
/* import CalendlySection from "@/components/CalendySection"; */
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <PracticeAreasOverview />

        <CommercialAndCorporateSection />
        <CooperativesSection />
        <TourismSection />
        <DigitalSectionMedia />
        <IntProperty />

        <WhyChooseUs />

        {/* Mejoras agregadas */}
        <Testimonials />
        <FAQ />

        <Contact />
      {/*   <CalendlySection /> */}
      </main>

      <Footer />
    </>
  );
}