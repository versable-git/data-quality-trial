import { FAQ } from "./(home)/faq";
import { Footer } from "./(home)/footer";
import { Hero } from "./(home)/hero";
import { DataUploadForm } from "./(home)/upload-form";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Data Upload Form */}
      <DataUploadForm />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
};
