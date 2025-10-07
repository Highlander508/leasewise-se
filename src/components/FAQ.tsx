import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faq.questions.noSavings.question'),
      answer: t('faq.questions.noSavings.answer')
    },
    {
      question: t('faq.questions.oneContract.question'),
      answer: t('faq.questions.oneContract.answer')
    },
    {
      question: t('faq.questions.timeline.question'),
      answer: t('faq.questions.timeline.answer')
    }
  ];

  return (
    <section className="py-20 px-4" aria-labelledby="faq-title">
      <div className="container mx-auto max-w-3xl">
        <h2 id="faq-title" className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t('faq.title')}
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
