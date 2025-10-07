import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/leasewise-logo.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="LeaseWise AB" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('navbar.services')}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('navbar.about')}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('navbar.contact')}
            </button>
            <LanguageSwitcher />
            <Button onClick={() => scrollToSection("contact")}>
              {t('navbar.bookMeeting')}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-lg hover:text-primary transition-colors"
                >
                  {t('navbar.services')}
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-lg hover:text-primary transition-colors"
                >
                  {t('navbar.about')}
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-lg hover:text-primary transition-colors"
                >
                  {t('navbar.contact')}
                </button>
                <div className="mt-4">
                  <LanguageSwitcher />
                </div>
                <Button onClick={() => scrollToSection("contact")} className="mt-2">
                  {t('navbar.bookMeeting')}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;