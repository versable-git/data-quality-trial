/**
 * 
 * - Show number of products
- For each product, show the types of data present
- For each data category, show details - missing, incorrect
- For each detail, show quality
 */
"use client";
import { useEffect, useState } from "react";

const logText = [
  "Identified 3 products",
  "Scanning product data",
  "Validating against AutoCare data standards",
  "Compiling completeness score",
  "Estimating quality score",
  // "Identifying issues",
  // "Generating recommendations",
];

const TestResults = {
  completeness: 95,
  quality: 80,
  products: [
    {
      id: 1,
      completeness: 97,
      quality: 75,
      issues: [
        "Features and Benefits are repetitive",
        "Marketing copy is not SEO friendly",
      ],
    },
    {
      id: 2,
      completeness: 92,
      quality: 86,
      issues: [
        "Brand Name does not match AutoCare brand table",
        "Missing Short Title",
      ],
    },
    {
      id: 3,
      completeness: 95,
      quality: 80,
      issues: ["Missing Product Asset Links"],
    },
  ],
};

export const ImmediateResults = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [completedIndices, setCompletedIndices] = useState<number[]>([]);
  const [progressAnimation, setProgressAnimation] = useState(0);

  // Animation timing for each step (in milliseconds)
  const timings = [1500, 2000, 2500, 1800, 2200];

  useEffect(() => {
    if (activeIndex < logText.length - 1) {
      setActiveIndex(0);
    }
  }, []);

  useEffect(() => {
    if (activeIndex >= 0 && activeIndex < logText.length) {
      const timer = setTimeout(() => {
        setCompletedIndices((prev) => [...prev, activeIndex]);
        setActiveIndex((prev) => prev + 1);
      }, timings[activeIndex]);

      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  // Add this before the return statement
  const getItemStatus = (index: number) => {
    if (completedIndices.includes(index)) return "completed";
    if (index === activeIndex) return "loading";
    return "pending";
  };

  // Example data - would be replaced with actual analysis results
  // const sampleResults = [
  //   {
  //     id: 1,
  //     completeness: 85,
  //     quality: 92,
  //     issues: ["Missing description", "No images"],
  //   },
  //   {
  //     id: 2,
  //     completeness: 78,
  //     quality: 88,
  //     issues: ["Incomplete specifications"],
  //   },
  // ];

  const isProcessing = completedIndices.length < logText.length;

  useEffect(() => {
    // When processing is complete, start progress animation
    if (!isProcessing && progressAnimation < 100) {
      const timer = setTimeout(() => {
        setProgressAnimation((prev) => Math.min(prev + 1, 100));
      }, 5);
      return () => clearTimeout(timer);
    }
  }, [isProcessing, progressAnimation]);

  return (
    <section className="p-4 py-20">
      <div className="mx-auto max-w-4xl">
        {isProcessing && (
          <div className="mb-8 space-y-2 mx-auto text-center w-fit">
            {logText.map((text, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 transition-opacity duration-300 ${
                  index > activeIndex ? "opacity-0" : "opacity-100"
                }`}
              >
                <span
                  className={`${
                    getItemStatus(index) === "loading"
                      ? "animate-pulse text-accent"
                      : getItemStatus(index) === "completed"
                      ? "text-base-content"
                      : "opacity-0"
                  }`}
                >
                  {text}
                </span>
                {getItemStatus(index) === "loading" && (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-accent border-t-transparent" />
                )}
              </div>
            ))}
          </div>
        )}
        {!isProcessing && (
          <>
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter">
              Your Data Audit is Ready!
            </h2>

            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm opacity-70">Completeness Score</span>
                  <span className="font-medium">
                    {Math.round(
                      TestResults.completeness * (progressAnimation / 100)
                    )}
                    %
                  </span>
                </div>
                <progress
                  className="progress progress-accent w-full transition-all duration-100"
                  value={TestResults.completeness * (progressAnimation / 100)}
                  max="100"
                />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm opacity-70">Quality Score</span>
                  <span className="font-medium">
                    {Math.round(
                      TestResults.quality * (progressAnimation / 100)
                    )}
                    %
                  </span>
                </div>
                <progress
                  className="progress progress-accent w-full transition-all duration-100"
                  value={TestResults.quality * (progressAnimation / 100)}
                  max="100"
                />
              </div>
              {
                <div
                  className={
                    "w-fit mx-auto border-1 border-accent/20 rounded-lg px-4 pt-2 pb-4 transition duration-300 delay-300 " +
                    (progressAnimation === 100 ? "opacity-100" : "opacity-0")
                  }
                >
                  <span className="text-sm opacity-70">
                    Issues found in 2 out of {TestResults.products.length}{" "}
                    products
                  </span>
                  <div className="mt-1 list-inside list-disc text-sm">
                    <ul className="list-inside list-disc">
                      {TestResults.products.flatMap((product) =>
                        product.issues.map((issue, index) => (
                          <li key={`${product.id}-${index}`}>{issue}</li>
                        ))
                      )}
                    </ul>
                    <span>...and 9 more</span>
                  </div>
                </div>
              }
            </div>

            <div className="text-center mt-10">
              <button
                className="btn btn-accent btn-lg"
                onClick={() => {
                  window.open(
                    "https://calendly.com/tina-versable/30min?back=1&month=2025-03",
                    "popup",
                    "width=600,height=600"
                  );
                }}
              >
                Get a Full Report & Fix Instantly – Book a Demo
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
