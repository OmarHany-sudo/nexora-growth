import Navbar from '../components/Navbar';
import WhatsApp from '../components/WhatsApp';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="py-28 text-center">
          <h1 className="text-4xl font-bold mb-4">
            We Grow Brands Using Data, SEO & Smart Marketing
          </h1>
          <p className="max-w-2xl mx-auto">
            We help businesses achieve measurable growth using performance
            marketing, SEO, and data-driven strategies — not guesswork.
          </p>
        </section>

        <Services />
      </main>

      <WhatsApp />
    </>
  );
}
