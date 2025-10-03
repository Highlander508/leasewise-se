import { Eye, FileX, MessageSquare, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const Services = () => {
  const steps = [{
    icon: <Eye className="h-12 w-12 text-secondary" />,
    title: "Bevakning",
    description: "Vi registrerar och bevakar alla era hyresavtal och säkerställer att inga deadlines missas. Leverans: månatliga statusrapporter."
  }, {
    icon: <FileX className="h-12 w-12 text-secondary" />,
    title: "Uppsägning",
    description: "Vi hanterar uppsägningar i rätt tid för att öppna upp för förhandlingar."
  }, {
    icon: <MessageSquare className="h-12 w-12 text-secondary" />,
    title: "Omförhandling",
    description: "Vi förhandlar era villkor och hyror baserat på marknadsdata och vår erfarenhet. Leverans: minnesanteckningar från förhandling."
  }, {
    icon: <TrendingDown className="h-12 w-12 text-secondary" />,
    title: "Resultat",
    description: "Ni får rapporter över besparingar och en långsiktig strategi för ert bestånd."
  }];
  return <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Så fungerar det</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            En sömlös process från start till resultat
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
              <div className="text-3xl font-bold text-secondary mb-2">5 000 kr/avtal/år</div>
              <div className="font-semibold mb-2">Bevakning per avtal</div>
              <p className="text-sm text-muted-foreground">Fast årsavgift per hyresavtal i portföljen</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">20% av besparingen</div>
              <div className="font-semibold mb-2">Success fee</div>
              <p className="text-sm text-muted-foreground">Endast vid lyckad omförhandling eller uppsägning</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">Enligt offert</div>
              <div className="font-semibold mb-2">Uppstartskostnad</div>
              <p className="text-sm text-muted-foreground">Engångsavgift för djupanalys och systemintegrering</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;