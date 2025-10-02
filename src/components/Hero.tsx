import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Rätt hyra. Rätt villkor. <span className="text-secondary">Alltid.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Vi hjälper företag att spara pengar och minska risker genom professionell 
            förvaltning och omförhandling av hyresavtal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" onClick={scrollToContact} className="group">
              Boka möte
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact}>
              Kontakta oss
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">100%</div>
              <div className="text-sm text-muted-foreground">Transparent rapportering</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">20%</div>
              <div className="text-sm text-muted-foreground">Genomsnittlig besparing</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">0</div>
              <div className="text-sm text-muted-foreground">Missade uppsägningar</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">∞</div>
              <div className="text-sm text-muted-foreground">Resultatfokus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;