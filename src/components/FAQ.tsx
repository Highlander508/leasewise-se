import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Hur tar ni betalt?",
      answer: "5 000 kr per avtal och år för bevakning. Vid omförhandling tillkommer 20% av faktisk besparing. Ingen besparing – inget success fee."
    },
    {
      question: "Vad händer om ni inte får ner hyran?",
      answer: "Då betalar ni bara årsavgiften – vi tar inget extra success fee."
    },
    {
      question: "Kan ni hjälpa oss även om vi bara har 1 avtal?",
      answer: "Ja, vi arbetar med allt från mindre bolag till stora kedjor."
    },
    {
      question: "Hur lång tid tar processen?",
      answer: "Det varierar, men vi påbörjar bevakning och dialog omgående och hanterar förhandlingar när avtalen närmar sig brytpunkt."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Vanliga frågor
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
