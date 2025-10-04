import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const ProblemSolution = () => {

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <Card className="border-2 border-secondary/20">
          <CardContent className="pt-8 pb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Företag förlorar miljoner på outnyttjade möjligheter
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Många företag saknar en aktiv strategi för sina hyresavtal – och är ofta inte ens medvetna om att det finns betydande värde att hämta genom omförhandlingar. Resultatet blir att viktiga uppsägningstider missas, hyresvillkor aldrig ifrågasätts och lokalkostnader stiger i onödan.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Hyresjuridik, förhandlingsteknik, branschkunskap och marknadsinsikt är specialistkompetenser som få företag har internt. Det räcker inte att bara 'hålla koll' – varje förhandling kräver djup förståelse för aktuella marknadshyror, juridiska fallgropar och vilka villkor som är förhandlingsbara. Att bygga upp egen expertis är både dyrt och tidskrävande.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Med LeaseWise får ni tillgång till erfarna specialister med mångårig branscherfarenhet som gör detta komplicerade arbete åt er. Vi bevakar varje avtal, känner marknaden, förhandlar professionellt och säkerställer att ni alltid har rätt villkor – en kostnadseffektiv lösning där vi bara tjänar när ni sparar.
                </p>
                <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded">
                  <p className="text-base text-foreground font-medium">
                    <strong>Exempel:</strong> Ett bolag med 20 hyresavtal sänkte sina kostnader med 10% – vilket motsvarade 1 Mkr per år – bara genom aktiv bevakning och omförhandling.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProblemSolution;
