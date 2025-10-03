import logo from "@/assets/leasewise-logo.png";

const Footer = () => {
  
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="LeaseWise AB" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80">
              Specialister inom hyresavtalsförvaltning och portföljoptimering
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Email: info@leasewise.se</p>
              <p>Telefon: +46 123 456 789</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">LeaseWise AB</h3>
            <p className="text-sm text-primary-foreground/80">
              Rätt hyra. Rätt villkor. Alltid.
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} LeaseWise AB. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;