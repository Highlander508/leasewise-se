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
                  Många företag saknar en aktiv strategi för sina hyresavtal. Det leder till att viktiga uppsägningstider missas, att hyresvillkor aldrig omförhandlas och att lokalkostnader stiger i onödan. Med LeaseWise får ni en professionell partner som bevakar varje avtal, förhandlar åt er och säkerställer att ni alltid har rätt villkor.
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
