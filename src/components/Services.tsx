import { Eye, FileX, MessageSquare, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Eye className="h-12 w-12 text-secondary" />,
      title: t('services.steps.monitoring.title'),
      description: t('services.steps.monitoring.description')
    },
    {
      icon: <FileX className="h-12 w-12 text-secondary" />,
      title: t('services.steps.termination.title'),
      description: t('services.steps.termination.description')
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-secondary" />,
      title: t('services.steps.negotiation.title'),
      description: t('services.steps.negotiation.description')
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-secondary" />,
      title: t('services.steps.results.title'),
      description: t('services.steps.results.description')
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/30" aria-labelledby="services-title">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 id="services-title" className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="relative hover-scale">
              <div className="absolute -top-4 left-6 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <CardContent className="pt-8 pb-6">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6">{t('services.businessModel.title')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">{t('services.businessModel.monitoring.title')}</div>
              <div className="font-semibold mb-2">{t('services.businessModel.monitoring.subtitle')}</div>
              <p className="text-sm text-muted-foreground">{t('services.businessModel.monitoring.description')}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">{t('services.businessModel.successFee.title')}</div>
              <div className="font-semibold mb-2">{t('services.businessModel.successFee.subtitle')}</div>
              <p className="text-sm text-muted-foreground">{t('services.businessModel.successFee.description')}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">{t('services.businessModel.startup.title')}</div>
              <div className="font-semibold mb-2">{t('services.businessModel.startup.subtitle')}</div>
              <p className="text-sm text-muted-foreground">{t('services.businessModel.startup.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
