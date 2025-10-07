import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const CustomerBenefits = () => {
  const { t } = useTranslation();
  
  const benefits = [
    t('benefits.items.costs'),
    t('benefits.items.negotiation'),
    t('benefits.items.control'),
    "Enkelt och effektiv riskhantering",
    "Transparens i ersättningen – ni vet alltid vad ni betalar för"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t('benefits.title')}
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
        
        <p className="text-center text-muted-foreground mt-8 text-lg">
          Vi arbetar med allt från kedjor till mindre bolag – inom retail, apotek, optik, gym och bilprovning.
        </p>
      </div>
    </section>
  );
};

export default CustomerBenefits;
