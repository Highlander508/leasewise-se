import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lock, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Transparens"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-secondary" />,
      title: "Affärsmässighet"
    },
    {
      icon: <Lock className="h-8 w-8 text-secondary" />,
      title: "Trygghet"
    },
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: "Långsiktighet"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Om oss</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            LeaseWise grundades med en enkel idé: att ge företag kontroll över sina hyresavtal och säkerställa att de alltid har rätt villkor. Vi kombinerar affärsmässighet, fastighetskunskap och lång erfarenhet av hyresförhandlingar för att skapa värde för våra kunder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Oliver Emerson</h3>
              <p className="text-muted-foreground mb-4">
                Mångårig erfarenhet inom fastighetsförvaltning och hyresförhandling med fokus på kommersiella lokaler.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Andreas Borgljung</h3>
              <p className="text-muted-foreground mb-4">
                Bred erfarenhet från fastighetsportföljoptimering med specialkompetens inom hyresavtalsanalys.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Våra värdeord</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">{value.icon}</div>
                <h4 className="font-semibold text-lg">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Pure-play-specialister</h3>
            <p className="text-lg mb-2">
              Till skillnad från traditionella konsultfirmor är vi en ren hyresavtalsspecialist. Vi har inga intressekonflikter - vår enda agenda är att optimera era hyreskostnader och villkor. Genom att endast fokusera på detta område kan vi erbjuda branschens bästa expertis och resultat.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card mt-8">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Prestationsbaserad ersättning</h3>
            <p className="text-lg">
              Vår success fee-modell innebär att vi endast får betalt när vi faktiskt levererar resultat. Detta säkerställer att våra intressen alltid är i linje med era - när ni vinner, vinner vi.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;