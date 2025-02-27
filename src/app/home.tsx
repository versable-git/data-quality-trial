"use client";
import { useState } from "react";
import { FAQ } from "./(home)/faq";
import { Footer } from "./(home)/footer";
import { Hero } from "./(home)/hero";
import { Report } from "./(home)/report";
import { ImmediateResults } from "./(home)/result";
import { DataUploadForm } from "./(home)/upload-form";

export const Home = () => {
  const [showResults, setShowResults] = useState<string | null>(null);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Data Upload Form */}
      <DataUploadForm setShowResults={setShowResults} />

      {showResults && (
        <>
          {/* Immediate Results */}
          <ImmediateResults key={showResults} />
          {/* Report CTA */}
          <Report />
        </>
      )}

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
};
