import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Kontakta oss idag</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fyll i formuläret så återkommer vi inom kort
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Kontakta oss</h3>
                    <p className="text-muted-foreground">
                      Hör av dig till oss så diskuterar vi hur vi kan hjälpa er att optimera era hyreskostnader
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-colors">
                      <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm mb-2">Email</div>
                        <a 
                          href="mailto:info@leasewise.se" 
                          className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                        >
                          info@leasewise.se
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-lg">
                      <Phone className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm mb-2">Telefon</div>
                        <a 
                          href="tel:+46123456789" 
                          className="text-xl font-semibold hover:text-secondary transition-colors"
                        >
                          +46 123 456 789
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 flex flex-col justify-center">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Vårt team</h4>
                    <div className="space-y-3">
                      <p className="text-muted-foreground">Oliver Emerson - Specialist</p>
                      <p className="text-muted-foreground">Andreas Borgljung - Specialist</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <p className="text-sm text-muted-foreground">
                      Vi svarar normalt inom 24 timmar på vardagar
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;