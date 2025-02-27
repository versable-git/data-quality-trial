import { FiDownload } from "react-icons/fi";

export const Report = () => {
  return (
    <section className="hero bg-base-200">
      <div className="hero-content text-center py-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
            Want a More In-Depth Report?
          </h2>
          <p className="text-lg opacity-75 mb-8">
            Your full data audit includes detailed analysis and AI-powered
            recommendations. Book a demo to unlock all insights and learn how to
            fix data instantly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-accent btn-lg">Book a Demo</button>
            <button className="btn btn-outline bg-white btn-lg">
              <FiDownload className="mr-2" />
              Download Summary Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
