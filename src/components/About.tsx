import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Shield, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Transparens",
      description: "Full insyn i alla processer och besparingar"
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Trygghet",
      description: "Professionell hantering av era hyresavtal"
    },
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: "Resultat",
      description: "Bevisbara besparingar och optimeringar"
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "Proaktivitet",
      description: "Vi agerar innan problem uppstår"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Om oss</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialister inom hyresavtalsförvaltning och portföljoptimering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Oliver Emerson</h3>
              <p className="text-muted-foreground mb-4">
                Grundare och specialist med lång erfarenhet av förhandling, etablering 
                och fastighetsrådgivning. Oliver har hjälpt ett flertal företag att 
                optimera sina hyreskostnader och säkerställa bästa möjliga villkor.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Andreas Borgljung</h3>
              <p className="text-muted-foreground mb-4">
                Medgrundare med djup kunskap inom kommersiella hyresavtal och 
                portföljförvaltning. Andreas kombinerar strategiskt tänkande med 
                praktisk erfarenhet för att leverera konkreta resultat.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Varför LeaseWise?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">{value.icon}</div>
                <h4 className="font-semibold text-lg">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Pure-play-specialister</h3>
            <p className="text-lg mb-2">
              Vi fokuserar enbart på hyresgästens villkor.
            </p>
            <p className="text-primary-foreground/80">
              Vår ersättning kopplas direkt till kundens resultat – vi tjänar när ni sparar.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;