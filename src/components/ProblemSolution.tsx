import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProblemSolution = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <Card className="border-2 border-secondary/20">
          <CardContent className="pt-8 pb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('problem.title')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  {t('problem.intro')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  {t('problem.expertise')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  {t('problem.solution')}
                </p>
                <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded">
                  <p className="text-base text-foreground font-medium">
                    <strong>{t('problem.exampleTitle')}</strong> {t('problem.exampleText')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProblemSolution;
