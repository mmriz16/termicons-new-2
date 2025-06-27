'use client';

import { useState } from 'react';

const Faq = () => {
  const [ expandedItem, setExpandedItem ] = useState<number | null>(null);

  const faqData = [
    {
      question: 'How many Free Icons are available?',
      answer: 'We have one of the biggest libraries of free icons, more than 3000 icons available for free. They are Regular icons of Normal weight with Filled versions of each icon. You can support the free project by subscribing to Termicons - Pro',
    },
    {
      question: 'What formats are the icons available in?',
      answer: 'Our icons are available in multiple formats including SVG, PNG, and IconFont. SVG format provides the best scalability and customization options for modern web development.',
    },
    {
      question: 'Can I use these icons in commercial projects?',
      answer: 'Yes, our free icons can be used in both personal and commercial projects. However, please check our license terms for specific usage guidelines and attribution requirements.',
    },
    {
      question: 'How do I download and use the icons?',
      answer: 'Simply browse our icon library, click on the icon you want, and choose your preferred format and size. You can download individual icons or entire sets for your project.',
    },
    {
      question: 'What\'s included in the Pro version?',
      answer: 'Termicons Pro includes access to premium icon sets, additional file formats, priority support, and commercial usage without attribution requirements.',
    },
    {
      question: 'How often are new icons added?',
      answer: 'We regularly update our icon library with new designs. Pro subscribers get early access to new icons and can request specific icons for their projects.',
    },
    {
      question: 'Do you provide support for implementation?',
      answer: 'Yes, we provide documentation and support for implementing our icons in various frameworks and platforms. Pro users receive priority support with faster response times.',
    },
  ];

  const toggleItem = (index: number) => {
    setExpandedItem((prev) => prev === index ? null : index);
  };

  return (
    <div className="container max-w-7xl mx-auto text-sm py-14 text-white">
      <div className="flex gap-12">
        <div className="flex-1 sticky top-[95px] self-start" id="faq-title">
          <p className='inline-flex mb-[30px] mx-auto bg-white/10 border-[1px] border-white/10 px-3 py-1.5 rounded-xl text-xs font-medium'>FAQ&apos;s</p>
          <h1 className='text-[54px] font-bold'>Frequently Asked Questions</h1>
        </div>
        <div className="flex-1 flex flex-col gap-4" id="completed-1" data-slot="scroll-area">
          {faqData.map((faq, index) => (
            <div key={index} className="card border border-white/10 rounded-3xl overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left transition-colors duration-200 flex justify-between items-center cursor-pointer"
              >
                <h2 className='text-base font-bold'>{faq.question}</h2>
                <svg
                  className={`w-6 h-6 transition-transform duration-200 ${
                    expandedItem === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedItem === index ?
                    'max-h-96 opacity-100' :
                    'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className='text-sm text-white/60'>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
