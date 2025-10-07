import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import CustomerBenefits from "@/components/CustomerBenefits";
import Calculator from "@/components/Calculator";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead />
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Calculator />
        <Services />
        <CustomerBenefits />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
