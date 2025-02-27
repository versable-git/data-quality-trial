"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaFileInvoice } from "react-icons/fa6";
import { RiAiGenerate } from "react-icons/ri";

export const DataUploadForm = ({
  setShowResults,
}: {
  setShowResults: (show: string) => void;
}) => {
  const urlSearchParams = useSearchParams();
  const initialEmail = urlSearchParams.get("email");

  const [formData, setFormData] = useState({
    email: initialEmail || "",
    file: null as File | null,
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setShowResults(Date.now().toString());
  };

  return (
    <section className="bg-base-200 px-4 py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
          Get a Free Data Audit in Seconds!
        </h2>
        <p className="mb-8 text-center text-lg text-gray-600">
          Upload your file below and instantly see how your product data
          measures up.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              required
              type="email"
              placeholder="Work Email"
              value={formData.email}
              className="input input-bordered input-neutral w-full max-w-xs"
              id="email-input"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition">
            <input
              type="file"
              accept=".xml,.xlsx,.xls"
              className="hidden"
              id="file-upload"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setFormData({ ...formData, file });
                }
              }}
            />
            <label
              htmlFor="file-upload"
              className="flex h-full p-8 cursor-pointer flex-col items-center justify-center gap-2"
            >
              {/* <Upload className="h-8 w-8 text-muted-foreground" /> */}
              {!formData.file && (
                <span className="text-sm text-gray-400">
                  Drop your PIES XML or Excel file here, or click to browse
                </span>
              )}
              {formData.file && (
                <div className="mt-2 text-sm text-neutral flex flex-col items-center">
                  <FaFileInvoice size={64} />
                  <span className="text-xs text-accent/50 mt-6 mb-1">
                    {formData.file.name}
                  </span>
                  {formData.file.name.endsWith(".xlsx") && (
                    <span className="text-xs text-accent/50">Excel file</span>
                  )}
                  {formData.file.name.endsWith(".xls") && (
                    <span className="text-xs text-accent/50">Excel file</span>
                  )}
                  {formData.file.name.endsWith(".xml") && (
                    <span className="text-xs text-accent/50">XML file</span>
                  )}
                </div>
              )}
            </label>
          </div>
          {formData.file && (
            <button
              type="submit"
              className="btn btn-accent w-full gap-2"
              disabled={!formData.file}
            >
              <RiAiGenerate size={18} />
              Generate My Data Score
            </button>
          )}
          <p className="text-center text-sm text-gray-400">
            We respect your data privacy. No information will be shared.
          </p>
        </form>
      </div>
    </section>
  );
};
