export default function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Digital Marketing
            </h3>
            <p>
              Performance-based campaigns focused on leads, conversions,
              and real ROI.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              SEO & Growth
            </h3>
            <p>
              Technical and on-page SEO that drives long-term organic growth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Web & Conversion
            </h3>
            <p>
              Websites and landing pages designed to convert visitors
              into customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
