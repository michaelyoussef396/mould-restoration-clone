import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What causes mould growth in my home or business?',
      answer: 'Mould typically grows in areas with excessive moisture, poor ventilation, or water damage. Common causes include leaks, flooding, and humidity buildup.',
    },
    {
      question: 'How do you ensure mould is completely removed?',
      answer: 'We use advanced inspection techniques, comprehensive removal processes, and thorough testing to ensure all mould is eliminated. Our team follows strict protocols and uses professional-grade equipment for complete remediation.',
    },
    {
      question: 'How long does the mould removal process take?',
      answer: 'The duration depends on the extent of the mould contamination and the size of the affected area. Most residential projects take 1-3 days, while larger commercial projects may require longer. We provide detailed timelines during our initial assessment.',
    },
    {
      question: 'Can mould return after remediation?',
      answer: 'When properly remediated and the source of moisture is addressed, mould should not return. We provide guidance on preventing future mould growth and offer follow-up inspections to ensure long-term success.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-highlight font-semibold tracking-wider uppercase text-sm">
            FAQ'S
          </span>
          <h2 className="text-section font-bold text-foreground mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="service-card overflow-hidden">
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-card font-semibold text-card-foreground pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-highlight flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="section-divider mb-4"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};