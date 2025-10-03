import logo from "@/assets/leasewise-logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="LeaseWise AB" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>{t('footer.email')}</p>
              <p>{t('footer.phone')}</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <p className="text-sm text-primary-foreground/80">
              {t('footer.slogan')}
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;