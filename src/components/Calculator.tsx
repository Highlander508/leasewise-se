import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Calculator = () => {
  const [numberOfContracts, setNumberOfContracts] = useState(10);
  const [averageRent, setAverageRent] = useState(500000);

  const totalRent = numberOfContracts * averageRent;
  const minSavings = Math.round(totalRent * 0.10);
  const maxSavings = Math.round(totalRent * 0.25);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('sv-SE').format(num);
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Räkna på era möjliga besparingar
        </h2>

        <Card>
          <CardContent className="pt-8 pb-8">
            <div className="space-y-8">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Antal avtal: <span className="text-secondary font-bold">{numberOfContracts}</span>
                </label>
                <Slider
                  value={[numberOfContracts]}
                  onValueChange={(value) => setNumberOfContracts(value[0])}
                  min={1}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Genomsnittlig årshyra per avtal (SEK): <span className="text-secondary font-bold">{formatNumber(averageRent)} kr</span>
                </label>
                <Slider
                  value={[averageRent]}
                  onValueChange={(value) => setAverageRent(value[0])}
                  min={100000}
                  max={5000000}
                  step={50000}
                  className="w-full"
                />
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Beräkningen visar ett typiskt spann baserat på marknadsdata och vår erfarenhet. Den exakta besparingen beror på läge, avtal och hyresvärd.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Total årshyra</p>
                    <p className="text-2xl font-bold text-foreground">{formatNumber(totalRent)} kr</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Möjlig besparing</p>
                    <p className="text-2xl font-bold text-secondary">{formatNumber(minSavings)} - {formatNumber(maxSavings)} kr</p>
                  </div>
                </div>

                <p className="text-center text-muted-foreground mb-6">
                  Med {numberOfContracts} avtal á {formatNumber(averageRent)} kr/år kan ni spara mellan {formatNumber(minSavings)} - {formatNumber(maxSavings)} SEK över en avtalsperiod.
                </p>
                
                <div className="flex justify-center">
                  <a href="#contact">
                    <Button size="lg" className="font-semibold">
                      Kontakta oss idag
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Calculator;
