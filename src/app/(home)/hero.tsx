"use client";
import { FiUpload } from "react-icons/fi";
import { IoShieldOutline, IoShieldSharp } from "react-icons/io5";

export const Hero = () => {
  const handleUpload = () => {
    const uploadInput = document.getElementById("file-upload");
    const emailInput = document.getElementById("email-input");
    uploadInput?.click();
    emailInput?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 py-20 text-center text-gray-500 ">
      <div className="container max-w-4xl">
        <h1 className="mb-6 text-6xl font-bold tracking-tighter text-gray-900">
          How Accurate & Complete is Your Product Data? Find Out Instantly.
        </h1>
        <p className="mb-8 text-lg sm:text-xl">
          Discover how your product data measures up to PIES standards—and get
          expert recommendations to improve it instantly.
        </p>
        <button
          className="mb-8 btn btn-accent btn-md group/upload"
          onClick={() => handleUpload()}
        >
          <FiUpload
            className="mr-2 group-hover/upload:translate-y-[-2px] transition-all"
            size={20}
          />
          Get My Free Data Audit
        </button>
        <p className="text-sm text-muted-foreground">
          See where your data stands compared to PIES standards and learn how to
          improve it instantly.
        </p>
        <div className="mt-12">
          <div className="mx-auto group/shield relative h-12 w-12">
            <IoShieldSharp className="absolute mx-auto h-12 w-12 text-neutral opacity-0 group-hover/shield:opacity-100 transition-all" />
            <IoShieldOutline className="absolute mx-auto h-12 w-12 text-neutral opacity-50 group-hover/shield:opacity-0 transition-all cursor-none" />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            We respect your data privacy. No information will be shared.
          </p>
        </div>
      </div>
    </section>
  );
};
