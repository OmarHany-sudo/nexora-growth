import Navbar from '@/components/Navbar';
import WhatsApp from '@/components/WhatsApp';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          We Grow Brands Using Data, SEO & Smart Marketing
        </h1>
        <p className="mb-8">
          We help businesses achieve measurable growth using performance marketing,
          SEO, and data-driven strategies — not guesswork.
        </p>
        <section className="grid md:grid-cols-3 gap-6 mt-12">
          <div><h3>Digital Marketing</h3><p>Performance-driven campaigns.</p></div>
          <div><h3>SEO & Growth</h3><p>Long-term organic traffic.</p></div>
          <div><h3>Web & Conversion</h3><p>Turn visitors into customers.</p></div>
        </section>
      </main>
      <WhatsApp />
    </>
  );
}