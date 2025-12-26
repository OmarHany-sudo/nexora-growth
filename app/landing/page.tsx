import Navbar from '../../components/Navbar';
import WhatsApp from '../../components/WhatsApp';

export default function Landing() {
  return (
    <>
      <Navbar />

      <section className="py-32 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Grow Your Business With Data-Driven Marketing
        </h1>
        <p className="max-w-xl mx-auto mb-8 text-slate-600">
          SEO, performance marketing, and conversion optimization
          designed for real business growth.
        </p>
        <a
          href="/contact"
          className="bg-cyan-600 text-white px-8 py-3 rounded-md"
        >
          Get Started
        </a>
      </section>

      <WhatsApp />
    </>
  );
}
