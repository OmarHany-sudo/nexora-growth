export default function Hero() {
  return (
    <section className="py-32 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        We Grow Brands Using Data, SEO & Smart Marketing
      </h1>

      <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10">
        We help businesses achieve measurable growth using performance marketing,
        SEO, and data-driven strategies — not guesswork.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/contact"
          className="bg-cyan-600 text-white px-6 py-3 rounded-md"
        >
          Get a Free Consultation
        </a>
        <a
          href="/services"
          className="border px-6 py-3 rounded-md"
        >
          View Our Services
        </a>
      </div>
    </section>
  );
}
