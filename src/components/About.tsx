import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lock, Target, Quote } from "lucide-react";
import specsaversLogo from "@/assets/specsavers-logo.png";
import jumpyardLogo from "@/assets/jumpyard-logo.png";
import beijerLogo from "@/assets/beijer-logo.png";
import dollarstoreLogo from "@/assets/dollarstore-logo.webp";
import jemfixLogo from "@/assets/jemfix-logo.jpg";
import komatsuLogo from "@/assets/komatsu-logo.jpeg";
const About = () => {
  const testimonials = [{
    quote: "LeaseWise hjälpte oss att sänka våra lokalkostnader med 12% över hela portföljen. Deras expertis och proaktiva bevakning har varit ovärderlig.",
    name: "Maria Andersson",
    role: "CFO",
    company: "Retail Chain AB"
  }, {
    quote: "Tack vare LeaseWise missade vi aldrig en uppsägningsfrist och kunde omförhandla flera avtal till betydligt bättre villkor.",
    name: "Erik Johansson",
    role: "Fastighetschef",
    company: "Apotek Gruppen"
  }, {
    quote: "Professionell och transparent process från start till mål. Vi sparade 800 000 kr första året och har full kontroll på alla våra 15 avtal.",
    name: "Sara Lundqvist",
    role: "VD",
    company: "Fitness Network"
  }];
  const clientLogos = [{
    src: specsaversLogo,
    alt: "Specsavers Logo"
  }, {
    src: jumpyardLogo,
    alt: "JumpYard Logo"
  }, {
    src: beijerLogo,
    alt: "Beijer Byggmaterial Logo"
  }, {
    src: dollarstoreLogo,
    alt: "DollarStore Logo"
  }, {
    src: jemfixLogo,
    alt: "Jem & Fix Logo"
  }, {
    src: komatsuLogo,
    alt: "Komatsu Logo"
  }];
  const values = [{
    icon: <Shield className="h-8 w-8 text-secondary" />,
    title: "Transparens"
  }, {
    icon: <Briefcase className="h-8 w-8 text-secondary" />,
    title: "Affärsmässighet"
  }, {
    icon: <Lock className="h-8 w-8 text-secondary" />,
    title: "Trygghet"
  }, {
    icon: <Target className="h-8 w-8 text-secondary" />,
    title: "Långsiktighet"
  }];
  return <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Om oss</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            LeaseWise grundades med en enkel idé: att ge företag kontroll över sina hyresavtal och säkerställa att de alltid har rätt villkor. Vi kombinerar affärsmässighet, fastighetskunskap och lång erfarenhet av hyresförhandlingar för att skapa värde för våra kunder.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Vad våra kunder säger</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <Quote className="h-8 w-8 text-secondary mb-4" />
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-secondary font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Några företag som litar på oss</h3>
          <div className="relative overflow-hidden bg-muted/30 rounded-lg py-8">
            <div className="flex animate-scroll">
              {[...clientLogos, ...clientLogos].map((logo, index) => <div key={index} className="flex-shrink-0 mx-4 flex items-center justify-center" style={{
              minWidth: '150px'
            }}>
                  <div className="bg-background rounded-lg p-6 shadow-sm border h-32 flex items-center justify-center">
                    <img src={logo.src} alt={logo.alt} className="max-h-20 max-w-full w-auto h-auto object-contain" />
                  </div>
                </div>)}
            </div>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Våra värdeord</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((value, index) => <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">{value.icon}</div>
                <h4 className="font-semibold text-lg">{value.title}</h4>
              </div>)}
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
            <p className="text-lg">Vår success fee-modell innebär att vi endast tjänar när vi faktiskt levererar resultat. Detta säkerställer att våra intressen alltid är i linje med era - när ni vinner, vinner vi.</p>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default About;