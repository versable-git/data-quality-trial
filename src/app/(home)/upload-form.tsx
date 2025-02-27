"use client";
import { useState } from "react";

export const DataUploadForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    file: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
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
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 hover:border-gray-400 transition">
            <input
              type="file"
              accept=".xml,.xlsx,.xls"
              className="hidden"
              id="file-upload"
              onChange={(e) =>
                setFormData({ ...formData, file: e.target.files?.[0] || null })
              }
            />
            <label
              htmlFor="file-upload"
              className="flex cursor-pointer flex-col items-center justify-center gap-2"
            >
              {/* <Upload className="h-8 w-8 text-muted-foreground" /> */}
              <span className="text-sm text-gray-400">
                Drop your PIES XML or Excel file here, or click to browse
              </span>
              {formData.file && (
                <span className="mt-2 text-sm text-primary">
                  {formData.file.name}
                </span>
              )}
            </label>
          </div>
          <button type="submit" className="btn btn-accent w-full">
            Generate My Data Score
          </button>
          <p className="text-center text-sm text-gray-400">
            We respect your data privacy. No information will be shared.
          </p>
        </form>
      </div>
    </section>
  );
};
