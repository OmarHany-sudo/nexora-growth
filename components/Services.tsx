export default function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Digital Marketing
            </h3>
            <p className="text-slate-600">
              Performance-based campaigns focused on leads, conversions,
              and real ROI.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              SEO & Growth
            </h3>
            <p className="text-slate-600">
              Technical and on-page SEO that increases visibility
              and long-term organic traffic.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Web & Conversion
            </h3>
            <p className="text-slate-600">
              Websites and landing pages built to convert visitors
              into real customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
