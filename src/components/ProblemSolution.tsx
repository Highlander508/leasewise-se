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
                  Många företag saknar strategi för sina hyresavtal. Resultatet? Missade uppsägningstider, dåliga villkor och onödigt höga lokalkostnader.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Hyresjuridik och förhandling kräver specialistkompetens som få har internt. Att bygga egen expertis är dyrt och tidskrävande.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  LeaseWise ger er erfarna specialister som bevakar era avtal och förhandlar professionellt – ni betalar bara när ni sparar.
                </p>
                <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded">
                  <p className="text-base text-foreground font-medium">
                    <strong>Exempel:</strong> Ett bolag med 20 hyresavtal sänkte sina kostnader med 10% – vilket motsvarade 1 Mkr per år – bara genom aktiv bevakning och omförhandling av LeaseWise.
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
