import { FaArrowRightLong } from "react-icons/fa6";

export const Footer = () => {
  return (
    <section className="bg-base-200 px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl">
          Start Optimizing Your Product Data Today!
        </h2>
        <button className="btn btn-accent mb-8 gap-3 transition-all hover:gap-4">
          Get My Free Data Audit
          <FaArrowRightLong />
        </button>
        <p className="text-gray-600">
          Need help? Contact us at{" "}
          <a
            href="mailto:support@example.com"
            className="text-info hover:underline"
          >
            tina@versable.ai
          </a>
        </p>
      </div>
    </section>
  );
};
