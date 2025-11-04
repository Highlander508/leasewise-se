import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock } from "lucide-react";

const CORRECT_PASSWORD = "leasewise2024";
const STORAGE_KEY = "leasewise_auth";

interface PasswordGateProps {
  children: React.ReactNode;
}

const PasswordGate = ({ children }: PasswordGateProps) => {
  const { t } = useTranslation();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowError(false);

    if (password === CORRECT_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, password);
      setIsAuthenticated(true);
    } else {
      setShowError(true);
      setPassword("");
    }
  };

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg shadow-xl p-8 space-y-6 border border-border">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-foreground">
                {t("passwordGate.title")}
              </h1>
              <p className="text-muted-foreground text-sm">
                {t("passwordGate.description")}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder={t("passwordGate.placeholder")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                autoFocus
              />
            </div>

            {showError && (
              <Alert variant="destructive">
                <AlertDescription>{t("passwordGate.error")}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" size="lg">
              {t("passwordGate.submit")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordGate;
