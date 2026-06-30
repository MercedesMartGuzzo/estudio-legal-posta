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
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact";
/* import CalendlySection from "@/components/CalendySection"; */
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative">
    
        <div className="relative z-0">
          <div className="sticky top-0 h-screen w-full">
            <Hero />
          </div>

        
          <div className="relative z-10 bg-[var(--surface)] rounded-t-[3rem]"> 
            <About />
            <PracticeAreasOverview />
            <CommercialAndCorporateSection />
            <CooperativesSection />
            <TourismSection />
            <DigitalSectionMedia />
            <IntProperty />
            <WhyChooseUs />
            <Testimonials />
            <FAQ />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}