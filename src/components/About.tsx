import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Shield, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.description')
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: t('about.values.results.title'),
      description: t('about.values.results.description')
    },
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: t('about.values.expertise.title'),
      description: t('about.values.expertise.description')
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">{t('about.founders.oliver.name')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('about.founders.oliver.description')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">{t('about.founders.andreas.name')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('about.founders.andreas.description')}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">{t('about.values.title')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">{value.icon}</div>
                <h4 className="font-semibold text-lg">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('about.purePlay.title')}</h3>
            <p className="text-lg mb-2">
              {t('about.purePlay.description')}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card mt-8">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('about.performance.title')}</h3>
            <p className="text-lg">
              {t('about.performance.description')}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;