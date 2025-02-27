export const ImmediateResults = () => {
  // Example data - would be replaced with actual analysis results
  const sampleResults = [
    {
      id: 1,
      completeness: 85,
      quality: 92,
      issues: ["Missing description", "No images"],
    },
    {
      id: 2,
      completeness: 78,
      quality: 88,
      issues: ["Incomplete specifications"],
    },
  ];

  return (
    <section className="p-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter">
          Your Data Audit is Ready!
        </h2>
        <div className="mb-8 space-y-6">
          {sampleResults.map((result) => (
            <div key={result.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <h3 className="card-title">Part #{result.id}</h3>
                  <div className="badge badge-ghost">Preview</div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm opacity-70">
                        Completeness Score
                      </span>
                      <span className="font-medium">
                        {result.completeness}%
                      </span>
                    </div>
                    <progress
                      className="progress progress-accent w-full"
                      value={result.completeness}
                      max="100"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm opacity-70">Quality Score</span>
                      <span className="font-medium">{result.quality}%</span>
                    </div>
                    <progress
                      className="progress progress-accent w-full"
                      value={result.quality}
                      max="100"
                    />
                  </div>
                  <div>
                    <span className="text-sm opacity-70">Issues Found:</span>
                    <ul className="mt-1 list-inside list-disc text-sm">
                      {result.issues.map((issue, index) => (
                        <li key={index}>{issue}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-accent btn-lg">
            Get a Full Report & Fix Instantly – Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};
