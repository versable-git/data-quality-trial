export const FAQ = () => {
  const faqs = [
    {
      question: "What is a Completeness Score?",
      answer:
        "A measure of how well your data aligns with PIES attribute requirements.",
    },
    {
      question: "What is a Quality Score?",
      answer:
        "AI-driven assessment of data accuracy, consistency, and richness.",
    },
    {
      question: "How long does the audit take?",
      answer:
        "Instant results for the first 10 parts. Full reports available in a demo session.",
    },
    {
      question: "How does Versable AI help fix my data?",
      answer:
        "Our AI-powered tools help auto-populate missing fields and improve accuracy.",
    },
  ];

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="join join-vertical w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow join-item border-b-1 border-neutral/10 rounded-none"
            >
              <input type="checkbox" name={`faq-${index}`} />
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
