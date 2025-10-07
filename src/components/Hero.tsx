import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4" aria-labelledby="hero-title">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 id="hero-title" className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
            {t('hero.title')} <span className="text-secondary">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" onClick={scrollToContact} className="group">
              {t('hero.contactUs')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-2">
            Svar inom 24 timmar
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">{t('hero.stats.transparency.value')}</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.transparency.label')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">{t('hero.stats.savings.value')}</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.savings.label')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">{t('hero.stats.missed.value')}</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.missed.label')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">{t('hero.stats.focus.value')}</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.focus.label')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;