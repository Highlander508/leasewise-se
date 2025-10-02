import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Tack för ditt meddelande!",
      description: "Vi återkommer inom kort.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Kontakta oss</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ta kontroll över era hyresavtal – kontakta oss idag
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Hör av dig</h3>
              <p className="text-muted-foreground mb-8">
                Vi hjälper gärna till att analysera era hyresavtal och identifiera 
                besparingsmöjligheter. Kontakta oss för en kostnadsfri genomgång.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:info@leasewise.se" className="text-muted-foreground hover:text-secondary">
                      info@leasewise.se
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <div>
                    <div className="font-semibold">Telefon</div>
                    <a href="tel:+46123456789" className="text-muted-foreground hover:text-secondary">
                      +46 123 456 789
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h4 className="font-semibold">Oliver Emerson</h4>
              <p className="text-sm text-muted-foreground">Grundare & Specialist</p>
              
              <h4 className="font-semibold">Andreas Borgljung</h4>
              <p className="text-sm text-muted-foreground">Medgrundar & Specialist</p>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Namn"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="E-post"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Företag"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Meddelande"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Skicka förfrågan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;