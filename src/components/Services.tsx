import { CheckCircle, TrendingDown, BarChart3, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const Services = () => {
  const steps = [{
    icon: <CheckCircle className="h-12 w-12 text-secondary" />,
    title: "Uppsägning & bevakning",
    description: "Vi säkerställer att inga datum missas. Kontinuerlig övervakning av alla hyresavtal i er portfölj."
  }, {
    icon: <TrendingDown className="h-12 w-12 text-secondary" />,
    title: "Omförhandling",
    description: "Vi förhandlar fram rätt hyra och villkor. Våra specialister driver förhandlingar med hyresvärd."
  }, {
    icon: <BarChart3 className="h-12 w-12 text-secondary" />,
    title: "Strategi & optimering",
    description: "Vi analyserar hela portföljen och identifierar besparingsmöjligheter och förbättringsområden."
  }, {
    icon: <FileText className="h-12 w-12 text-secondary" />,
    title: "Resultat & rapportering",
    description: "Ni får tydliga rapporter och besparingar. Full transparens i hela processen."
  }];
  return <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Så fungerar det</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            En enkel process som ger konkreta resultat
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => <Card key={index} className="relative hover-scale">
              <div className="absolute -top-4 left-6 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <CardContent className="pt-8 pb-6">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>)}
        </div>

        <div className="bg-card border rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6">Vår affärsmodell</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">5 000 kr</div>
              <div className="font-semibold mb-2">Bevakning</div>
              <p className="text-sm text-muted-foreground">per avtal/år</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">20%</div>
              <div className="font-semibold mb-2">Success fee</div>
              <p className="text-sm text-muted-foreground">av faktisk besparing</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">Varierande</div>
              <div className="font-semibold mb-2">Uppstartskostnad</div>
              <p className="text-sm text-muted-foreground">portföljoptimering</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-6 italic">
            Vår ersättning kopplas direkt till ert resultat – vi tjänar när ni sparar.
          </p>
        </div>
      </div>
    </section>;
};
export default Services;