import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const CustomerBenefits = () => {
  const benefits = [
    "Lägre lokalkostnader",
    "Professionell förhandling utan egen fastighetsavdelning",
    "Full kontroll på alla avtal och deadlines",
    "Enkelt och riskfritt – vi tar bara betalt när vi levererar besparing"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Vad ni får med LeaseWise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="text-lg font-medium">{benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerBenefits;
