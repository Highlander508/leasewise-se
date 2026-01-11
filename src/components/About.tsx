import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lock, Target } from "lucide-react";
import specsaversLogo from "@/assets/specsavers-logo.png";
import jumpyardLogo from "@/assets/jumpyard-logo.png";
import beijerLogo from "@/assets/beijer-logo.png";
import dollarstoreLogo from "@/assets/dollarstore-logo.webp";
import jemfixLogo from "@/assets/jemfix-logo.jpg";
import dhlLogo from "@/assets/dhl-logo.png";
import allegoLogo from "@/assets/allego-logo.webp";
import st1Logo from "@/assets/st1-logo.png";
import fitness24sevenLogo from "@/assets/fitness24seven-logo.png";
import dogmanLogo from "@/assets/dogman-logo.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const clientLogos = [
    { src: specsaversLogo, alt: "Specsavers Logo" },
    { src: jumpyardLogo, alt: "JumpYard Logo" },
    { src: beijerLogo, alt: "Beijer Byggmaterial Logo" },
    { src: dollarstoreLogo, alt: "DollarStore Logo" },
    { src: jemfixLogo, alt: "Jem & Fix Logo" },
    { src: dhlLogo, alt: "DHL Logo" },
    { src: allegoLogo, alt: "Allego Logo" },
    { src: st1Logo, alt: "St1 Logo" },
    { src: fitness24sevenLogo, alt: "Fitness 24 Seven Logo" },
    { src: dogmanLogo, alt: "Dogman Logo" }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: t('about.values.transparency')
    },
    {
      icon: <Briefcase className="h-8 w-8 text-secondary" />,
      title: t('about.values.business')
    },
    {
      icon: <Lock className="h-8 w-8 text-secondary" />,
      title: t('about.values.security')
    },
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: t('about.values.longterm')
    }
  ];


  return (
    <section id="about" className="py-20 px-4" aria-labelledby="about-title">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 id="about-title" className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>


        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">{t('about.clientsTitle')}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" role="list" aria-label={t('about.clientsTitle')}>
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center" role="listitem">
                <div className="bg-background rounded-lg p-4 shadow-sm border h-24 w-full flex items-center justify-center">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={`max-w-full w-auto h-auto object-contain ${
                      logo.alt === "JumpYard Logo" ? "max-h-24" : logo.alt === "DHL Logo" ? "max-h-20" : "max-h-16"
                    }`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">{t('about.values.title')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-3 px-2">
                <div className="flex justify-center">{value.icon}</div>
                <h4 className="font-semibold text-base md:text-lg break-words hyphens-auto">{value.title}</h4>
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
            <p className="text-lg">{t('about.performance.description')}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
